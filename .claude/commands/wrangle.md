---
description: Data cleaning, taxonomic harmonization, and environmental variable extraction pipeline
user_invocable: true
---

# /wrangle — Data Wrangling Pipeline

## Trigger
User wants to clean occurrence data, harmonize taxonomy, extract environmental variables, or build an analysis-ready dataset.

## Steps

1. **Assess current data state**:
   - What raw data exists in `Data/raw/`?
   - What processing has already been done in `Data/processed/`?
   - What does the research strategy require?

2. **Plan the wrangling pipeline** (invoke Data-Engineer perspective):
   - Define the sequence of cleaning steps
   - Identify which scripts need to be written
   - Present the plan for user approval

3. **Build the pipeline** (numbered scripts in `Scripts/R/` or `Scripts/Python/`):

   **Script 01 — Data download/import**
   - Download from GBIF, eBird, etc. (or document manual download)
   - Save raw data to `Data/raw/` with provenance documentation
   - Log: source, date, query parameters, record count

   **Script 02 — Data cleaning**
   - Coordinate validation (CoordinateCleaner)
   - Remove duplicates, centroids, zero coordinates, sea records
   - Filter by coordinate uncertainty, basis of record, date range
   - Log record counts at each step

   **Script 03 — Taxonomic harmonization**
   - Resolve synonyms against GBIF Backbone / CoL
   - Document name changes
   - Flag ambiguous matches for user review

   **Script 04 — Spatial processing**
   - Set CRS explicitly
   - Spatial thinning (with justified distance)
   - Generate background/pseudo-absence points (if SDM)
   - Clip to study area

   **Script 05 — Environmental variable extraction**
   - Load and stack raster layers
   - Verify CRS, resolution, extent match
   - Extract values at occurrence and background points
   - Check multicollinearity (VIF, correlation matrix)
   - Save analysis-ready dataset

4. **Review** (invoke Data-Engineer-Critic):
   - Check provenance, coordinate validation, CRS, reproducibility
   - Verify FAIR compliance
   - Address findings

5. **Save outputs**:
   - Cleaned data → `Data/processed/`
   - Processing summary → `quality_reports/`

6. **Suggest next steps**:
   - `/analyze` — to run statistical models
   - `/visualize` — to explore data visually first
