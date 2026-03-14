---
description: Reproducibility and reporting standards checklist — FAIR data, ODMAP, code availability
user_invocable: true
---

# /checklist — Reproducibility & Reporting Standards

## Trigger
User wants to verify their project meets reproducibility and reporting standards before submission.

## Steps

1. **Determine applicable checklists**:
   - FAIR data principles (always)
   - Code availability standards (always)
   - ODMAP protocol (if SDM study)
   - ARRIVE guidelines (if animal experiment)
   - TOP guidelines (Transparency and Openness Promotion)
   - Journal-specific requirements

2. **Run the checklists**:

   ### FAIR Data Checklist
   - [ ] **Findable**: Data has persistent identifier (DOI from Dryad/Zenodo/Figshare)
   - [ ] **Findable**: Metadata describes the dataset completely
   - [ ] **Accessible**: Data in open repository with clear access conditions
   - [ ] **Accessible**: Download does not require special software
   - [ ] **Interoperable**: Standard file formats (CSV, GeoTIFF, GeoPackage)
   - [ ] **Interoperable**: Standard column names, documented CRS, ISO dates
   - [ ] **Reusable**: License specified (CC-BY, CC0)
   - [ ] **Reusable**: Column descriptions and units documented
   - [ ] **Reusable**: Processing steps documented in code

   ### Code Availability Checklist
   - [ ] All analysis code deposited in public repository (GitHub + Zenodo DOI)
   - [ ] README with clear reproduction instructions
   - [ ] Environment specification (renv.lock or requirements.txt)
   - [ ] Scripts run from project root without modification
   - [ ] No hardcoded absolute paths
   - [ ] Random seeds set for all stochastic operations
   - [ ] Session info / package versions documented
   - [ ] Pipeline tested end-to-end on a clean environment

   ### ODMAP Protocol (SDM Studies)
   - [ ] **Overview**: Objective, taxon, location, scale, algorithm, workflow
   - [ ] **Data**: Biodiversity data source, type, cleaning steps, sample size
   - [ ] **Data**: Predictor variables with source, resolution, rationale
   - [ ] **Model**: Algorithm settings, complexity tuning, feature selection
   - [ ] **Model**: Cross-validation strategy (spatial blocking preferred)
   - [ ] **Assessment**: Evaluation metrics (AUC, TSS, Boyce)
   - [ ] **Assessment**: Variable importance, response curves
   - [ ] **Prediction**: Threshold selection method, uncertainty maps
   - [ ] **Prediction**: Extrapolation assessment (MESS analysis)

   ### General Reporting Standards
   - [ ] Effect sizes reported with confidence/credible intervals
   - [ ] Sample sizes stated at all relevant levels
   - [ ] Model diagnostics reported
   - [ ] Model selection criteria and results shown
   - [ ] Software and package versions cited
   - [ ] Raw data immutable in `Data/raw/`
   - [ ] All transformations scripted (no manual edits)
   - [ ] Figures are colorblind-safe and ≥ 300 DPI

3. **Generate checklist report** saved to `quality_reports/`:
   - Pass/fail per item
   - Specific actions needed for failed items
   - Overall reproducibility score

4. **Suggest next steps**:
   - Fix any failed items
   - `/submit` — when all checklists pass
