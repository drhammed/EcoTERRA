---
description: Design study methodology — sampling framework, power analysis, variable selection, analytical strategy
user_invocable: true
---

# /strategize — Study Design & Research Strategy

## Trigger
User wants to plan their study design, select variables, run power analysis, or choose an analytical approach.

## Steps

1. **Review context** — Read any existing:
   - Discovery report in `quality_reports/`
   - Research question and hypotheses
   - Data availability assessment

2. **Refine the research question** (invoke Strategist perspective):
   - Ensure the question is specific, testable, and bounded
   - Formalize hypotheses as testable predictions with expected directions
   - Connect to ecological theory

3. **Design the study**:
   - Recommend a study design paradigm (observational gradient, BACI, stratified, etc.)
   - Define spatial extent and temporal scope
   - Specify sampling units and replication

4. **Power analysis**:
   - Estimate required sample size for the planned analysis
   - Use effect sizes from literature (not optimistic guesses)
   - For occupancy: estimate sites × visits needed
   - For SDMs: assess minimum presence records per predictor

5. **Variable selection**:
   - List candidate covariates with ecological justification
   - Check data availability for each
   - Plan collinearity screening approach
   - Build candidate model set from hypotheses

6. **Analytical strategy**:
   - Recommend primary statistical method with justification
   - Identify backup approach if assumptions fail
   - Specify model selection criterion
   - Note software and packages needed

7. **Produce strategy document** saved to `quality_reports/`:
   - Full research strategy using the Strategist template
   - Include risk assessment

8. **Review** (invoke Strategist-Critic):
   - Evaluate the strategy for design flaws, power adequacy, feasibility
   - Address any critical findings before proceeding

9. **Suggest next steps**:
   - `/wrangle` — to begin data preparation
   - `/discover` — if more literature or data exploration needed
