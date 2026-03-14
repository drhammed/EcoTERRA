# EcoTERRA

**Ecological Tools for Evidence-based Research, Reproducibility & Analysis**

A multi-agent method for quantitative ecology research — from literature discovery through data analysis, manuscript writing, and journal submission.

## What is This?

EcoTERRA is a structured workflow that orchestrates specialized AI agents to assist with every phase of ecology research:

- **Discovery** — Literature search, biodiversity database exploration (GBIF, eBird, iNaturalist, IUCN)
- **Strategy** — Study design, power analysis, variable selection
- **Data Engineering** — Cleaning, taxonomic harmonization, environmental variable extraction
- **Analysis** — SDMs, occupancy models, community ecology, population dynamics, Bayesian modeling
- **Writing** — Manuscripts, supplementary materials, with journal-specific formatting
- **Visualization** — Publication-quality figures, maps, ordination plots
- **Review** — Simulated peer review (ecological domain + statistical methods + journal panel)
- **Presentation** — Conference talks, posters, science communication

## Architecture

The core method lives in `ecoterra/` and is **model-agnostic** — it works with any AI coding assistant. Tool-specific adapters (`.claude/`, `.cursor/`) wire the method into your IDE.

```
ecoterra/           ← The method (source of truth)
  agents/           ← 21 specialist agent personas
  workflows/        ← 13 slash-command workflows
  rules/            ← 8 domain rule sets
  knowledge/        ← Ecology domain knowledge base
  templates/        ← ODMAP, checklists, scaffolds

.claude/            ← Claude Code adapter (ships in git, works immediately)
.cursor/            ← Cursor adapter (generated via install.sh)
```

## Quick Start

### Option 1: npx (recommended)
```bash
# Start a new ecology research project
mkdir my-sdm-study && cd my-sdm-study
npx ecoterra init

# Or add EcoTERRA to an existing project
cd existing-project
npx ecoterra install
```

### Option 2: Clone the repo
```bash
git clone https://github.com/drhammed/EcoTERRA.git
cd EcoTERRA
claude  # Start Claude Code — agents, commands, and rules are auto-detected
```

### Option 3: Shell script (no npm required)
```bash
git clone https://github.com/drhammed/EcoTERRA.git
cd EcoTERRA
chmod +x install.sh
./install.sh                     # For Claude Code (default)
./install.sh --target cursor     # For Cursor users
./install.sh --target all        # Both
```

## Workflows (Slash Commands)

| Command | Description |
|---|---|
| `/new-project` | Initialize a new ecology research project |
| `/discover` | Literature search + biodiversity database exploration |
| `/strategize` | Study design, power analysis, variable selection |
| `/wrangle` | Data cleaning, harmonization, environmental variable extraction |
| `/analyze` | Run statistical analysis pipeline |
| `/visualize` | Generate publication-quality figures and maps |
| `/write` | Draft or revise manuscript sections |
| `/review` | Run adversarial peer review simulation |
| `/revise` | Address reviewer comments |
| `/talk` | Create conference presentation |
| `/submit` | Pre-submission checklist |
| `/tools` | Utility commands (compile, validate-bib, journal-format, reproducibility check) |
| `/checklist` | Reproducibility and reporting standards check |

## Agents

21 specialized agents organized in worker-critic pairs, plus infrastructure and review agents:

| Phase | Worker | Critic |
|---|---|---|
| Discovery | Librarian, Explorer | Librarian-Critic, Explorer-Critic |
| Strategy | Strategist | Strategist-Critic |
| Data | Data-Engineer | Data-Engineer-Critic |
| Analysis | Analyst | Analyst-Critic |
| Writing | Writer | Writer-Critic |
| Visualization | Visualizer | Visualizer-Critic |
| Presentation | Storyteller | Storyteller-Critic |
| Review | EcoReviewer, MethodsReviewer, JournalReviewer | (adversarial by nature) |
| Infrastructure | Orchestrator, Verifier | — |

The **JournalReviewer** simulates a full peer review panel (3 reviewers + editorial decision) calibrated to your target journal's standards.

## Rules

8 domain rule sets, applied automatically based on file type:

| Rule | Scope | Purpose |
|---|---|---|
| `contractor-mode` | Always-on | Plan-first workflow, quality gates |
| `ecology-conventions` | Always-on | Terminology, reporting standards |
| `r-code` | `*.R`, `*.Rmd` | Tidyverse style, ecology packages |
| `python-code` | `*.py`, `*.ipynb` | PEP 8, ecology Python stack |
| `data-rules` | `Data/**` | FAIR principles, immutable raw data |
| `spatial-rules` | `*.shp`, `*.tif`, `*.gpkg` | CRS, projections, resolution |
| `latex-rules` | `*.tex`, `*.bib` | Journal templates, BibTeX |
| `quarto-rules` | `*.qmd` | Manuscript/presentation conventions |

## Quality Gates

| Score | Action |
|---|---|
| < 80 | Blocks commits |
| 80–89 | Blocks pull requests |
| 90–94 | Merge-ready |
| 95+ | Excellence |

## Who Is This For?

- **PhD students** — Structured workflow from messy data to submitted manuscript
- **Early-career researchers** — Quality gates catch common mistakes before submission
- **Lab PIs** — Reproducibility standards enforced automatically
- **Conservation practitioners** — Plain-language summaries from technical analyses
- **Ecology instructors** — Fork for course assignments with built-in review

## Ecology-Specific Features

- Built-in knowledge of GBIF, eBird, iNaturalist, IUCN APIs and their data quality quirks
- Environmental data integration: WorldClim, CHELSA, ERA5, SoilGrids, MODIS, Google Earth Engine
- ODMAP protocol compliance for species distribution models
- Spatial awareness (CRS, scale, extent/resolution tradeoffs) across all agents
- Detection probability enforcement — flags analyses that ignore imperfect detection
- R-first design (ecology's lingua franca) with Python support
- Journal formatting for BES, ESA, Wiley, Nature, Elsevier ecology journals
- Simulated peer review calibrated by journal tier (Nature Eco Evo → PeerJ)
- FAIR data principles and Dryad/Zenodo/Figshare archiving workflows
- Reproducibility checklist, data management plan, and session persistence

## Knowledge Base

EcoTERRA ships with ecology domain knowledge in `ecoterra/knowledge/`:

- **Journals** — Scope, word limits, formatting requirements for 20+ ecology journals
- **Databases** — GBIF, eBird, iNaturalist, IUCN, BioTIME, PREDICTS, WorldClim, CHELSA, ERA5, GEE
- **R packages** — 80+ ecology R packages organized by domain
- **Python packages** — Ecology Python stack
- **Statistical methods** — Decision guide for SDMs, occupancy, community, population, Bayesian
- **Reporting standards** — ODMAP, FAIR, TOP guidelines, statistical reporting conventions

## Inspired By

- [claude-code-my-workflow](https://github.com/pedrohcgs/claude-code-my-workflow) — Academic workflow template for Claude Code
- [CLO-Author](https://github.com/hugosantanna/clo-author) — AI research assistant for applied econometrics

## License

[MIT](LICENSE)
