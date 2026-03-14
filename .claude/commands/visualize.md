---
description: Generate publication-quality figures, maps, and diagnostic plots
user_invocable: true
---

# /visualize — Figure Generation

## Trigger
User wants to create figures for a manuscript, presentation, or exploratory analysis.

## Steps

1. **Determine figure needs**:
   - What results need to be visualized?
   - Target format: manuscript (journal specs), talk (slides), or poster?
   - Target journal for dimensions and requirements?

2. **Plan the figures** (invoke Visualizer perspective):
   - List proposed figures with descriptions
   - Specify plot type, encodings (x, y, color, shape), and data source
   - Propose a consistent color palette and theme
   - Present the plan for user approval

3. **Create figures** (in a visualization script in `Scripts/R/` or `Scripts/Python/`):

   For each figure:
   - Use colorblind-safe palette (viridis, scico, Okabe-Ito)
   - Set appropriate dimensions for target journal
   - Label axes with units
   - Include legend with descriptive title
   - Add map elements for spatial figures (scale bar, north arrow, CRS)
   - Use multi-panel layouts where appropriate (patchwork)
   - Save to `Figures/` with correct naming (`fig01_`, `fig02_`, etc.)

4. **Review** (invoke Visualizer-Critic):
   - Check technical requirements (DPI, dimensions, colorblind safety)
   - Check accuracy (data matches text/tables)
   - Check captions (self-contained, define all symbols)
   - Address findings

5. **Save outputs**:
   - Draft figures (PNG, 150 DPI) → `Figures/`
   - Submission figures (PDF/TIFF, 300+ DPI) → `Figures/`
   - Figure script → `Scripts/R/` or `Scripts/Python/`

6. **Suggest next steps**:
   - `/write` — to draft the manuscript with figures
   - `/review` — to run adversarial review on the complete analysis
