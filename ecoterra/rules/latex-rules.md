---
description: LaTeX standards for ecology manuscripts — journal templates, BibTeX, figure inclusion
globs: "*.tex,*.bib,*.cls,*.sty"
alwaysApply: false
---

# LaTeX Rules

Standards for writing LaTeX manuscripts targeting ecology journals.

## Document Structure

### Standard Ecology Manuscript Template

```latex
\documentclass[12pt, a4paper]{article}

% --- Packages ----------------------------------------------------------------
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath, amssymb}
\usepackage{graphicx}
\usepackage[margin=2.5cm]{geometry}
\usepackage{setspace}
\usepackage{lineno}                % Line numbers (required by most journals)
\usepackage{natbib}                % Author-date citations
\usepackage{hyperref}
\usepackage{booktabs}              % Professional tables
\usepackage{siunitx}               % SI units and number formatting
\usepackage[labelfont=bf]{caption} % Bold figure/table labels

% --- Configuration -----------------------------------------------------------
\doublespacing                     % Most journals require double-spacing
\linenumbers                       % Most journals require line numbers
\bibliographystyle{ecology}        % Or mee, apa, etc.

% --- Title Block -------------------------------------------------------------
\title{Your Title Here: Concise, Informative, No Abbreviations}
\author{
  First A. Author\textsuperscript{1,*},
  Second B. Author\textsuperscript{2},
  Third C. Author\textsuperscript{1,2}
}
\date{}

\begin{document}
\maketitle

% --- Affiliations ------------------------------------------------------------
\noindent
\textsuperscript{1}Department of Ecology, University Name, City, Country\\
\textsuperscript{2}Conservation Institute, City, Country\\
\textsuperscript{*}Corresponding author: \href{mailto:email@example.com}{email@example.com}

% --- Abstract ----------------------------------------------------------------
\begin{abstract}
Context. Gap. Objective. Methods. Key quantitative results. Implications.
\end{abstract}

\noindent\textbf{Keywords:} keyword one, keyword two, keyword three (4--6 keywords)

% --- Main Text ---------------------------------------------------------------
\section{Introduction}
\section{Methods}
  \subsection{Study area}
  \subsection{Data collection}
  \subsection{Statistical analysis}
\section{Results}
\section{Discussion}

% --- Acknowledgements --------------------------------------------------------
\section*{Acknowledgements}

% --- Data Availability -------------------------------------------------------
\section*{Data Availability Statement}

% --- Author Contributions ----------------------------------------------------
\section*{Author Contributions}

% --- References --------------------------------------------------------------
\bibliography{Bibliography_base}

% --- Supplementary (compile separately or as appendix) -----------------------
% \appendix
% \section{Supplementary Material}

\end{document}
```

## BibTeX Standards

### Bibliography Style Files

| Journal Group | Style | Notes |
|---|---|---|
| BES Journals | `mee.bst` or `ecology.bst` | Author-date, ampersand |
| ESA Journals | `ecology.bst` | Author-date |
| Nature Portfolio | `naturemag.bst` | Numbered, superscript |
| General | `apalike.bst` | Author-date, safe fallback |

### Entry Formatting

```bibtex
% Journal article (most common)
@article{MacKenzie2002occupancy,
  author  = {MacKenzie, Darryl I. and Nichols, James D. and Lachman, Gideon B.
             and Droege, Sam and Royle, J. Andrew and Langtimm, Catherine A.},
  title   = {Estimating site occupancy rates when detection probabilities
             are less than one},
  journal = {Ecology},
  year    = {2002},
  volume  = {83},
  number  = {8},
  pages   = {2248--2255},
  doi     = {10.1890/0012-9658(2002)083[2248:ESORWD]2.0.CO;2}
}

% R package
@manual{Fiske2011unmarked,
  title  = {unmarked: An {R} package for fitting hierarchical models
            of wildlife occurrence and abundance},
  author = {Fiske, Ian and Chandler, Richard},
  year   = {2011},
  journal = {Journal of Statistical Software},
  volume = {43},
  number = {10},
  pages  = {1--23},
  doi    = {10.18637/jss.v043.i10}
}

% Book
@book{MacKenzie2018occupancy,
  author    = {MacKenzie, Darryl I. and Nichols, James D. and Royle, J. Andrew
               and Pollock, Kenneth H. and Bailey, Larissa L. and Hines, James E.},
  title     = {Occupancy Estimation and Modeling: Inferring Patterns and
               Dynamics of Species Occurrence},
  edition   = {2nd},
  publisher = {Academic Press},
  year      = {2018},
  doi       = {10.1016/C2012-0-01164-7}
}

% Dataset
@misc{GBIF2024download,
  author = {{GBIF.org}},
  title  = {{GBIF} Occurrence Download},
  year   = {2024},
  doi    = {10.15468/dl.xxxxxx},
  note   = {Accessed 2024-03-15}
}
```

### Rules
- Always include DOIs
- Use en-dash for page ranges: `2248--2255`
- Protect capitalization with braces: `{R}`, `{Bayesian}`, `{GBIF}`
- Full journal names (not abbreviated) unless journal style requires abbreviations
- Consistent author name format: `Last, First Middle.`

## Figure Inclusion

```latex
\begin{figure}[ht]
  \centering
  \includegraphics[width=\textwidth]{Figures/fig01_study_area_map.pdf}
  \caption{\textbf{Study area and occurrence records.}
    Map showing the distribution of \textit{Species name} occurrence
    records (points, $n = 342$) within the study area (grey outline).
    Background shading indicates elevation (m a.s.l.).
    CRS: WGS~84 (EPSG:4326).}
  \label{fig:study_area}
\end{figure}
```

### Rules
- Use vector formats (PDF) for figures with text/lines
- Use raster formats (TIFF/PNG at ≥ 300 DPI) for photographs and complex rasters
- Bold the first sentence of the caption (main message)
- Captions must be self-contained
- Label every figure with `\label{fig:name}` and reference with `\ref{fig:name}`

## Table Formatting

```latex
\begin{table}[ht]
  \centering
  \caption{\textbf{Model comparison results.}
    Comparison of candidate occupancy models for \textit{Species name}.
    $K$ = number of parameters; $\Delta$AIC = difference from top model;
    $w$ = Akaike weight. Detection modeled as $p(\text{date} + \text{effort})$
    in all models.}
  \label{tab:model_comparison}
  \begin{tabular}{lrrrrr}
    \toprule
    Occupancy model & $K$ & AIC & $\Delta$AIC & $w$ & Pseudo-$R^2$ \\
    \midrule
    $\psi$(habitat + elevation) & 6 & 342.1 & 0.0 & 0.62 & 0.34 \\
    $\psi$(elevation)           & 5 & 345.5 & 3.4 & 0.23 & 0.28 \\
    $\psi$(habitat)             & 5 & 347.2 & 5.1 & 0.11 & 0.25 \\
    $\psi$(.)                   & 4 & 351.8 & 9.7 & 0.04 & --- \\
    \bottomrule
  \end{tabular}
\end{table}
```

### Rules
- Use `booktabs` (`\toprule`, `\midrule`, `\bottomrule`) — no vertical lines
- Bold the first sentence of the caption
- Define all abbreviations in the caption
- Right-align numbers, left-align text
- Use `siunitx` `S` column type for aligned decimal numbers when needed

## Common LaTeX Patterns for Ecology

```latex
% Species names (always italic)
\textit{Quercus robur}

% Statistical symbols
$\beta = 0.34$, 95\% CI [$0.12, 0.56$]
$p < 0.001$
$R^2 = 0.67$
$\chi^2 = 12.4$, df $= 3$
$n = 342$

% Occupancy notation
$\psi$ (occupancy), $p$ (detection), $\gamma$ (colonization), $\varepsilon$ (extinction)

% Units with siunitx
\SI{300}{\meter}
\SI{25}{\degreeCelsius}
\SI{1200}{\milli\meter\per\year}

% Cross-references
Figure~\ref{fig:study_area}
Table~\ref{tab:model_comparison}
Equation~\ref{eq:occupancy}
see Appendix~S1
```

## Pre-Submission Checklist

- [ ] Double-spaced, line-numbered
- [ ] Figures and tables placed inline near first reference (default) or at end if journal requires it
- [ ] All `\ref{}` commands resolve (no "??")
- [ ] All `\cite{}` commands resolve
- [ ] No orphan citations in `.bib` (entries not cited)
- [ ] No missing citations in text (cited but not in `.bib`)
- [ ] Species names italicized throughout
- [ ] Keywords provided
- [ ] Word count within limits
- [ ] Supplementary materials compiled separately (appendix or standalone document)
