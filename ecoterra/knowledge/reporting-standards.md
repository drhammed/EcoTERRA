# Reporting Standards for Ecology

> Guidelines and protocols for transparent reporting in ecological research.

## ODMAP (SDM Studies)

**Full name**: Overview, Data, Model, Assessment, Prediction
**Reference**: Zurell et al. (2020) *Ecography* 43: 1261–1277
**When required**: Any study using species distribution models
**Template**: See `ecoterra/templates/ODMAP_template.md`

**Key requirements**:
- Document model objective, taxon, location, scale
- Report biodiversity data source, cleaning, and sample size
- Document predictor variables with ecological rationale
- Report algorithm settings and tuning
- Report evaluation with spatial CV and multiple metrics
- Document prediction thresholds and uncertainty

## FAIR Data Principles

**Reference**: Wilkinson et al. (2016) *Scientific Data* 3: 160018

| Principle | Requirement |
|---|---|
| **Findable** | Persistent identifier (DOI), rich metadata |
| **Accessible** | Open repository, standard protocols |
| **Interoperable** | Standard formats, vocabularies, CRS |
| **Reusable** | License, provenance, community standards |

**Implementation**: Archive to Dryad, Zenodo, or Figshare with DOI before submission.

## TOP Guidelines (Transparency and Openness Promotion)

**Reference**: Nosek et al. (2015) *Science* 348: 1422–1425

| Standard | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| Data transparency | Disclose if data available | Data in public repository | Data at verified repository |
| Analytic code | Disclose if code available | Code in public repository | Code verified to reproduce |
| Materials | Disclose if materials available | Materials in repository | Materials verified |
| Design transparency | Disclose study design | Pre-register | Pre-register and verify |
| Replication | Encourage | Submit replications | Journal publishes replications |

## Statistical Reporting (APA + Ecology Conventions)

### Effect Sizes and Uncertainty

```
# Always report both:
β = 0.34, 95% CI [0.12, 0.56]
OR = 2.1, 95% CI [1.3, 3.4]
d = 0.65, 95% CI [0.22, 1.08]
```

### P-values
```
p = 0.023        # Exact (preferred)
p < 0.001        # When very small
p = 0.12         # Report exact, even when non-significant
```

**Never**: p = 0.000 (use p < 0.001), p = NS (report exact value)

### Model Comparison
```
AICc = 342.1, ΔAICc = 0, w = 0.62
AICc = 345.5, ΔAICc = 3.4, w = 0.23
```

### Bayesian Results
```
Posterior mean = −0.42, 95% CrI [−0.68, −0.18]
R-hat = 1.00, ESS = 2400
```

### Sample Sizes
Report at every level: "We surveyed 150 sites, each visited 3–5 times (mean = 3.8), recording 2,341 detections of 45 species."

## Software Citation

### R and R Packages
Always cite R itself and every package used in the analysis:

```r
citation()            # R itself
citation("unmarked")  # Specific package
```

Format: "All analyses were conducted in R version 4.3.2 (R Core Team, 2023). Occupancy models were fitted using unmarked version 1.3.2 (Fiske & Chandler, 2011)."

### Python
Cite Python, and major packages (NumPy, pandas, scikit-learn) with version numbers.

## ARRIVE Guidelines (Animal Experiments)

**When required**: Studies involving animal experiments (less common in observational ecology)
**Reference**: Percie du Sert et al. (2020) *PLOS Biology*

Key items: Study design, sample size justification, randomization, blinding, statistical methods, ethics approval.

## Ecology-Specific Conventions

### Detection Probability
When using observational data where detection < 1:
- Report detection probability alongside ecological parameters
- State the number of repeat surveys and survey-level covariates
- If detection is not modeled, justify why and discuss potential bias

### Spatial Data
- Always report CRS (EPSG code)
- Report spatial resolution and extent
- Document spatial thinning parameters
- Test for spatial autocorrelation in residuals

### Taxonomic Data
- Report taxonomic backbone used for harmonization
- Note any taxonomic changes made (synonyms resolved)
- State the taxonomic resolution of the analysis

### Conservation Context
- Report IUCN status for focal species
- Discuss management implications where relevant
- Be cautious with exact locations of threatened species

## Journal-Specific Requirements

Most ecology journals now require:
- [ ] Data Availability Statement (with DOI)
- [ ] Code Availability Statement (with repository URL)
- [ ] Author Contributions (CRediT format increasingly adopted)
- [ ] Conflict of Interest disclosure
- [ ] Ethics statement (if applicable)
- [ ] Funding statement
