# Statistical Methods in Ecology

> Decision guide for choosing the right analytical method.

## Method Selection Flowchart

```
What is your research question?
│
├─ Where does a species occur? → SDMs (Section 1)
├─ Is a species present, accounting for detection? → Occupancy Models (Section 2)
├─ How many individuals, accounting for detection? → Abundance Models (Section 3)
├─ How does community composition vary? → Community Ecology (Section 4)
├─ What drives population change? → Population Dynamics (Section 5)
├─ Is there spatial structure in the data? → Spatial Analysis (Section 6)
├─ Do traits vary with phylogeny? → Phylogenetic Methods (Section 7)
└─ Complex hierarchical structure? → Bayesian Modeling (Section 8)
```

## 1. Species Distribution Models (SDMs)

| Method | Data Type | Key Assumptions | When to Use |
|---|---|---|---|
| **MaxEnt** | Presence + background | Niche conservatism, representative sampling | Default for presence-only data |
| **GLM** | Presence-absence | Linear predictor, appropriate distribution | Interpretable parametric relationships |
| **GAM** | Presence-absence | Smooth nonlinear relationships | Nonlinear species-environment relationships |
| **BRT** | Presence + any | Few assumptions, handles interactions | Complex nonlinear relationships, interactions |
| **Random Forest** | Presence + any | Few assumptions | High-dimensional predictor space |
| **Ensemble** | Any | Multiple algorithms improve reliability | Default best practice for robust predictions |

**Evaluation**: AUC + TSS + Boyce index. Use spatial block CV.

## 2. Occupancy Models

| Model | Data Structure | Parameters | When to Use |
|---|---|---|---|
| **Single-species, single-season** | Sites × visits binary | ψ, p | Static occupancy, imperfect detection |
| **Single-species, multi-season** | Sites × visits × years | ψ, p, γ, ε | Colonization-extinction dynamics |
| **Multi-species** | Multiple species, sites × visits | Species-specific ψ, p | Community-level occupancy |
| **Spatial occupancy** | Sites × visits + spatial structure | ψ, p + spatial RE | Spatially autocorrelated occupancy |
| **N-mixture** | Sites × visits counts | λ, p | Abundance with imperfect detection |

**Key requirement**: Repeat visits to the same sites within a closure period.

## 3. Abundance Models

| Model | Data Type | When to Use |
|---|---|---|
| **Poisson GLM** | Counts | Equidispersed counts, detection = 1 |
| **Negative Binomial GLM** | Counts | Overdispersed counts, detection = 1 |
| **Zero-inflated** | Counts with excess zeros | Two processes: presence and abundance |
| **N-mixture** | Repeated counts | Abundance with imperfect detection |
| **Distance sampling** | Distances to individuals | Line/point transect data |
| **Hurdle model** | Counts with zeros | Separate zero vs. positive process |

## 4. Community Ecology

| Method | Question | Key Package |
|---|---|---|
| **Species richness** (rarefied) | How many species, standardized? | `iNEXT` |
| **Hill numbers** | Diversity at different orders (q=0,1,2) | `hillR`, `iNEXT` |
| **NMDS ordination** | How does composition differ across sites? | `vegan` |
| **PERMANOVA** | Does composition differ between groups? | `vegan::adonis2()` |
| **PERMDISP** | Does dispersion differ? (run before PERMANOVA) | `vegan::betadisper()` |
| **Indicator species** | Which species characterize groups? | `indicspecies` |
| **Beta diversity** | Turnover vs. nestedness? | `betapart` |
| **Joint SDMs** | Species-species associations + environment | `Hmsc`, `boral` |
| **mvGLM** | Multivariate abundance hypothesis testing | `mvabund` |

## 5. Population Dynamics

| Model | Data Type | Parameters |
|---|---|---|
| **CJS** | Capture-recapture | Survival (φ), recapture (p) |
| **POPAN** | Capture-recapture | N, φ, p, immigration |
| **Robust design** | Primary + secondary occasions | φ, p, γ, ε, N |
| **Matrix model** | Stage/age-structured life table | λ, sensitivity, elasticity |
| **IPM** | Multiple data sources | Integrated vital rates |

## 6. Spatial Analysis

| Method | Question | Key Package |
|---|---|---|
| **Moran's I** | Is there spatial autocorrelation? | `spdep` |
| **Variogram** | How does autocorrelation decay with distance? | `gstat` |
| **SAR/CAR** | Regression with spatial error/lag | `spdep`, `spatialreg` |
| **Spatial GLMM** | Random effects with spatial structure | `spaMM`, `INLA` |
| **Point patterns** | Is the spatial distribution random? | `spatstat` |
| **Landscape metrics** | Fragmentation, connectivity | `landscapemetrics` |

## 7. Phylogenetic Methods

| Method | Question | Key Package |
|---|---|---|
| **Pagel's λ** | Phylogenetic signal in continuous trait? | `phytools` |
| **Blomberg's K** | Phylogenetic signal (alternative) | `picante` |
| **PGLS** | Cross-species regression accounting for phylogeny | `caper` |
| **PD / MPD / MNTD** | Phylogenetic diversity of communities | `picante` |
| **Ancestral reconstruction** | What was the ancestral state? | `phytools`, `ape` |

## 8. Bayesian Modeling

**When to go Bayesian:**
- Complex hierarchical structure (random effects at multiple levels)
- Small sample sizes (regularization via priors)
- Prior information available from literature
- Need posterior distributions (not just point estimates)
- Non-standard models not available in frequentist packages

| Framework | Flexibility | Speed | Learning Curve |
|---|---|---|---|
| `brms` | High (formula interface) | Moderate | Low–Medium |
| `rstanarm` | Medium (canned models) | Moderate | Low |
| `nimble` | Very high (custom) | Variable | High |
| `JAGS` (via `R2jags`) | Very high (custom) | Slow | High |
| `Stan` (via `rstan`) | Very high (custom) | Fast (compiled) | Very high |

**Always report**: R-hat < 1.01, ESS > 400, trace plots, prior specification, posterior predictive checks.

## Model Selection Guide

| Approach | Criterion | When to Use |
|---|---|---|
| **Information-theoretic** | AIC/AICc + Akaike weights | Frequentist, model ranking |
| **Bayesian IC** | WAIC or LOO-CV | Bayesian, predictive performance |
| **Cross-validation** | k-fold or spatial block | When IC assumptions may fail |
| **Bayes factors** | BF | Direct model comparison (Bayesian) |
| **Hypothesis testing** | LRT, F-test | Nested models, specific hypotheses |

**Never use**: Stepwise p-value selection (inflated Type I error, biased estimates).
