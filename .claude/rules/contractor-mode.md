---
description: Enforces plan-first workflow and quality gates for all non-trivial tasks
globs: *
alwaysApply: true
---

# Contractor Mode

You operate in **contractor mode**. This means you follow a structured plan-implement-review-fix-score cycle for all non-trivial work.

## The Cycle

### 1. Plan First — Always

Before writing any code, analysis, or prose:

- **Read** the task carefully. Identify what is being asked.
- **Break it down** into concrete, numbered steps.
- **Identify** which files, data, tools, and methods are needed.
- **Present the plan** to the user and wait for approval.
- **Do not implement** until the user says "go", "yes", "approved", or equivalent.

Exceptions: Trivial tasks (fixing a typo, adding a comment, renaming a variable) can skip the plan.

### 2. Implement the Approved Plan

- Follow the plan step by step.
- If you discover the plan needs adjustment, pause and propose the change.
- Track progress — mark steps as done as you complete them.
- Follow all applicable rules (ecology-conventions, r-code, python-code, data-rules, etc.).

### 3. Review the Output

After implementation, review the work through the appropriate lens:

- **Code**: Does it run? Is it reproducible? Does it follow style conventions?
- **Analysis**: Are assumptions met? Are diagnostics included? Are uncertainties reported?
- **Writing**: Is it clear? Are results reported correctly? Are citations present?
- **Figures**: Are they publication-quality? Colorblind-safe? Properly labeled?

When critic agents are available, dispatch them for review.

### 4. Fix All Issues

- Address every finding from the review.
- Do not skip issues without explicit user approval.
- If a fix introduces new concerns, re-review.

### 5. Score the Work

Rate the deliverable 0–100 across applicable dimensions:

| Dimension | What It Measures |
|---|---|
| Correctness | Code runs, results are right, logic is sound |
| Reproducibility | Can be re-run from raw data to output via scripts |
| Ecological validity | Methods appropriate for the ecological question |
| Statistical rigor | Assumptions checked, diagnostics run, uncertainty quantified |
| Writing clarity | Clear, concise, properly formatted, correctly cited |
| Visualization quality | Publication-ready, accessible, informative |

**Quality Gates:**

| Score | Gate |
|---|---|
| **< 80** | **Blocks commits.** Must fix before saving. |
| **80–89** | **Blocks pull requests.** Needs improvement before sharing. |
| **90–94** | **Merge-ready.** Good quality. |
| **95+** | **Excellence.** Aspirational target. |

## Behavioral Rules

1. **Never start without a plan** for non-trivial tasks.
2. **Never skip the review step.** Self-review at minimum; critic agents when available.
3. **Never ignore reviewer findings.** Fix or get explicit user waiver.
4. **Always report the score** with the dimension breakdown.
5. **Save quality reports** to `quality_reports/` for traceability.
6. **Escalate uncertainty.** If a design choice is debatable, present options — don't decide unilaterally.
7. **Preserve context.** Before context compression, save critical state to session logs.

## What Counts as Non-Trivial?

A task is non-trivial if it involves any of:
- Writing or modifying analysis code (>10 lines)
- Statistical modeling or model selection
- Data cleaning or transformation pipelines
- Manuscript section drafting or major edits
- Figure creation for publication
- Study design decisions

A task is trivial if it is:
- A typo fix, comment, or formatting change
- A single-line code edit with obvious intent
- A direct factual question with a clear answer
