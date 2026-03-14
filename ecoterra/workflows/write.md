---
description: Draft or revise manuscript sections in LaTeX or Quarto
user_invocable: true
---

# /write — Manuscript Drafting

## Trigger
User wants to draft a manuscript section, revise existing text, or set up a manuscript template.

## Steps

1. **Determine writing scope**:
   - Which section(s)? (Abstract, Introduction, Methods, Results, Discussion, full draft)
   - Target journal and its requirements?
   - LaTeX or Quarto format?
   - Any existing draft to revise?

2. **Gather inputs**:
   - Research strategy from `quality_reports/`
   - Analysis results from `Tables/` and `Models/`
   - Figures from `Figures/`
   - Bibliography from `Bibliography_base.bib`
   - Discovery report (for Introduction context)

3. **Set up the manuscript** (if starting fresh):
   - Create LaTeX or Quarto document in `Paper/` using the appropriate template
   - Configure for target journal (CSL file, formatting, word limits)
   - Set up bibliography link

4. **Draft the section(s)** (invoke Writer perspective):
   - Follow the structure and conventions for each section
   - Use precise ecological terminology
   - Report statistics with effect sizes and uncertainty
   - Reference all figures and tables
   - Include citations (add new ones to `Bibliography_base.bib`)
   - Mark placeholders clearly: `[CITATION NEEDED]`, `[FIGURE REF]`, `[EXACT VALUE]`

5. **Review** (invoke Writer-Critic):
   - Check structure, statistical reporting, citations, language, journal compliance
   - Address all findings

6. **Score and save**:
   - Manuscript → `Paper/`
   - Quality report → `quality_reports/`

7. **Suggest next steps**:
   - `/review` — to run full adversarial review (EcoReviewer + MethodsReviewer + JournalReviewer)
   - `/visualize` — if figures need updating based on the writing
   - `/revise` — if addressing reviewer comments
