#!/usr/bin/env bash
#
# swiss-design skill installer
#
# Detects which supported AI coding agents are installed (Claude Code, Codex,
# OpenCode), lets you pick which ones to target via an interactive checkbox,
# then installs the `swiss-design` skill into each selected tool's skills
# directory.
#
# Run it straight from GitHub:
#   bash <(curl -fsSL https://raw.githubusercontent.com/BurgiSimon/swiss-design-mirror/main/install.sh)
# (also works as `curl -fsSL .../install.sh | bash` — prompts read from /dev/tty)
#
set -euo pipefail

# ----------------------------------------------------------------------------
# config
# ----------------------------------------------------------------------------
REPO="BurgiSimon/swiss-design-mirror"
REPO_NAME="swiss-design-mirror"
BRANCH="main"
SKILL_NAME="swiss-design"
TARBALL="https://github.com/${REPO}/archive/refs/heads/${BRANCH}.tar.gz"

# Tool registry — parallel arrays: command, install dir, human label.
TOOL_CMDS=(claude codex opencode)
TOOL_DIRS=(
  "$HOME/.claude/skills"
  "$HOME/.codex/skills"
  "${XDG_CONFIG_HOME:-$HOME/.config}/opencode/skills"
)
TOOL_LABELS=("Claude Code" "Codex" "OpenCode")

# ----------------------------------------------------------------------------
# colors (only when stdout is a terminal)
# ----------------------------------------------------------------------------
if [ -t 1 ]; then
  BOLD=$'\033[1m'; DIM=$'\033[2m'; RED=$'\033[31m'; GREEN=$'\033[32m'
  ACCENT=$'\033[38;5;196m'; RESET=$'\033[0m'
else
  BOLD=""; DIM=""; RED=""; GREEN=""; ACCENT=""; RESET=""
fi

say()  { printf '%s\n' "$*"; }
info() { printf '%s\n' "${DIM}$*${RESET}"; }
ok()   { printf '%s\n' "${GREEN}✓${RESET} $*"; }
err()  { printf '%s\n' "${RED}✗ $*${RESET}" >&2; }
die()  { err "$*"; exit 1; }

# ----------------------------------------------------------------------------
# preflight
# ----------------------------------------------------------------------------
command -v curl >/dev/null 2>&1 || die "curl is required but not found."
command -v tar  >/dev/null 2>&1 || die "tar is required but not found."

printf '\n%s\n' "${BOLD}swiss-design${RESET} ${DIM}· AI Agent Skill installer${RESET}"
printf '%s\n\n' "${ACCENT}────────────────────────────────────────${RESET}"

# ----------------------------------------------------------------------------
# 1. detect installed tools
# ----------------------------------------------------------------------------
FOUND_IDX=()   # indices into the TOOL_* arrays that are installed
for i in "${!TOOL_CMDS[@]}"; do
  if command -v "${TOOL_CMDS[$i]}" >/dev/null 2>&1; then
    FOUND_IDX+=("$i")
    ok "Found ${BOLD}${TOOL_LABELS[$i]}${RESET} ${DIM}(${TOOL_CMDS[$i]})${RESET}"
  else
    info "Not found: ${TOOL_LABELS[$i]} (${TOOL_CMDS[$i]})"
  fi
done

if [ "${#FOUND_IDX[@]}" -eq 0 ]; then
  printf '\n'
  info "None of Claude Code, Codex, or OpenCode were detected on your PATH."
  info "Install one of them, then re-run this script."
  exit 0
fi

# ----------------------------------------------------------------------------
# 2. choose which tools to target
# ----------------------------------------------------------------------------
# CHECKED[k] is "1"/"0" for the k-th entry of FOUND_IDX (all on by default).
CHECKED=()
for _ in "${FOUND_IDX[@]}"; do CHECKED+=("1"); done

# Pick an interactive terminal: prefer /dev/tty so `curl | bash` still works.
TTY=""
if [ -r /dev/tty ] && [ -w /dev/tty ]; then
  TTY="/dev/tty"
elif [ -t 0 ]; then
  TTY="/dev/stdin"
fi

render_checkbox() {
  local cursor="$1" k idx mark line
  printf '\033[2K%s\n' "${BOLD}Select tools to install the skill into:${RESET}"
  printf '\033[2K%s\n' "${DIM}↑/↓ move · space toggle · a all · enter confirm · q cancel${RESET}"
  for k in "${!FOUND_IDX[@]}"; do
    idx="${FOUND_IDX[$k]}"
    [ "${CHECKED[$k]}" = "1" ] && mark="${ACCENT}[x]${RESET}" || mark="[ ]"
    line=$(printf '%s %s  %s' "$mark" "${TOOL_LABELS[$idx]}" "${DIM}${TOOL_DIRS[$idx]}/${SKILL_NAME}${RESET}")
    if [ "$k" -eq "$cursor" ]; then
      printf '\033[2K%s\n' "${BOLD}❯ ${line}${RESET}"
    else
      printf '\033[2K%s\n' "  ${line}"
    fi
  done
}

interactive_select() {
  local cursor=0 key rest total="${#FOUND_IDX[@]}"
  local lines=$(( total + 2 ))
  render_checkbox "$cursor"
  while true; do
    IFS= read -rsn1 key <"$TTY" || key=$'\n'   # EOF -> treat as confirm
    if [ "$key" = $'\033' ]; then              # escape sequence (arrow keys)
      read -rsn2 -t 0.05 rest <"$TTY" || rest=""
      case "$rest" in
        '[A') key="up" ;;
        '[B') key="down" ;;
        *)    key="esc" ;;                      # bare ESC or unknown -> cancel
      esac
    fi
    case "$key" in
      up|k)    cursor=$(( (cursor - 1 + total) % total )) ;;
      down|j)  cursor=$(( (cursor + 1) % total )) ;;
      ' ')     [ "${CHECKED[$cursor]}" = "1" ] && CHECKED[$cursor]="0" || CHECKED[$cursor]="1" ;;
      a|A)
        local any0=0 m
        for m in "${CHECKED[@]}"; do [ "$m" = "0" ] && any0=1; done
        for m in "${!CHECKED[@]}"; do CHECKED[$m]=$([ "$any0" = "1" ] && echo 1 || echo 0); done
        ;;
      q|Q|esc) printf '\n'; info "Cancelled."; exit 0 ;;
      ''|$'\n'|$'\r') break ;;                  # Enter -> confirm
      *) : ;;                                   # ignore anything else
    esac
    printf '\033[%dA' "$lines"   # move cursor back up to redraw in place
    render_checkbox "$cursor"
  done
}

numbered_select() {
  # Fallback when there is no usable TTY (purely non-interactive).
  local k idx ans
  printf '%s\n' "${BOLD}Select tools (no interactive terminal detected):${RESET}"
  for k in "${!FOUND_IDX[@]}"; do
    idx="${FOUND_IDX[$k]}"
    printf '  %d) %s  %s\n' "$((k + 1))" "${TOOL_LABELS[$idx]}" "${DIM}${TOOL_DIRS[$idx]}${RESET}"
  done
  printf '%s' "Enter numbers (e.g. 1 3), 'all', or blank for all: "
  IFS= read -r ans || ans=""
  ans="${ans//,/ }"
  if [ -z "$ans" ] || [ "$ans" = "all" ]; then
    return 0   # keep all checked (default)
  fi
  local m
  for m in "${!CHECKED[@]}"; do CHECKED[$m]="0"; done
  for m in $ans; do
    case "$m" in
      ''|*[!0-9]*) continue ;;
      *) [ "$m" -ge 1 ] && [ "$m" -le "${#FOUND_IDX[@]}" ] && CHECKED[$((m - 1))]="1" ;;
    esac
  done
}

printf '\n'
if [ -n "$TTY" ]; then
  interactive_select
else
  numbered_select
fi

# Collect the chosen tool indices.
SELECTED_IDX=()
for k in "${!FOUND_IDX[@]}"; do
  [ "${CHECKED[$k]}" = "1" ] && SELECTED_IDX+=("${FOUND_IDX[$k]}")
done

if [ "${#SELECTED_IDX[@]}" -eq 0 ]; then
  printf '\n'
  info "Nothing selected — nothing to do."
  exit 0
fi

# ----------------------------------------------------------------------------
# 3. download the skill once
# ----------------------------------------------------------------------------
printf '\n'
info "Downloading the swiss-design skill…"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

curl -fsSL "$TARBALL" | tar -xz -C "$TMP" \
  || die "Failed to download or extract $TARBALL"

SRC="$TMP/${REPO_NAME}-${BRANCH}"
[ -f "$SRC/SKILL.md" ]  || die "SKILL.md not found in the downloaded archive."
[ -d "$SRC/references" ] || die "references/ not found in the downloaded archive."

# ----------------------------------------------------------------------------
# 4. install into each selected tool
# ----------------------------------------------------------------------------
printf '\n'
STAMP="$(date +%Y%m%d%H%M%S)"
for idx in "${SELECTED_IDX[@]}"; do
  dir="${TOOL_DIRS[$idx]}"
  dest="$dir/$SKILL_NAME"

  if [ -e "$dest" ]; then
    mv "$dest" "${dest}.bak-${STAMP}"
    info "Backed up existing install → ${dest}.bak-${STAMP}"
  fi

  mkdir -p "$dest"
  cp "$SRC/SKILL.md" "$dest/"
  cp -R "$SRC/references" "$dest/"
  ok "${BOLD}${TOOL_LABELS[$idx]}${RESET} → ${dest}"
done

# ----------------------------------------------------------------------------
# 5. done
# ----------------------------------------------------------------------------
printf '\n%s\n' "${GREEN}${BOLD}Installed the swiss-design skill.${RESET}"
info "Restart your CLI / start a new session — the agent will then discover it."
printf '\n'
