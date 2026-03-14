# EcoTERRA — Ecological Tools for Evidence-based Research, Reproducibility & Analysis

> A multi-agent method for quantitative ecology research.

## Project Identity

This is **EcoTERRA** — a structured, multi-agent workflow for ecology research. The core method lives in `ecoterra/` and is model-agnostic. The `.claude/` directory is an adapter layer that wires the method into Claude Code.

## Contractor Mode (Default Workflow)

For every non-trivial task, follow the **plan-implement-review-fix-score** cycle:

1. **Plan**: Read the task. Create a detailed approach. Get user approval before implementing.
2. **Implement**: Execute the plan. Write code, prose, or analysis as specified.
3. **Review**: Run the appropriate specialist agents in parallel (e.g., Analyst-Critic for code, Writer-Critic for manuscripts, MethodsReviewer for statistical work).
4. **Fix**: Address all issues flagged by reviewers. Do not skip findings.
5. **Score**: Rate the work 0–100. Apply quality gates:
   - **< 80**: Blocks commits. Must fix before saving.
   - **80–89**: Blocks pull requests. Needs improvement.
   - **90–94**: Merge-ready.
   - **95+**: Excellence.

## Domain Profile: Quantitative Ecology

### Core Statistical Methods
- Species Distribution Models (MaxEnt, GLMs, GAMs, BRTs, ensemble SDMs)
- Occupancy & Abundance models (single/multi-species, spatial, dynamic)
- Community ecology (diversity, ordination, joint SDMs)
- Population dynamics (mark-recapture, IPMs, matrix models)
- Spatial analysis (point patterns, geostatistics, spatial autocorrelation)
- Phylogenetic comparative methods (PGLS, phylogenetic diversity)
- Bayesian hierarchical modeling

### Primary Tools
- **R** (primary): tidyverse, sf, terra, vegan, unmarked, brms, ggplot2, biomod2
- **Python** (secondary): pandas, geopandas, scikit-learn, rasterio, matplotlib
- **LaTeX/Quarto**: Manuscript and presentation preparation
- **Git**: Version control for all code and manuscripts

### Key Data Sources
- GBIF (Global Biodiversity Information Facility)
- eBird / iNaturalist (citizen science)
- IUCN Red List
- WorldClim / CHELSA / ERA5-Land (climate)
- SoilGrids, MODIS, Landsat (environmental layers)
- Google Earth Engine / Microsoft Planetary Computer (geospatial platforms)
- BioTIME, PREDICTS, Living Planet Index (macroecology)

### Target Journals
- **BES**: Methods in Ecology and Evolution, Journal of Applied Ecology, Journal of Animal Ecology, Journal of Ecology, Functional Ecology, Ecological Solutions and Evidence
- **ESA**: Ecology, Ecological Monographs, Ecological Applications, Ecosphere
- **Wiley**: Global Ecology and Biogeography, Diversity and Distributions, Ecography, Ecology Letters, Conservation Biology, Conservation Letters
- **Nature Portfolio**: Nature Ecology & Evolution
- **Elsevier**: Biological Conservation, Science of the Total Environment
- **Cell Press**: Current Biology, One Earth

## Data Rules
- **Raw data is immutable.** Never modify files in `Data/raw/`. All transformations go to `Data/processed/`.
- Document every data transformation in code. No manual edits to data files.
- Follow FAIR principles (Findable, Accessible, Interoperable, Reusable).
- Archive data to Dryad, Zenodo, or Figshare before submission.

## Code Standards
- R: Follow tidyverse style guide. Use `here()` for paths. Set seeds for reproducibility.
- Python: Follow PEP 8. Use virtual environments.
- All scripts must run from the project root without hardcoded paths.
- Include session info / environment specs at the end of analysis scripts.

## Reporting Standards
- Report effect sizes and confidence intervals, not just p-values.
- For SDMs: Complete ODMAP protocol (see `ecoterra/templates/ODMAP_template.md`).
- For occupancy models: Report detection probability alongside occupancy estimates.
- Figures: Colorblind-safe palettes, 300+ DPI, journal dimension requirements.

## File Naming Conventions
- Scripts: `01_data_cleaning.R`, `02_model_fitting.R`, `03_visualization.R`
- Figures: `fig01_study_area_map.png`, `fig02_species_richness.png`
- Tables: `tab01_model_comparison.csv`
- Use lowercase with underscores. No spaces in filenames.

## Session Persistence
- Plans, session logs, and quality reports persist in `quality_reports/`.
- Use MEMORY.md for cross-session learning.
- Before context compression, save critical state to session log.
