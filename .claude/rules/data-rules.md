---
description: Data management rules — FAIR principles, immutable raw data, documentation standards
paths: "Data/**"
---

# Data Rules

Standards for data management in quantitative ecology research projects. Applies to all files within the `Data/` directory tree.

## Cardinal Rule

> **Raw data is immutable. Never modify files in `Data/raw/`.**

All transformations, cleaning, filtering, and derived datasets go to `Data/processed/`. This is non-negotiable. If you need to fix raw data, create a cleaning script that reads raw and writes processed.

## Directory Structure

```
Data/
├── raw/                    # Original, unmodified data (NEVER edit)
│   ├── gbif_download.csv
│   ├── ebird_data.txt
│   └── field_survey_2024.xlsx
├── processed/              # Cleaned, transformed, analysis-ready data
│   ├── occurrences_cleaned.csv
│   ├── community_matrix.csv
│   └── covariates_extracted.csv
└── environmental/          # Climate, soil, land-use raster layers
    ├── worldclim/
    ├── soilgrids/
    └── landcover/
```

## Data Provenance

Every dataset in `Data/raw/` must have documented provenance:

1. **Source**: Organization, database, or field campaign
2. **Access method**: API call, web download, field collection
3. **Date obtained**: When the data was downloaded or collected
4. **Query parameters**: Search terms, spatial extent, date range, taxonomic filters
5. **Citation**: How to cite the data (GBIF DOI, data paper, etc.)
6. **License**: Data use terms (CC-BY, CC0, restricted, etc.)

Document provenance in:
- A `README.md` in `Data/raw/` (for the full dataset inventory)
- The header of the processing script that first reads the data
- The manuscript's Data Availability statement

## File Formats

### Preferred Formats

| Data Type | Format | Notes |
|---|---|---|
| Tabular | CSV (`.csv`) | UTF-8 encoding, comma-separated |
| Spatial vectors | GeoPackage (`.gpkg`) | Preferred over shapefile |
| Spatial vectors (legacy) | Shapefile (`.shp`) | Keep all sidecar files together |
| Spatial rasters | GeoTIFF (`.tif`) | With embedded CRS and NoData value |
| Multi-dimensional | NetCDF (`.nc`) | Climate model output, time series |
| Metadata | JSON or YAML | Machine-readable metadata |

### Avoid
- Excel (`.xlsx`) for analysis data — convert to CSV
- Proprietary formats without open readers
- Compressed archives without documentation of contents

## Column Naming Standards

For tabular data (CSV/data frames):

| Convention | Example | Notes |
|---|---|---|
| `snake_case` | `species_name`, `site_id` | Always lowercase |
| Include units in name or metadata | `elevation_m`, `temperature_c` | Or document in metadata |
| Use ISO standards | `date` as `YYYY-MM-DD`, coordinates as `latitude`/`longitude` | Unambiguous |
| Consistent ID columns | `site_id`, `species_id`, `survey_id` | For joins |

### Standard Column Names

```
species_name       # Binomial: "Genus species"
latitude           # Decimal degrees, WGS 84
longitude          # Decimal degrees, WGS 84
date               # ISO 8601: YYYY-MM-DD
site_id            # Unique site identifier
survey_id          # Unique survey/visit identifier
observer_id        # Observer identifier
abundance          # Count of individuals
detected           # Binary: 0/1 for detection histories
coordinate_uncertainty_m  # Coordinate precision in meters
basis_of_record    # GBIF record type
```

## Data Validation Checks

Before using any dataset, verify:

### Coordinates
- [ ] Latitude in [-90, 90]
- [ ] Longitude in [-180, 180]
- [ ] No (0, 0) artifacts
- [ ] Points on correct landmass (not in ocean for terrestrial species)
- [ ] Coordinate precision appropriate for study resolution

### Dates
- [ ] ISO 8601 format (YYYY-MM-DD)
- [ ] No future dates
- [ ] Dates within expected study period
- [ ] No ambiguous date formats (DD/MM vs. MM/DD)

### Taxonomy
- [ ] Names resolved against authoritative backbone
- [ ] No unresolved synonyms
- [ ] Taxonomic rank consistent

### Values
- [ ] No impossible values (negative counts, proportions > 1)
- [ ] Missing values coded consistently (NA, not blank, -999, or "N/A")
- [ ] Units documented and consistent

## FAIR Principles

### Findable
- Use clear, descriptive file names
- Maintain a data inventory in `Data/raw/README.md`
- Assign DOIs to archived datasets (Dryad, Zenodo, Figshare)

### Accessible
- Store in standard, open formats (CSV, GeoTIFF, GeoPackage)
- Include download scripts for large or API-sourced data
- Document any access restrictions

### Interoperable
- Use standard column names and codes
- Document CRS explicitly for all spatial data
- Use ISO date formats
- Use UTF-8 encoding

### Reusable
- Include metadata: column descriptions, units, CRS, temporal extent
- Document processing steps in code (not manually)
- Specify data license
- Include a data management plan for the project

## Sensitive Data

### Endangered Species Locations
- **Never commit exact coordinates** of threatened species (IUCN CR, EN, VU) to public repositories
- Jitter, buffer, or degrade precision for public datasets
- Keep precise locations in a separate, access-restricted file
- Document the sensitivity policy in the data management plan

### Personal Data
- Remove or anonymize observer personal information
- Follow institutional ethics board requirements
- Document consent and anonymization in methodology

## Data Archiving (Pre-Submission)

Before manuscript submission:

1. Create a deposit-ready data package in `Replication/`
2. Include: cleaned data, analysis scripts, metadata, README
3. Archive to Dryad, Zenodo, or Figshare
4. Obtain a DOI for the archived dataset
5. Add the DOI to the manuscript's Data Availability statement
6. Verify the archive is complete by downloading and running the pipeline
