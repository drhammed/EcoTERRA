# ODMAP Protocol Template

> Overview, Data, Model, Assessment, Prediction — reporting protocol for Species Distribution Models.
> Based on Zurell et al. (2020) *Ecography* 43: 1261–1277. DOI: 10.1111/ecog.04960

---

## 1. Overview

### 1.1 Authorship
- **Authors**: [names]
- **Contact**: [email]
- **Title**: [study title]

### 1.2 Model objective
- [ ] Mapping & interpolation
- [ ] Forecasting & transfer
- [ ] Ecological inference & explanation

### 1.3 Focal taxon
- **Species/group**: [binomial or group name]
- **Taxonomic authority**: [source]
- **IUCN status**: [if applicable]

### 1.4 Location
- **Study area**: [description]
- **Extent**: [bounding box or region name]
- **CRS**: [EPSG code]

### 1.5 Scale of analysis
- **Spatial resolution (grain)**: [e.g., 1 km]
- **Spatial extent**: [e.g., 500 × 400 km]
- **Temporal resolution**: [e.g., 2010–2020]
- **Temporal extent**: [e.g., breeding season May–July]

### 1.6 Biodiversity data overview
- **Type**: Presence-only / Presence-absence / Abundance
- **Source**: [GBIF, eBird, field surveys, etc.]
- **Number of records**: [n presences, n absences if applicable]

### 1.7 Type of model
- **Algorithm(s)**: [MaxEnt, GLM, GAM, BRT, RF, ensemble, etc.]
- **Software**: [R packages with versions]

### 1.8 Workflow overview
[Brief description of the modelling workflow]

---

## 2. Data

### 2.1 Biodiversity data
- **Source and access**: [database, DOI, download date]
- **Sampling design**: [structured survey / opportunistic / citizen science]
- **Sample size**: [n records before and after cleaning]
- **Data cleaning steps**:
  - [ ] Coordinate validation
  - [ ] Duplicate removal
  - [ ] Temporal filtering
  - [ ] Spatial thinning (distance: [X km], method: [package])
- **Sampling bias**: [known biases and how addressed]

### 2.2 Absence / background data
- **Type**: True absences / Pseudo-absences / Background points
- **Generation method**: [random, target-group, geographic buffer, etc.]
- **Number**: [n points]
- **Ratio to presences**: [e.g., 1:1, 10:1]
- **Justification**: [why this method and ratio]

### 2.3 Predictor variables

| Variable | Source | Resolution | Type | Ecological Rationale |
|---|---|---|---|---|
| [bio1] | [WorldClim v2.1] | [1 km] | [Continuous] | [Temperature drives metabolic rate] |
| [bio12] | [WorldClim v2.1] | [1 km] | [Continuous] | [Precipitation affects habitat] |
| [elevation] | [SRTM] | [90 m] | [Continuous] | [Elevation shapes microclimate] |
| [land_cover] | [ESA WorldCover] | [10 m] | [Categorical] | [Habitat type determines occurrence] |

### 2.4 Multicollinearity
- **Method**: [VIF / Pearson correlation / both]
- **Threshold**: [VIF < 10, |r| < 0.7]
- **Variables removed**: [list with justification]

---

## 3. Model

### 3.1 Algorithm details

| Setting | Value |
|---|---|
| Algorithm | [e.g., MaxEnt via maxnet] |
| Feature classes | [linear, quadratic, hinge, etc.] |
| Regularization | [multiplier value or tuning range] |
| Tuning method | [ENMeval, blockCV, manual] |
| Complexity selection | [AICc, cross-validation metric] |

### 3.2 Model complexity
- **Feature selection**: [method: forward, backward, none]
- **Tuning results**: [optimal regularization, features selected]

### 3.3 Ensemble details (if applicable)
- **Algorithms in ensemble**: [list]
- **Weighting method**: [equal, TSS-weighted, AUC-weighted]
- **Threshold for inclusion**: [e.g., TSS > 0.7]

---

## 4. Assessment

### 4.1 Cross-validation
- **Strategy**: [random k-fold / spatial block / leave-one-out / checkerboard]
- **Number of folds**: [k]
- **Blocking method**: [spatial autocorrelation range, block size]
- **Justification**: [why this strategy]

### 4.2 Evaluation metrics

| Metric | Mean ± SD | Range |
|---|---|---|
| AUC | [value] | [min–max] |
| TSS | [value] | [min–max] |
| Boyce index | [value] | [min–max] |

### 4.3 Variable importance

| Variable | Importance (%) | Method |
|---|---|---|
| [var1] | [value] | [permutation / marginal] |
| [var2] | [value] | |

### 4.4 Response curves
- Included: [Yes/No]
- Ecologically plausible: [assessment]

---

## 5. Prediction

### 5.1 Prediction output
- **Type**: [continuous suitability / binary presence-absence / both]
- **Threshold method**: [max TSS, sensitivity = specificity, 10th percentile, etc.]
- **Threshold value**: [value]

### 5.2 Uncertainty
- **Quantified**: [Yes/No]
- **Method**: [SD across ensemble members / CV across folds]
- **Presented as**: [map / confidence intervals / both]

### 5.3 Extrapolation
- **MESS analysis**: [conducted? results?]
- **Novel environments flagged**: [Yes/No]
- **Clamping applied**: [Yes/No]

### 5.4 Transfer (if projecting to new time/space)
- **Projection scenario**: [e.g., SSP2-4.5, 2050]
- **Climate model**: [e.g., CMIP6 ensemble]
- **Transfer assessment**: [how reliability of transfer was evaluated]

---

## References
- Zurell D, et al. (2020) A standard protocol for reporting species distribution models. *Ecography* 43: 1261–1277.
