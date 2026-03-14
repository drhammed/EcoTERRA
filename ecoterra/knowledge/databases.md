# Biodiversity & Environmental Databases

> Quick reference for accessing ecological data sources.

## Biodiversity Occurrence Data

### GBIF (Global Biodiversity Information Facility)
- **URL**: https://www.gbif.org
- **Coverage**: 2.4B+ occurrence records, global, all taxa
- **Access**: R (`rgbif`), Python (`pygbif`), REST API
- **Citation**: Must cite download DOI
- **Key fields**: `decimalLatitude`, `decimalLongitude`, `coordinateUncertaintyInMeters`, `basisOfRecord`, `species`, `eventDate`
- **Common issues**: Centroid snapping, coordinate precision, taxonomic misidentification, sampling bias

### eBird (Cornell Lab of Ornithology)
- **URL**: https://ebird.org
- **Coverage**: Global bird observations, semi-structured citizen science
- **Access**: R (`auk` for Basic Dataset, `rebird` for API), download request
- **Key features**: Effort data (distance, duration, party size), complete checklists
- **Best for**: Occupancy models, abundance estimation, phenology
- **Common issues**: Observer bias, spatial bias toward roads/population centers

### iNaturalist
- **URL**: https://www.inaturalist.org
- **Coverage**: Global, multi-taxon, photo-verified citizen science
- **Access**: R (`rinat`), via GBIF, API
- **Best for**: Presence-only SDMs, range documentation, phenology
- **Common issues**: Spatial bias, taxonomic bias toward charismatic species, no effort data

### IUCN Red List
- **URL**: https://www.iucnredlist.org
- **Access**: R (`rredlist`), API (requires token)
- **Data**: Conservation status, range polygons, habitat, threats
- **Best for**: Conservation context, expert range maps

### BioTIME
- **URL**: http://biotime.st-andrews.ac.uk
- **Data**: Standardized biodiversity time series
- **Best for**: Temporal trends, community dynamics

### PREDICTS
- **URL**: https://www.nhm.ac.uk/our-science/data/predicts.html
- **Data**: Site-level biodiversity linked to land use
- **Best for**: Land-use impact studies

### Living Planet Index
- **URL**: https://www.livingplanetindex.org
- **Data**: Vertebrate population time series
- **Best for**: Population trend analysis

## Environmental Data

### Climate

| Source | Resolution | Temporal | Variables | URL |
|---|---|---|---|---|
| **WorldClim v2.1** | 30s–10min | 1970–2000 | 19 bioclimatic | worldclim.org |
| **CHELSA v2.1** | 30s | 1981–2010 | Bioclimatic + cloud | chelsa-climate.org |
| **ERA5-Land** | 0.1° | 1950–present, hourly | Full meteorological | CDS |
| **PRISM** | 800m | 1895–present | Temp, precip (USA) | prism.oregonstate.edu |
| **CRU TS** | 0.5° | 1901–present, monthly | Temp, precip, global | crudata.uea.ac.uk |

### Future Climate (CMIP6)
| Source | Scenarios | Resolution |
|---|---|---|
| **WorldClim** | SSP1-2.6 to SSP5-8.5 | 30s–10min |
| **CHELSA** | SSP1-2.6 to SSP5-8.5 | 30s |

### Topography

| Source | Resolution | Coverage |
|---|---|---|
| **SRTM** | 30m / 90m | 60°N–60°S |
| **ASTER GDEM** | 30m | Global |
| **Copernicus DEM** | 30m | Global |

### Land Cover

| Source | Resolution | Temporal | URL |
|---|---|---|---|
| **ESA WorldCover** | 10m | 2020–2021 | esa-worldcover.org |
| **Copernicus Global** | 100m | Annual | land.copernicus.eu |
| **MODIS Land Cover** | 500m | 2001–present | lpdaac.usgs.gov |

### Soil

| Source | Resolution | Variables |
|---|---|---|
| **SoilGrids 250m** | 250m | pH, organic C, texture, bulk density |
| **ISRIC** | Various | Global soil profiles |

### Vegetation Indices

| Source | Resolution | Temporal |
|---|---|---|
| **MODIS NDVI** | 250m | 16-day composite, 2000–present |
| **MODIS EVI** | 250m | 16-day composite |
| **Landsat NDVI** | 30m | 16-day, 1984–present (via GEE) |

### Geospatial Platforms

| Source | Description | Access |
|---|---|---|
| **Google Earth Engine** | Planetary-scale geospatial analysis platform. Hosts petabytes of satellite imagery and environmental data (Landsat, Sentinel, MODIS, climate, terrain). Compute runs server-side. | Python (`earthengine-api`, `geemap`), R (`rgee`), JavaScript (Code Editor) |
| **Microsoft Planetary Computer** | Open environmental datasets with compute. STAC catalog. | Python (`pystac-client`, `planetary-computer`) |

### Human Influence

| Source | Resolution | Description |
|---|---|---|
| **Human Footprint** | 1km | Cumulative human pressure index |
| **Global Roads** | Vector | OpenStreetMap, gROADS |
| **Night Lights** | 500m | VIIRS annual composites |
| **Population Density** | 1km | WorldPop, GPWv4 |

---

> **Note:** These lists are not exhaustive. Agents can access and recommend additional databases, variables, and tools at runtime based on the specific research question.
