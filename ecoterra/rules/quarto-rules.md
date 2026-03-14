---
description: Quarto standards for ecology manuscripts and presentations
globs: "*.qmd,*.yml"
alwaysApply: false
---

# Quarto Rules

Standards for writing Quarto manuscripts and presentations in ecology research.

## Manuscript Template

### YAML Front Matter

```yaml
---
title: "Your Title Here: Concise, Informative, No Abbreviations"
author:
  - name: First A. Author
    affiliations:
      - name: Department of Ecology, University Name
    corresponding: true
    email: email@example.com
    orcid: 0000-0000-0000-0000
  - name: Second B. Author
    affiliations:
      - name: Conservation Institute
format:
  pdf:
    documentclass: article
    geometry: margin=2.5cm
    fontsize: 12pt
    linestretch: 2          # Double-spacing
    number-sections: true
    include-in-header:
      text: |
        \usepackage{lineno}
        \linenumbers
        \usepackage{booktabs}
        \usepackage{siunitx}
  docx:
    reference-doc: template.docx
bibliography: Bibliography_base.bib
csl: ecology.csl              # Citation Style Language file
execute:
  echo: false                  # Hide code in manuscript
  warning: false
  message: false
---
```

### Document Body

```markdown
# Abstract {.unnumbered}

Context. Gap. Objective. Methods. Key results with numbers. Implications.

**Keywords:** keyword one, keyword two, keyword three

# Introduction

# Methods

## Study area

## Data collection

## Statistical analysis

All analyses were performed in R version `r R.version.string` [@R2024].
Occupancy models were fitted using the `unmarked` package version
`r packageVersion("unmarked")` [@Fiske2011unmarked].

# Results

# Discussion

# Data Availability Statement {.unnumbered}

# Acknowledgements {.unnumbered}

# Author Contributions {.unnumbered}

# References {.unnumbered}

::: {#refs}
:::
```

## Inline R Code

Use inline code for dynamic reporting — ensures text matches analysis:

```markdown
We recorded `r nrow(occurrences)` occurrences across
`r n_distinct(occurrences$site_id)` sites.

Occupancy probability decreased with elevation
(β = `r round(coef_elev, 2)`,
95% CrI [`r round(ci_elev[1], 2)`, `r round(ci_elev[2], 2)`];
@fig-occupancy-elevation).
```

## Code Chunks

### Analysis Chunks (hidden in manuscript)

````markdown
```{r}
#| label: fit-occupancy-model
#| cache: true

library(unmarked)

umf <- unmarkedFrameOccu(
  y = det_hist,
  siteCovs = site_covs,
  obsCovs = obs_covs
)

fm <- occu(~ time + wind ~ habitat + elevation, data = umf)
```
````

### Figure Chunks

````markdown
```{r}
#| label: fig-occupancy-elevation
#| fig-cap: |
#|   **Occupancy probability decreases with elevation.**
#|   Predicted occupancy probability (solid line) with 95% confidence
#|   interval (shaded area) from the top-ranked model.
#|   Rug marks show site locations along the elevation gradient.
#|   *n* = 150 sites.
#| fig-width: 6.7    # ~170mm for double-column
#| fig-height: 4.7   # ~120mm
#| fig-dpi: 300

ggplot(pred_df, aes(x = elevation, y = psi)) +
  geom_ribbon(aes(ymin = lower, ymax = upper), alpha = 0.2, fill = "steelblue") +
  geom_line(color = "steelblue", linewidth = 0.8) +
  geom_rug(data = raw_data, aes(x = elevation), sides = "b", alpha = 0.3) +
  scale_y_continuous(limits = c(0, 1)) +
  labs(x = "Elevation (m a.s.l.)", y = expression(paste("Occupancy probability (", psi, ")"))) +
  theme_minimal(base_size = 10)
```
````

### Table Chunks

````markdown
```{r}
#| label: tbl-model-comparison
#| tbl-cap: |
#|   **Model comparison results.**
#|   Candidate occupancy models ranked by AICc.
#|   *K* = number of parameters; Δ AICc = difference from top model;
#|   *w* = Akaike weight. Detection modeled as *p*(date + effort) in all models.

model_table |>
  knitr::kable(
    col.names = c("Model", "K", "AICc", "ΔAICc", "w"),
    digits = c(0, 0, 1, 1, 2),
    align = c("l", "r", "r", "r", "r")
  )
```
````

## Cross-References

```markdown
# Quarto cross-reference syntax
@fig-occupancy-elevation     # Figure reference
@tbl-model-comparison        # Table reference
@eq-occupancy                # Equation reference
@sec-methods                 # Section reference

# Usage in text
As shown in @fig-occupancy-elevation, occupancy declined with elevation.
Model comparison results are presented in @tbl-model-comparison.
```

## Citation Syntax

```markdown
# Quarto/Pandoc citation syntax
@Smith2024                   # Smith (2024)
[@Smith2024]                 # (Smith, 2024)
[@Smith2024; @Jones2023]     # (Smith, 2024; Jones, 2023)
[@Smith2024, p. 45]          # (Smith, 2024, p. 45)
[-@Smith2024]                # (2024) — suppress author name

# R package citation
[@R2024; @Fiske2011unmarked]
```

### CSL Files for Ecology Journals

Download from the [Zotero Style Repository](https://www.zotero.org/styles):

| Journal | CSL File |
|---|---|
| Ecology (ESA) | `ecology.csl` |
| Methods in Ecology and Evolution | `methods-in-ecology-and-evolution.csl` |
| Journal of Applied Ecology | `journal-of-applied-ecology.csl` |
| Journal of Animal Ecology | `journal-of-animal-ecology.csl` |
| Global Ecology and Biogeography | `global-ecology-and-biogeography.csl` |
| Conservation Biology | `conservation-biology.csl` |
| Nature | `nature.csl` |
| Biological Conservation | `biological-conservation.csl` |

## Presentation Template (Beamer via Quarto)

```yaml
---
title: "Short Informative Title"
subtitle: "Conference Name — Session"
author: "First Author"
date: "2024-06-15"
format:
  beamer:
    theme: metropolis
    fontsize: 11pt
    aspectratio: 169         # Widescreen
    fig-width: 8
    fig-height: 4.5
    fig-dpi: 200
execute:
  echo: false
bibliography: Bibliography_base.bib
---
```

## Supplementary Materials

```yaml
---
title: "Supplementary Material"
subtitle: "For: Your Paper Title"
format:
  pdf:
    documentclass: article
    geometry: margin=2.5cm
    number-sections: true
    number-depth: 2
bibliography: Bibliography_base.bib
csl: ecology.csl
execute:
  echo: true                 # Show code in supplementary
---
```

Supplementary materials typically include:
- Extended methods details
- Additional figures and tables
- Sensitivity analyses
- Full model output tables
- R code for reproducibility
- ODMAP protocol (for SDM studies)

## Reproducibility Requirements

1. **Pin R package versions** with `renv` — include `renv.lock` in repository
2. **Cache long-running chunks** with `#| cache: true`
3. **Set seeds** in cached chunks: `set.seed(42)` at chunk start
4. **Use `here()`** for all file paths within chunks
5. **Include session info** as an appendix or supplementary section
6. **Render from clean environment** before submission: `quarto render --execute-daemon-restart`

## Pre-Render Checklist

- [ ] All cross-references resolve (`@fig-`, `@tbl-`, `@eq-`)
- [ ] All citations resolve (`@key`)
- [ ] Figures render at correct dimensions and resolution
- [ ] Tables display correctly in target format (PDF/DOCX)
- [ ] Inline R code produces expected values
- [ ] Rendering succeeds from a clean R session
- [ ] Word count within journal limits
- [ ] CSL file matches target journal style
