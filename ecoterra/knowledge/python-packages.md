# Python Packages for Ecology

> Quick reference for the ecology Python package ecosystem.

## Data Access & Manipulation

| Package | Purpose | Install |
|---|---|---|
| `pygbif` | GBIF data access | `pip install pygbif` |
| `pandas` | Data manipulation | `pip install pandas` |
| `numpy` | Numerical computing | `pip install numpy` |
| `requests` | HTTP requests for APIs | `pip install requests` |

## Spatial

| Package | Purpose | Install |
|---|---|---|
| `geopandas` | Vector spatial operations | `pip install geopandas` |
| `rasterio` | Raster I/O | `pip install rasterio` |
| `xarray` | Multi-dimensional arrays (NetCDF) | `pip install xarray` |
| `shapely` | Geometry operations | `pip install shapely` |
| `pyproj` | CRS transformations | `pip install pyproj` |
| `fiona` | Vector data I/O | `pip install fiona` |
| `rasterstats` | Zonal statistics | `pip install rasterstats` |
| `leafmap` | Interactive maps | `pip install leafmap` |
| `folium` | Web maps | `pip install folium` |

## Machine Learning & SDMs

| Package | Purpose | Install |
|---|---|---|
| `scikit-learn` | ML models (RF, GBM, SVM) | `pip install scikit-learn` |
| `xgboost` | Gradient boosting | `pip install xgboost` |
| `lightgbm` | Light gradient boosting | `pip install lightgbm` |
| `torch` | Deep learning (PyTorch) | `pip install torch` |
| `tensorflow` | Deep learning | `pip install tensorflow` |

## Statistics

| Package | Purpose | Install |
|---|---|---|
| `statsmodels` | GLMs, time series, hypothesis tests | `pip install statsmodels` |
| `scipy` | Statistical functions | `pip install scipy` |
| `pingouin` | Statistical testing | `pip install pingouin` |
| `pymc` | Bayesian modeling | `pip install pymc` |
| `arviz` | Bayesian diagnostics | `pip install arviz` |

## Visualization

| Package | Purpose | Install |
|---|---|---|
| `matplotlib` | Base plotting | `pip install matplotlib` |
| `seaborn` | Statistical visualization | `pip install seaborn` |
| `plotnine` | ggplot2-style (Grammar of Graphics) | `pip install plotnine` |
| `contextily` | Basemap tiles for maps | `pip install contextily` |

## Ecology-Specific

| Package | Purpose | Install |
|---|---|---|
| `elapid` | MaxEnt and SDMs in Python | `pip install elapid` |
| `pyimpute` | Spatial imputation for SDMs | `pip install pyimpute` |
| `momepy` | Urban morphology metrics | `pip install momepy` |
| `networkx` | Network analysis (food webs, connectivity) | `pip install networkx` |

## When to Use Python vs. R

**Use Python for:**
- Deep learning / neural network SDMs
- Large-scale geospatial processing (Google Earth Engine via `earthengine-api`)
- Custom ML pipelines with scikit-learn
- Web scraping and API integration
- Integration with cloud computing

**Use R for (preferred in ecology):**
- Occupancy models (`unmarked`, `spOccupancy`)
- Bayesian hierarchical models (`brms`, `nimble`)
- Ensemble SDMs (`biomod2`)
- Community ecology analysis (`vegan`, `Hmsc`)
- Publication-quality figures (`ggplot2`)
- Most established ecological statistical methods
