---
description: Address reviewer comments — real journal reviews or simulated review findings
user_invocable: true
---

# /revise — Address Reviewer Comments

## Trigger
User has received reviewer comments (from a real journal or from `/review`) and wants to systematically address them.

## Steps

1. **Ingest reviewer comments**:
   - Parse the review letter (user pastes or provides the file)
   - Extract individual comments and categorize:
     - **Editor directives** (must address)
     - **Reviewer 1 comments** (numbered)
     - **Reviewer 2 comments** (numbered)
     - **Reviewer 3 comments** (numbered, if present)

2. **Triage and plan**:
   - Classify each comment:
     - **Accept**: Straightforward to address, reviewer is right
     - **Discuss**: Requires a judgment call or clarification
     - **Respectfully disagree**: Reviewer is mistaken, need a justified rebuttal
   - Estimate effort per comment
   - Present the triage to the user for alignment

3. **Build the response document** (in `Paper/`):
   ```markdown
   ## Response to Reviewers

   We thank the editor and reviewers for their constructive feedback.
   Below we address each comment point-by-point. Reviewer comments are
   in **bold**, our responses in plain text, and changes to the
   manuscript are indicated with line numbers.

   ### Editor Comments

   **Comment E1:** [editor comment]

   *Response:* [response with specific changes made]

   ### Reviewer 1

   **Comment R1.1:** [reviewer comment]

   *Response:* [response]
   *Changes:* [Lines X–Y: description of change]

   ### Reviewer 2
   ...
   ```

4. **Execute revisions**:
   - For each accepted comment: make the change in the manuscript
   - For analysis changes: update scripts, re-run, update figures/tables
   - For rebuttals: draft a respectful, evidence-based response
   - Track every change with the corresponding reviewer comment number

5. **Verify consistency**:
   - Do updated figures match updated text?
   - Do updated tables match updated analysis?
   - Are new references added to `Bibliography_base.bib`?
   - Does the abstract still accurately reflect the revised paper?

6. **Review the revision** (invoke Writer-Critic):
   - Check that all comments are addressed
   - Verify the response letter is professional and complete
   - Check manuscript consistency after changes

7. **Save outputs**:
   - Revised manuscript → `Paper/`
   - Response to reviewers → `Paper/`
   - Updated figures → `Figures/`
   - Quality report → `quality_reports/`

8. **Suggest next steps**:
   - `/review` — to re-run adversarial review on the revised manuscript
   - `/submit` — if ready for resubmission
