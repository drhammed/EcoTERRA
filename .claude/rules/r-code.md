---
description: R coding standards for ecology research — tidyverse style, ecology packages, reproducible pipelines
paths: "*.R,*.Rmd,*.r"
---

# R Code Standards

Standards for writing R code in quantitative ecology research projects.

## Style Guide

Follow the [tidyverse style guide](https://style.tidyverse.org/) with these ecology-specific additions:

### Naming
- **Objects**: `snake_case` — `species_richness`, `detection_prob`, `env_stack`
- **Functions**: `snake_case` verbs — `clean_occurrences()`, `fit_occupancy_model()`, `extract_covariates()`
- **Constants**: `UPPER_SNAKE` — `MIN_RECORDS <- 30`, `VIF_THRESHOLD <- 10`
- **Files**: Numbered prefix — `01_data_cleaning.R`, `02_model_fitting.R`

### Structure
- Maximum line length: 80 characters (journal-friendly if printed)
- Use `<-` for assignment, not `=`
- Pipe with `|>` (base R 4.1+) or `%>%` (magrittr) — be consistent within a project
- One package per `library()` call, grouped by purpose

### Script Template

```r
# =============================================================================
# Title: [Descriptive title]
# Purpose: [What this script does]
# Author: [Name]
# Date: [YYYY-MM-DD]
# Input: [Data/processed/input_file.csv]
# Output: [Figures/fig01_map.png, Tables/tab01_results.csv]
# =============================================================================

# --- Packages ----------------------------------------------------------------
library(tidyverse)
library(here)
library(sf)
library(terra)

# --- Configuration -----------------------------------------------------------
set.seed(42)

# --- Read Data ---------------------------------------------------------------
data <- read_csv(here("Data", "processed", "cleaned_data.csv"))

# --- Analysis ----------------------------------------------------------------
# [analysis code]

# --- Save Outputs ------------------------------------------------------------
write_csv(results, here("Tables", "tab01_results.csv"))
ggsave(here("Figures", "fig01_map.png"), width = 170, height = 120, units = "mm", dpi = 300)

# --- Session Info ------------------------------------------------------------
sessionInfo()
```

## Package Usage

### Always Use
- `here::here()` for file paths — never `setwd()`, never absolute paths
- `set.seed()` before any stochastic operation
- `sessionInfo()` at the end of every script

### Preferred Packages by Domain

| Domain | Preferred | Avoid |
|---|---|---|
| Data manipulation | `dplyr`, `tidyr`, `purrr` | Base R `apply` family (unless performance-critical) |
| File paths | `here` | `setwd()`, absolute paths |
| Spatial vectors | `sf` | `sp` (deprecated) |
| Spatial rasters | `terra` | `raster` (deprecated) |
| Plotting | `ggplot2` | Base R `plot()` (unless quick diagnostic) |
| Strings | `stringr` | Base R `grep`/`gsub` |
| Dates | `lubridate` | Base R date functions |
| Biodiversity data | `rgbif`, `rinat`, `rebird` | Manual downloads (unless API fails) |
| Taxonomy | `taxize` | Manual lookups |
| Coordinates | `CoordinateCleaner` | Manual filtering |

### Ecology-Specific Packages

```r
# SDMs
library(biomod2)      # Ensemble SDMs
library(ENMeval)      # MaxEnt tuning with spatial CV
library(maxnet)       # MaxEnt (R native)
library(dismo)        # SDM utilities
library(blockCV)      # Spatial cross-validation

# Occupancy & Abundance
library(unmarked)     # Occupancy, N-mixture, distance
library(spOccupancy)  # Spatial occupancy models
library(ubms)         # Bayesian unmarked models

# Community
library(vegan)        # Diversity, ordination, PERMANOVA
library(iNEXT)        # Rarefaction/extrapolation
library(mvabund)      # Multivariate abundance models
library(Hmsc)         # Joint SDMs

# Bayesian
library(brms)         # Bayesian regression (Stan backend)
library(nimble)       # Custom Bayesian models
library(loo)          # LOO-CV, WAIC

# Population
library(RMark)        # Mark-recapture (MARK interface)
library(popbio)       # Matrix population models

# Phylogenetics
library(ape)          # Phylogenetic analysis
library(phytools)     # Phylogenetic comparative methods
library(caper)        # PGLS
```

## Reproducibility Requirements

1. **Never use `setwd()`** — use `here::here()` for all paths
2. **Never modify raw data** — read from `Data/raw/`, write to `Data/processed/`
3. **Always set seeds** — `set.seed(42)` or project-specific seed before stochastic operations
4. **Always include `sessionInfo()`** — at the end of every analysis script
5. **Pin package versions** — use `renv` for project-level dependency management
6. **No manual steps** — every transformation must be in code

## Error Handling

```r
# Use tryCatch for external data downloads
tryCatch(
  gbif_data <- occ_download_get(key, path = here("Data", "raw")),
  error = function(e) {
    message("GBIF download failed: ", e$message)
    message("Check your GBIF credentials and network connection.")
  }
)

# Validate inputs early
stopifnot(
  "CRS must be set" = !is.na(sf::st_crs(spatial_data)),
  "No records after filtering" = nrow(cleaned_data) > 0
)
```

## ggplot2 Conventions

```r
# Project theme — set once at the top of visualization scripts
theme_ecoterra <- theme_minimal(base_size = 11) +
  theme(
    panel.grid.minor = element_blank(),
    strip.text = element_text(face = "bold"),
    legend.position = "bottom"
  )
theme_set(theme_ecoterra)

# Colorblind-safe palettes
scale_fill_viridis_d()    # Discrete
scale_color_viridis_c()   # Continuous
# Or use scico: scale_color_scico(palette = "batlow")

# Save with journal-ready dimensions
ggsave(
  here("Figures", "fig01_richness_map.png"),
  width = 170, height = 120, units = "mm", dpi = 300
)
```
