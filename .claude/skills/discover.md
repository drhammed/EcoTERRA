---
description: Literature search and biodiversity data exploration for a research question
user_invocable: true
---

# /discover — Literature & Data Discovery

## Trigger
User wants to explore what literature and data exist for their research question.

## Steps

1. **Clarify the discovery scope** — Ask (if not already clear):
   - Research question or topic
   - Focal taxa
   - Geographic region
   - What to prioritize: literature, data availability, or both

2. **Literature discovery** (invoke Librarian perspective):
   - Search for seminal papers on the topic
   - Find recent advances (last 2–3 years)
   - Identify methodological references
   - Note key debates or contradictions
   - Compile BibTeX entries for relevant papers
   - Add entries to `Bibliography_base.bib`

3. **Data availability assessment** (invoke Explorer perspective):
   - Check GBIF for occurrence records (count, spatial coverage, temporal range)
   - Check eBird if birds are involved (effort data, complete checklists)
   - Check iNaturalist for supplementary records
   - Check IUCN Red List for conservation status
   - Assess environmental data availability (WorldClim, CHELSA, SoilGrids, MODIS)
   - Identify data quality concerns (coordinate precision, sampling bias, temporal gaps)

4. **Produce a discovery report** saved to `quality_reports/`:
   ```markdown
   ## Discovery Report — [topic]
   ### Date: [date]

   ### Literature Landscape
   - Key themes and seminal papers
   - Recent advances
   - Research gap identified

   ### Data Availability
   - Occurrence records: [count, sources, coverage]
   - Environmental layers: [available, resolution]
   - Data quality flags: [issues found]

   ### Feasibility Assessment
   - Sufficient data for planned analysis? [Yes/No/Conditional]
   - Recommended next steps

   ### References Added to Bibliography
   - [list of new .bib entries]
   ```

5. **Suggest next steps**:
   - `/strategize` — to design the study based on available data
   - `/wrangle` — if data is ready to download and clean
