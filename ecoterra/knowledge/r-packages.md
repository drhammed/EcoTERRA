# R Packages for Ecology

> Quick reference for the ecology R package ecosystem.

## Data Access & Manipulation

| Package | Purpose | Key Functions |
|---|---|---|
| `rgbif` | GBIF occurrence data | `occ_search()`, `occ_download()` |
| `rinat` | iNaturalist data | `get_inat_obs()` |
| `rebird` | eBird API | `ebirdregion()`, `ebirdgeo()` |
| `auk` | eBird Basic Dataset filtering | `auk_ebd()`, `auk_filter()` |
| `rredlist` | IUCN Red List API | `rl_search()`, `rl_threats()` |
| `taxize` | Taxonomic harmonization | `gnr_resolve()`, `get_tsn()` |
| `CoordinateCleaner` | Coordinate validation | `cc_val()`, `cc_cen()`, `cc_sea()` |
| `tidyverse` | Data manipulation suite | `dplyr`, `tidyr`, `purrr`, `readr` |
| `here` | Project-relative paths | `here()` |

## Spatial

| Package | Purpose | Key Functions |
|---|---|---|
| `sf` | Vector spatial operations | `st_read()`, `st_transform()`, `st_buffer()` |
| `terra` | Raster operations | `rast()`, `extract()`, `project()` |
| `ggspatial` | Map annotations for ggplot2 | `annotation_scale()`, `annotation_north_arrow()` |
| `tidyterra` | ggplot2 integration for terra | `geom_spatraster()` |
| `spThin` | Spatial thinning | `thin()` |
| `blockCV` | Spatial cross-validation | `cv_spatial()`, `cv_buffer()` |
| `geodata` | Download environmental data | `worldclim_global()`, `soil_world()` |

## Species Distribution Models

| Package | Purpose | Key Functions |
|---|---|---|
| `biomod2` | Ensemble SDMs | `BIOMOD_FormatingData()`, `BIOMOD_Modeling()` |
| `ENMeval` | MaxEnt tuning with spatial CV | `ENMevaluate()` |
| `maxnet` | MaxEnt (R native) | `maxnet()` |
| `dismo` | SDM utilities | `evaluate()`, `threshold()` |
| `sdm` | SDM framework | `sdm()`, `ensemble()` |
| `ecospat` | Niche analysis | `ecospat.niche.overlap()` |
| `kuenm` | Complex MaxEnt calibration | `kuenm_cal()` |
| `dynamicSDM` | Dynamic SDMs with temporal covariates | `dynamic_proj()`, `extract_dynamic_covs()` |
| `flexsdm` | Flexible SDM framework | `tune_max()`, `fit_ensemble()` |
| `rgee` | Google Earth Engine from R | `ee_Initialize()`, `ee$Image()` |

## Occupancy & Abundance

| Package | Purpose | Key Functions |
|---|---|---|
| `unmarked` | Occupancy, N-mixture, distance | `occu()`, `pcount()`, `distsamp()` |
| `spOccupancy` | Spatial occupancy (Bayesian) | `PGOcc()`, `spPGOcc()` |
| `ubms` | Bayesian unmarked models (Stan) | `stan_occu()`, `stan_pcount()` |
| `AHMbook` | Applied hierarchical models | Support functions and data |
| `RPresence` | PRESENCE interface | Various occupancy models |

## Community Ecology

| Package | Purpose | Key Functions |
|---|---|---|
| `vegan` | Diversity, ordination, PERMANOVA | `diversity()`, `metaMDS()`, `adonis2()` |
| `iNEXT` | Rarefaction/extrapolation | `iNEXT()`, `ggiNEXT()` |
| `mvabund` | Multivariate abundance models | `manyglm()`, `anova.manyglm()` |
| `Hmsc` | Joint SDMs (Bayesian) | `Hmsc()`, `sampleMcmc()` |
| `boral` | Bayesian ordination and regression | `boral()` |
| `hillR` | Hill numbers for diversity | `hill_taxa()`, `hill_func()` |
| `betapart` | Beta diversity partitioning | `beta.pair()`, `beta.multi()` |

## Population Dynamics

| Package | Purpose | Key Functions |
|---|---|---|
| `RMark` | Mark-recapture (MARK interface) | `mark()`, `process.data()` |
| `marked` | Mark-recapture (R native) | `crm()` |
| `popbio` | Matrix population models | `lambda()`, `sensitivity()` |
| `lefko3` | Historical matrix models | `flefko3()`, `lmean()` |
| `R2ucare` | GOF tests for CJS models | `overall_CJS()` |

## Bayesian Modeling

| Package | Purpose | Key Functions |
|---|---|---|
| `brms` | Bayesian regression (Stan) | `brm()`, `pp_check()`, `loo()` |
| `rstanarm` | Applied Bayesian regression | `stan_glm()`, `stan_glmer()` |
| `nimble` | Custom Bayesian models | `nimbleModel()`, `nimbleMCMC()` |
| `R2jags` | JAGS interface | `jags()` |
| `loo` | LOO-CV and WAIC | `loo()`, `waic()` |
| `bayesplot` | Bayesian diagnostics plotting | `mcmc_trace()`, `pp_check()` |

## Phylogenetics

| Package | Purpose |
|---|---|
| `ape` | Phylogenetic analysis, tree I/O |
| `phytools` | Phylogenetic comparative methods |
| `caper` | PGLS regression |
| `picante` | Phylogenetic community ecology |
| `V.PhyloMaker` | Generate phylogenies for species lists |
| `ggtree` | Phylogeny visualization |

## Visualization

| Package | Purpose |
|---|---|
| `ggplot2` | Grammar of graphics plotting |
| `patchwork` | Multi-panel figure assembly |
| `viridis` | Colorblind-safe palettes |
| `scico` | Scientific color palettes |
| `ggridges` | Ridge plots for distributions |
| `DHARMa` | Residual diagnostics plots |
| `sjPlot` | Model output tables and plots |

## Reproducibility

| Package | Purpose |
|---|---|
| `renv` | Package version management |
| `targets` | Pipeline automation |
| `knitr` | Dynamic report generation |
| `rmarkdown` | R Markdown documents |
| `quarto` | Next-gen documents |

---

> **Note:** This list is not exhaustive. The ecology R ecosystem is vast and evolving. Agents can recommend additional packages at runtime based on the specific analysis needs.
