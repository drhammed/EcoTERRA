---
description: Run adversarial peer review simulation — EcoReviewer, MethodsReviewer, and JournalReviewer
user_invocable: true
---

# /review — Adversarial Peer Review

## Trigger
User wants to simulate peer review of their manuscript, analysis, or study design before submission.

## Steps

1. **Determine review scope**:
   - Full manuscript review or specific section?
   - Analysis code review only?
   - Target journal (for JournalReviewer calibration)?
   - Which reviewers to invoke? (Default: all three)

2. **Gather materials**:
   - Manuscript from `Paper/`
   - Analysis scripts from `Scripts/`
   - Figures from `Figures/`
   - Model objects from `Models/`
   - Results tables from `Tables/`

3. **Run the review panel** (in parallel where possible):

   **EcoReviewer** — Ecological domain review:
   - Ecological plausibility of hypotheses and results
   - Scale appropriateness (spatial, temporal, taxonomic)
   - Sampling design adequacy
   - Environmental context and missing covariates
   - Conservation relevance and interpretation

   **MethodsReviewer** — Statistical methods review:
   - Model specification and assumptions
   - Diagnostics completeness
   - Model selection approach
   - Detection probability handling
   - Reproducibility of the analysis

   **JournalReviewer** — Full peer review simulation:
   - Journal fit assessment (scope, novelty, audience)
   - Three reviewer reports (Supportive Expert, Methodological Skeptic, Big-Picture Reader)
   - Editorial synthesis with decision recommendation
   - Publication readiness score

4. **Compile review report** saved to `quality_reports/`:
   ```markdown
   ## Peer Review Report — [manuscript title]
   ### Date: [date]
   ### Target Journal: [journal]

   ### EcoReviewer Summary
   [key findings]

   ### MethodsReviewer Summary
   [key findings]

   ### JournalReviewer Decision
   [editorial decision with rationale]

   ### Combined Priority Issues
   1. [highest priority — from which reviewer]
   2. [second priority]
   3. [third priority]

   ### Publication Readiness Score: [X]/100
   ```

5. **Suggest next steps**:
   - `/revise` — to address the review findings
   - `/write` — to revise specific sections
   - `/analyze` — if methodological changes required
