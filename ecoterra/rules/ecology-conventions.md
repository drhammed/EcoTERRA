---
description: Ecological terminology, naming conventions, and reporting standards for quantitative ecology research
globs: *
alwaysApply: true
---

# Ecology Conventions

Standards for terminology, reporting, and scientific communication in quantitative ecology research.

## Terminology

### Use Precise Ecological Terms

- **Species richness**, not "number of species" (in technical contexts)
- **Abundance**, not "count" (when referring to population/community measures)
- **Occurrence**, not "presence" (for GBIF/survey data points)
- **Detection probability**, not "chance of seeing" (in occupancy modeling contexts)
- **Occupancy** (ψ), not "presence probability" (for occupancy models specifically)
- **Colonization** (γ) and **extinction** (ε) for dynamic occupancy parameters
- **Covariate**, not "variable" or "feature" (in ecological modeling)
- **Effect size**, not "impact" (which implies causation)

### Taxonomic Standards

- Use binomial nomenclature: *Genus species* (italicized)
- Include taxonomic authority on first mention in manuscripts: *Quercus robur* L.
- Use accepted names from authoritative sources (GBIF Backbone Taxonomy, ITIS, WoRMS)
- Document taxonomic harmonization steps when merging datasets
- Specify the taxonomic resolution of your analysis (species, genus, family)

### Spatial & Temporal Terms

- **Extent**: The total geographic area of the study
- **Grain** (resolution): The size of individual sampling units
- **Site**: A discrete sampling location
- **Survey/visit**: A single sampling occasion at a site
- **Season**: Use standard ecological seasons or define explicitly
- Always report the **coordinate reference system** (CRS) — e.g., WGS 84 (EPSG:4326)
- Use ISO 8601 date format in data: `YYYY-MM-DD`

## Statistical Reporting

### Always Report

1. **Effect sizes** with confidence/credible intervals — never p-values alone
2. **Sample sizes** at every relevant level (sites, surveys, individuals)
3. **Model diagnostics**: residual checks, convergence (Bayesian), goodness-of-fit
4. **Model selection criteria**: AIC/AICc/BIC for frequentist; WAIC/LOO-CV for Bayesian
5. **Variance explained** (R², pseudo-R², or equivalent) where meaningful
6. **Spatial autocorrelation** checks for spatial data (Moran's I, variograms)

### Formatting

- Report p-values as: *p* = 0.023 (exact), *p* < 0.001 (when very small)
- Report confidence intervals as: 95% CI [lower, upper]
- Report Bayesian credible intervals as: 95% CrI [lower, upper]
- Report means with SD or SE: mean ± SD (specify which)
- Use consistent decimal places (typically 2–3 for ecological data)
- Report AIC/BIC with ΔAIC/ΔBIC and Akaike weights where appropriate

### Detection & Observation Process

For studies using observational data where detection is imperfect:

- **Always consider** whether imperfect detection could bias results
- **Use occupancy models** (`unmarked`, `spOccupancy`) when detection < 1 is plausible
- **Report detection probability** alongside occupancy/abundance estimates
- **Document** the number of repeat surveys per site and survey-level covariates
- **Flag** if a standard GLM/GAM is used instead of an occupancy model, and justify

### Species Distribution Models (SDMs)

- Follow the **ODMAP protocol** (Overview, Data, Model, Assessment, Prediction)
- Report **model evaluation metrics**: AUC, TSS, Boyce index (not AUC alone)
- Document **background/pseudo-absence selection** method
- Report **spatial thinning** parameters if applied
- Specify **variable selection** method and multicollinearity checks (VIF < 10)
- Document **transferability** assessment if projecting to new regions/times
- Use **ensemble approaches** where feasible (`biomod2`, `sdm`)

## Data Standards

### FAIR Principles

- **Findable**: Use persistent identifiers (DOIs for datasets)
- **Accessible**: Archive data to Dryad, Zenodo, or Figshare
- **Interoperable**: Use standard formats (CSV for tabular, GeoTIFF for rasters, GeoPackage for vectors)
- **Reusable**: Include metadata, column descriptions, units, and licenses

### File Organization

- Raw data is **immutable** — never modify files in `Data/raw/`
- All transformations go to `Data/processed/`
- Environmental layers go to `Data/environmental/`
- Document every transformation in code — no manual edits

### Coordinate Data

- Validate coordinates (latitude/longitude ranges, land vs. sea)
- Flag and handle coordinate precision issues (e.g., centroid snapping in GBIF)
- Apply spatial thinning for SDMs to reduce spatial autocorrelation in training data
- Specify the CRS explicitly in code (`sf::st_crs()`, `terra::crs()`)

## Manuscript Conventions

### Structure (Standard Ecology Paper)

1. **Title**: Concise, informative, includes key taxa/system/method
2. **Abstract**: Background → Gap → Methods → Key results → Implications (≤300 words typical)
3. **Introduction**: Broad context → Specific gap → Study objectives → Hypotheses
4. **Methods**: Study area → Data collection → Statistical analysis (reproducible detail)
5. **Results**: Follow methods order, lead with key findings, reference all figures/tables
6. **Discussion**: Key findings → Ecological interpretation → Caveats → Broader implications → Conservation relevance
7. **Data Availability**: Where data and code are archived
8. **References**: Follow target journal style

### Writing Style

- Use active voice for methods: "We fitted a generalized linear model" not "A GLM was fitted"
- Use past tense for methods and results
- Use present tense for established facts and discussion
- Avoid jargon when simpler terms suffice, but use technical terms precisely
- Define abbreviations on first use

### Figure Standards

- **Colorblind-safe palettes**: Use `viridis`, `scico`, or Okabe-Ito palette
- **Resolution**: ≥ 300 DPI for publication
- **Dimensions**: Check target journal requirements (commonly single column: 80mm, double: 170mm)
- **File formats**: PDF or TIFF for submission; PNG for drafts and presentations
- **Labels**: Axis labels with units, clear legends, panel labels (a, b, c) for multi-panel
- **Maps**: Include scale bar, north arrow, coordinate grid, and CRS notation

## Conservation Context

- Discuss conservation implications when relevant — most ecology journals expect this
- Note IUCN Red List status for focal species where applicable
- Consider management relevance of findings
- Be cautious about publishing exact locations of threatened species
- Frame predictions and recommendations with appropriate uncertainty
