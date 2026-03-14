---
description: Create conference presentation — Beamer/Quarto slides, poster, or lightning talk
user_invocable: true
---

# /talk — Conference Presentation

## Trigger
User wants to create a conference talk, poster, or lightning talk from their research.

## Steps

1. **Determine format**:
   - Standard talk (12–15 min)? Lightning talk (5 min)? Poster?
   - Conference name and session?
   - Beamer or Quarto Reveal.js?
   - Any specific requirements from the conference?

2. **Gather inputs**:
   - Manuscript from `Paper/` (for content)
   - Key figures from `Figures/`
   - Results from `Tables/`

3. **Create the presentation** (invoke Storyteller perspective):

   **For talks:**
   - Build slide deck following the standard ecology talk structure
   - One message per slide, figures dominate
   - Adapt manuscript figures for slide format (larger text, simpler design)
   - Add progressive reveal for complex figures
   - Include speaker notes
   - Save to `Talks/`

   **For posters:**
   - Design layout (ESA/BES style)
   - Select 3–4 key figures
   - Write concise bullet-point text
   - Add QR code linking to paper/data
   - Save to `Talks/`

4. **Review** (invoke Storyteller-Critic):
   - Check clarity, accuracy, audience fit, visual design
   - Verify results match the manuscript
   - Address findings

5. **Save outputs**:
   - Presentation file → `Talks/`
   - Quality report → `quality_reports/`
