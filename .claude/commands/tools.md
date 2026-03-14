---
description: Utility commands — compile LaTeX, validate bibliography, format for journal, deploy replication package
user_invocable: true
---

# /tools — Utility Commands

## Trigger
User wants to run a utility operation related to their project.

## Available Tools

Specify the tool after the command: `/tools [tool-name]`

### `compile-latex`
Compile the LaTeX manuscript:
- Run `pdflatex` → `bibtex` → `pdflatex` → `pdflatex`
- Report errors and warnings
- Check for undefined references and missing citations

### `compile-quarto`
Render the Quarto manuscript:
- Run `quarto render` for the target format (PDF, DOCX, HTML)
- Report errors
- Check cross-references and citations

### `validate-bib`
Check the bibliography file for issues:
- Verify all DOIs resolve
- Check for duplicate entries
- Check for missing fields (year, journal, pages)
- Check for inconsistent journal name formatting
- Check for retracted papers (if web access available)
- Report orphan entries (in .bib but not cited)
- Report missing entries (cited but not in .bib)

### `journal-format`
Format the manuscript for a specific journal:
- Apply journal-specific LaTeX class or Quarto template
- Set correct citation style (CSL or BST file)
- Adjust word count, abstract length, figure placement
- Check compliance with journal requirements

### `check-reproducibility`
Verify the analysis pipeline is reproducible:
- Check all scripts run from project root
- Check for hardcoded paths
- Check random seeds are set
- Check sessionInfo/environment specs present
- Check data provenance documented
- Attempt to re-run the pipeline (with user permission)

### `deploy-replication`
Build the replication package for data archiving:
- Collect cleaned data, scripts, and documentation into `Replication/`
- Generate README with reproduction instructions
- Include environment specification (renv.lock / requirements.txt)
- Validate the package runs end-to-end
- Prepare for upload to Dryad/Zenodo/Figshare

### `word-count`
Count words in the manuscript:
- Total word count
- Per-section breakdown
- Compare against journal limits
- Flag if over limit with suggestions for trimming
