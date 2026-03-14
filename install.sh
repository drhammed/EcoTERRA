#!/usr/bin/env bash
#
# EcoTERRA — Adapter Installer (shell fallback)
#
# Ecological Tools for Evidence-based Research, Reproducibility & Analysis
#
# For users who prefer not to use npx. Equivalent to:
#   npx ecoterra install --target claude
#
# Usage:
#   ./install.sh                         # Install Claude Code adapter (default)
#   ./install.sh --target claude         # Install Claude Code adapter
#   ./install.sh --target cursor         # Install Cursor adapter
#   ./install.sh --target all            # Install all adapters
#   ./install.sh --clean                 # Remove generated adapter directories
#   ./install.sh --init                  # Full project scaffold + method + adapter

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ECOTERRA_DIR="$SCRIPT_DIR/ecoterra"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

usage() {
    echo -e "${BOLD}EcoTERRA${NC} — Ecological Tools for Evidence-based Research, Reproducibility & Analysis"
    echo ""
    echo "Usage:"
    echo "  ./install.sh                         Install for Claude Code (default)"
    echo "  ./install.sh --target claude|cursor|all"
    echo "  ./install.sh --init                  Full project scaffold + adapter"
    echo "  ./install.sh --clean                 Remove adapter directories"
    echo "  ./install.sh --help                  Show this help"
}

count_md_files() {
    local dir="$1"
    if [ -d "$dir" ]; then
        find "$dir" -name "*.md" -maxdepth 1 | wc -l | tr -d ' '
    else
        echo "0"
    fi
}

install_claude() {
    echo -e "${GREEN}Installing Claude Code adapter...${NC}"

    local claude_dir="$SCRIPT_DIR/.claude"
    mkdir -p "$claude_dir/agents" "$claude_dir/commands" "$claude_dir/rules" "$claude_dir/hooks"

    # Copy agents
    if [ -d "$ECOTERRA_DIR/agents" ]; then
        for f in "$ECOTERRA_DIR/agents"/*.md; do
            [ -f "$f" ] && cp "$f" "$claude_dir/agents/"
        done
        echo "  Agents: $(count_md_files "$ECOTERRA_DIR/agents") files"
    fi

    # Copy workflows → commands (slash commands)
    if [ -d "$ECOTERRA_DIR/workflows" ]; then
        for f in "$ECOTERRA_DIR/workflows"/*.md; do
            [ -f "$f" ] && cp "$f" "$claude_dir/commands/"
        done
        echo "  Commands: $(count_md_files "$ECOTERRA_DIR/workflows") files"
    fi

    # Copy rules
    if [ -d "$ECOTERRA_DIR/rules" ]; then
        for f in "$ECOTERRA_DIR/rules"/*.md; do
            [ -f "$f" ] && cp "$f" "$claude_dir/rules/"
        done
        echo "  Rules: $(count_md_files "$ECOTERRA_DIR/rules") files"
    fi

    echo -e "${GREEN}Claude Code adapter installed successfully.${NC}"
}

install_cursor() {
    echo -e "${GREEN}Installing Cursor adapter...${NC}"

    local cursor_dir="$SCRIPT_DIR/.cursor"
    mkdir -p "$cursor_dir/rules"

    if [ -d "$ECOTERRA_DIR/rules" ]; then
        for f in "$ECOTERRA_DIR/rules"/*.md; do
            [ -f "$f" ] && cp "$f" "$cursor_dir/rules/"
        done
        echo "  Rules: $(count_md_files "$ECOTERRA_DIR/rules") files"
    fi

    if [ -f "$SCRIPT_DIR/CLAUDE.md" ]; then
        cp "$SCRIPT_DIR/CLAUDE.md" "$SCRIPT_DIR/.cursorrules"
        echo "  Generated .cursorrules from CLAUDE.md"
    fi

    echo -e "${GREEN}Cursor adapter installed successfully.${NC}"
    echo -e "${YELLOW}Note: Cursor does not natively support agents/skills. Rules installed.${NC}"
}

init_project() {
    echo -e "${BOLD}Initializing EcoTERRA project...${NC}"

    local dirs=(
        "Data/raw" "Data/processed" "Data/environmental"
        "Scripts/R" "Scripts/Python" "Scripts/shell"
        "Paper" "Talks" "Figures" "Tables" "Models"
        "Supplementary" "Replication" "quality_reports"
        "explorations" "master_supporting_docs"
    )

    for dir in "${dirs[@]}"; do
        mkdir -p "$SCRIPT_DIR/$dir"
    done
    echo -e "  ${GREEN}Created ${#dirs[@]} workspace directories${NC}"

    # Create Bibliography_base.bib
    if [ ! -f "$SCRIPT_DIR/Bibliography_base.bib" ]; then
        echo -e "% EcoTERRA — Bibliography\n% Add your references here\n" > "$SCRIPT_DIR/Bibliography_base.bib"
        echo "  Created Bibliography_base.bib"
    fi

    install_claude

    echo -e "\n${BOLD}${GREEN}EcoTERRA project initialized successfully!${NC}"
    echo -e "\nNext steps:"
    echo -e "  1. Run ${BOLD}claude${NC} to start Claude Code"
    echo -e "  2. Use ${BOLD}/new-project${NC} to configure your research project"
}

clean() {
    echo -e "${YELLOW}Cleaning generated adapter directories...${NC}"
    [ -d "$SCRIPT_DIR/.claude" ] && rm -rf "$SCRIPT_DIR/.claude" && echo "  Removed .claude/"
    [ -d "$SCRIPT_DIR/.cursor" ] && rm -rf "$SCRIPT_DIR/.cursor" && echo "  Removed .cursor/"
    [ -f "$SCRIPT_DIR/.cursorrules" ] && rm "$SCRIPT_DIR/.cursorrules" && echo "  Removed .cursorrules"
    echo -e "${GREEN}Clean complete.${NC}"
}

# Parse arguments — default to Claude Code install
if [ $# -eq 0 ]; then
    install_claude
    exit 0
fi

case "$1" in
    --target)
        [ $# -lt 2 ] && echo -e "${RED}Error: --target requires claude|cursor|all${NC}" && exit 1
        case "$2" in
            claude) install_claude ;;
            cursor) install_cursor ;;
            all)    install_claude; install_cursor ;;
            *)      echo -e "${RED}Unknown target: $2${NC}"; exit 1 ;;
        esac
        ;;
    --init)  init_project ;;
    --clean) clean ;;
    --help)  usage ;;
    *)       echo -e "${RED}Unknown option: $1${NC}"; usage; exit 1 ;;
esac
