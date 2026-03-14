---
description: Run statistical analysis pipeline — model fitting, diagnostics, model selection, results
user_invocable: true
---

# /analyze — Statistical Analysis

## Trigger
User wants to fit statistical models, run diagnostics, perform model selection, or generate results tables.

## Steps

1. **Review prerequisites**:
   - Analysis-ready data in `Data/processed/`?
   - Research strategy with candidate model set in `quality_reports/`?
   - Variables selected and collinearity checked?

2. **Plan the analysis** (invoke Analyst perspective):
   - Confirm the analytical method matches the data and question
   - Define the candidate model set
   - Specify diagnostics to run
   - Present the plan for user approval

3. **Build analysis scripts** (in `Scripts/R/` or `Scripts/Python/`):

   **Exploratory analysis script**
   - Summary statistics
   - Distribution checks for response variable
   - Bivariate relationships
   - Preliminary visualizations

   **Model fitting script**
   - Fit candidate models
   - Include null model as baseline
   - Set random seeds
   - Save model objects to `Models/`

   **Diagnostics script**
   - Residual plots (frequentist) or convergence checks (Bayesian)
   - Overdispersion check (count data)
   - Spatial autocorrelation in residuals (Moran's I)
   - Posterior predictive checks (Bayesian)
   - Goodness-of-fit (occupancy models)

   **Model selection script**
   - Compute AIC/AICc/WAIC/LOO-CV
   - Rank models, compute weights
   - Model averaging if appropriate

   **Results script**
   - Extract coefficients with CIs/CrIs
   - Generate prediction plots
   - Save results tables to `Tables/`

4. **Review** (invoke Analyst-Critic):
   - Check model specification, diagnostics, selection, reporting
   - Address all findings

5. **Score and save**:
   - Quality report → `quality_reports/`
   - Model objects → `Models/`
   - Result tables → `Tables/`

6. **Suggest next steps**:
   - `/visualize` — to create publication figures
   - `/write` — to draft the Results and Methods sections
