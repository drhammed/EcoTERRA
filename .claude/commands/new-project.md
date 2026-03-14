---
description: Initialize a new ecology research project with full directory structure and configuration
user_invocable: true
---

# /new-project — Initialize Ecology Research Project

## Trigger
User wants to start a new ecology research project or set up the EcoTERRA workspace.

## Steps

1. **Gather project details** — Ask the user:
   - Project title and short name (for directory/file naming)
   - Focal taxa or ecological system
   - Geographic scope
   - Primary research question(s)
   - Target journal(s) (if known)
   - Primary language: R, Python, or both

2. **Create directory structure** (if not already present):
   ```
   Data/raw/
   Data/processed/
   Data/environmental/
   Scripts/R/
   Scripts/Python/
   Scripts/shell/
   Paper/
   Talks/
   Figures/
   Tables/
   Models/
   Supplementary/
   Replication/
   quality_reports/
   explorations/
   master_supporting_docs/
   ```

3. **Generate project files**:
   - `Bibliography_base.bib` — empty BibTeX file with header
   - `Data/raw/README.md` — data provenance template
   - `Scripts/R/00_setup.R` — package loading and configuration script (if R)
   - `Scripts/Python/00_setup.py` — environment setup (if Python)

4. **Configure for target journal** (if specified):
   - Set up LaTeX/Quarto template with journal formatting
   - Download appropriate CSL file for citations
   - Note word limits, figure requirements

5. **Create initial research strategy document** in `quality_reports/`:
   - Research question
   - Hypotheses
   - Planned approach
   - Data sources to explore

6. **Report summary** — Confirm what was created and suggest next steps:
   - `/discover` — to search literature and explore data availability
   - `/strategize` — to formalize study design
