---
description: Pre-submission checklist — journal formatting, data archiving, code deposit, cover letter
user_invocable: true
---

# /submit — Pre-Submission Checklist

## Trigger
User is preparing to submit a manuscript to a journal.

## Steps

1. **Confirm target journal**:
   - Journal name and submission system
   - Manuscript type (research article, methods paper, review, etc.)
   - Any special issue or invitation?

2. **Run the pre-submission checklist**:

   ### Manuscript
   - [ ] Word count within journal limits
   - [ ] Abstract within word limit
   - [ ] Keywords provided (correct number)
   - [ ] All sections present (Data Availability, Author Contributions, Acknowledgements)
   - [ ] Line numbers and double spacing (if required)
   - [ ] Reference format matches journal style
   - [ ] All cross-references resolve
   - [ ] Species names italicized throughout
   - [ ] No tracked changes or comments remaining

   ### Figures
   - [ ] Resolution ≥ 300 DPI
   - [ ] Correct file format (PDF/TIFF/EPS per journal requirements)
   - [ ] Dimensions match journal specifications
   - [ ] Colorblind-safe palettes used
   - [ ] All figures referenced in text in sequential order
   - [ ] Captions self-contained

   ### Tables
   - [ ] All tables referenced in text in sequential order
   - [ ] Captions self-contained with all abbreviations defined
   - [ ] Numbers formatted consistently

   ### References
   - [ ] All in-text citations have bibliography entries
   - [ ] No orphan bibliography entries
   - [ ] DOIs present for all entries
   - [ ] No retracted papers cited
   - [ ] R/Python packages cited with versions

   ### Data & Code
   - [ ] Data archived (Dryad, Zenodo, or Figshare)
   - [ ] DOI obtained for archived data
   - [ ] Code deposited (GitHub + Zenodo for DOI)
   - [ ] Replication package tested — can someone reproduce the results?
   - [ ] Data Availability Statement includes archive DOIs
   - [ ] Sensitive species locations handled appropriately

   ### Supplementary Materials
   - [ ] Compiled separately (or as appendix per journal style)
   - [ ] All supplementary items referenced in main text
   - [ ] ODMAP protocol included (for SDM studies)

3. **Generate cover letter** (in `Paper/`):
   ```markdown
   Dear Editor,

   We submit our manuscript entitled "[Title]" for consideration
   as a [article type] in [Journal Name].

   [1-2 sentences: what the paper does and why it matters]

   [1 sentence: key finding]

   [1 sentence: why this journal — scope match, audience relevance]

   [1 sentence: confirmations — original work, not under review elsewhere,
   all authors approved, ethical compliance]

   We suggest the following reviewers:
   1. [Name, Affiliation, Email — expertise]
   2. [Name, Affiliation, Email — expertise]
   3. [Name, Affiliation, Email — expertise]

   Sincerely,
   [Corresponding author]
   ```

4. **Build replication package** in `Replication/`:
   - Cleaned data (or scripts to download/process raw data)
   - All analysis scripts
   - README with instructions to reproduce results
   - Environment specification (renv.lock or requirements.txt)
   - Test that the pipeline runs end-to-end

5. **Final review** (invoke JournalReviewer — quick check):
   - Journal fit confirmation
   - Any last-minute red flags

6. **Report summary**:
   - Checklist results (pass/fail per item)
   - Any remaining issues to resolve
   - Files ready for upload
