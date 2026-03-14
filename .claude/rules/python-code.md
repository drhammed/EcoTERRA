---
description: Python coding standards for ecology research — PEP 8, ecology packages, reproducible pipelines
globs: "*.py,*.ipynb"
alwaysApply: false
---

# Python Code Standards

Standards for writing Python code in quantitative ecology research projects.

## Style Guide

Follow [PEP 8](https://peps.python.org/pep-0008/) with these ecology-specific additions:

### Naming
- **Variables/functions**: `snake_case` — `species_richness`, `clean_occurrences()`
- **Classes**: `PascalCase` — `OccurrenceDataset`, `SDMPipeline`
- **Constants**: `UPPER_SNAKE` — `MIN_RECORDS = 30`, `VIF_THRESHOLD = 10`
- **Files**: Numbered prefix — `01_data_cleaning.py`, `02_model_fitting.py`

### Script Template

```python
"""
Title: [Descriptive title]
Purpose: [What this script does]
Author: [Name]
Date: [YYYY-MM-DD]
Input: Data/processed/input_file.csv
Output: Figures/fig01_map.png, Tables/tab01_results.csv
"""

# --- Imports -----------------------------------------------------------------
import os
import numpy as np
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt

# --- Configuration -----------------------------------------------------------
RANDOM_SEED = 42
np.random.seed(RANDOM_SEED)

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_RAW = os.path.join(PROJECT_ROOT, "Data", "raw")
DATA_PROCESSED = os.path.join(PROJECT_ROOT, "Data", "processed")
FIGURES = os.path.join(PROJECT_ROOT, "Figures")

# --- Read Data ---------------------------------------------------------------
data = pd.read_csv(os.path.join(DATA_PROCESSED, "cleaned_data.csv"))

# --- Analysis ----------------------------------------------------------------
# [analysis code]

# --- Save Outputs ------------------------------------------------------------
results.to_csv(os.path.join(PROJECT_ROOT, "Tables", "tab01_results.csv"), index=False)
plt.savefig(os.path.join(FIGURES, "fig01_map.png"), dpi=300, bbox_inches="tight")

# --- Environment Info --------------------------------------------------------
import sys
print(f"Python: {sys.version}")
print(f"NumPy: {np.__version__}")
print(f"Pandas: {pd.__version__}")
print(f"GeoPandas: {gpd.__version__}")
```

## Package Usage

### Preferred Packages by Domain

| Domain | Package | Purpose |
|---|---|---|
| Data manipulation | `pandas` | Tabular data |
| Spatial vectors | `geopandas` | Vector operations, shapefiles, GeoPackage |
| Spatial rasters | `rasterio`, `xarray` | Raster I/O and operations |
| Plotting | `matplotlib`, `seaborn` | Static plots |
| Interactive maps | `folium`, `leafmap` | Web maps |
| Machine learning | `scikit-learn` | Classification, regression, clustering |
| Deep learning | `torch`, `tensorflow` | Neural network SDMs |
| Statistics | `statsmodels`, `scipy` | GLMs, hypothesis tests |
| Biodiversity data | `pygbif` | GBIF access |
| Geospatial analysis | `shapely`, `pyproj` | Geometry operations, CRS |

### Ecology-Specific Packages

```python
# SDMs and ecological modeling
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier
from sklearn.model_selection import GroupKFold  # spatial blocking
import statsmodels.api as sm                    # GLMs

# Spatial
import geopandas as gpd
import rasterio
from rasterio.mask import mask
from pyproj import CRS, Transformer
from shapely.geometry import Point

# Biodiversity data
from pygbif import occurrences, species
```

## Reproducibility Requirements

1. **Use relative paths** — `os.path.join()` from project root, never absolute paths
2. **Never modify raw data** — read from `Data/raw/`, write to `Data/processed/`
3. **Always set seeds** — `np.random.seed(42)`, `random.seed(42)`, `torch.manual_seed(42)`
4. **Use virtual environments** — `venv`, `conda`, or `poetry` with pinned versions
5. **Include `requirements.txt`** or `environment.yml` — generated with `pip freeze` or `conda env export`
6. **Print environment info** — Python version and key package versions at the end of scripts
7. **No manual steps** — every transformation must be in code

## Jupyter Notebook Conventions

When using `.ipynb` files:

1. **Use for exploration only** — production pipelines should be `.py` scripts
2. **Clear all outputs** before committing to version control
3. **Use markdown cells** to document the analysis narrative
4. **Number sections** to match the analysis pipeline
5. **Restart and run all** before sharing — ensure cells run in order
6. **Convert to `.py`** for the final reproducible pipeline

```python
# At the top of every notebook
%load_ext autoreload
%autoreload 2

import warnings
warnings.filterwarnings("ignore", category=FutureWarning)
```

## Plotting Conventions

```python
import matplotlib.pyplot as plt
import matplotlib as mpl

# Publication-ready defaults
plt.rcParams.update({
    "figure.dpi": 300,
    "figure.figsize": (170 / 25.4, 120 / 25.4),  # mm to inches
    "font.size": 11,
    "axes.labelsize": 11,
    "axes.titlesize": 12,
    "legend.fontsize": 10,
    "xtick.labelsize": 10,
    "ytick.labelsize": 10,
    "font.family": "sans-serif",
})

# Colorblind-safe palettes
cmap = plt.cm.viridis       # Sequential
cmap = plt.cm.RdYlBu_r      # Diverging
# Or use seaborn: sns.color_palette("colorblind")
```

## When to Use Python vs. R

| Use Python when | Use R when |
|---|---|
| Deep learning / neural networks | Occupancy models (`unmarked`, `spOccupancy`) |
| Large-scale data processing | Bayesian models (`brms`, `nimble`) |
| Integration with web APIs | Ensemble SDMs (`biomod2`) |
| Custom ML pipelines | Community ecology (`vegan`, `Hmsc`) |
| Geospatial automation | Publication-quality plots (`ggplot2`) |
| Existing Python codebase | Most ecological statistical methods |

**Default to R** for ecological analysis — it has the richer ecology package ecosystem. Use Python when R packages don't exist for the task or when integrating with ML/DL workflows.
