# Data Management Plan

> Template for documenting how data will be collected, processed, stored, and shared.

---

## 1. Project Information

- **Project title**: [title]
- **Principal investigator**: [name, affiliation]
- **Collaborators**: [names]
- **Funding**: [funder, grant number]
- **Date**: [YYYY-MM-DD]

## 2. Data Description

### 2.1 Data types to be collected/acquired

| Dataset | Type | Source | Format | Estimated Size |
|---|---|---|---|---|
| Occurrence records | Tabular | GBIF | CSV | [X] MB |
| Environmental layers | Raster | WorldClim | GeoTIFF | [X] MB |
| Field survey data | Tabular | Field work | CSV | [X] MB |
| [other] | [type] | [source] | [format] | [size] |

### 2.2 Data standards
- Tabular data: CSV, UTF-8 encoding
- Spatial vectors: GeoPackage or Shapefile
- Spatial rasters: GeoTIFF with embedded CRS
- Dates: ISO 8601 (YYYY-MM-DD)
- Coordinates: Decimal degrees, WGS 84 (EPSG:4326)

## 3. Data Collection & Processing

### 3.1 Collection methods
[Describe field methods, survey protocols, or database queries]

### 3.2 Quality assurance
- Coordinate validation (CoordinateCleaner)
- Taxonomic harmonization (taxize, GBIF Backbone)
- Duplicate removal
- Outlier checks
- [Other QA steps]

### 3.3 Processing pipeline
- Raw data → `Data/raw/` (immutable)
- Processed data → `Data/processed/`
- All transformations documented in numbered scripts

## 4. Storage & Backup

### 4.1 Active storage
- **Location**: [local machine, university server, cloud storage]
- **Backup frequency**: [daily, weekly]
- **Backup location**: [secondary location]

### 4.2 Version control
- Git repository for all code and manuscripts
- Large data files tracked via `.gitignore` (not committed)
- Data versioned via archive DOIs

## 5. Data Sharing & Archiving

### 5.1 Public archiving
- **Repository**: [Dryad / Zenodo / Figshare]
- **Timeline**: Archive before or at manuscript submission
- **DOI**: [to be assigned]
- **License**: [CC-BY 4.0 / CC0 / other]

### 5.2 What will be shared
- [ ] Cleaned occurrence data (with sensitive locations handled)
- [ ] Environmental variable stack (or download scripts)
- [ ] All analysis scripts
- [ ] Model objects
- [ ] Result tables
- [ ] Metadata and README

### 5.3 What will NOT be shared (with justification)
- [ ] Exact locations of threatened species — [jittered version provided instead]
- [ ] Raw field data with personal identifiers — [anonymized version provided]
- [ ] [Other restricted data — reason]

### 5.4 Embargo period
- [None / X months after publication / other]

## 6. Ethical & Legal Considerations

- [ ] Research permits obtained (if field work): [permit numbers]
- [ ] Ethics board approval (if applicable): [approval number]
- [ ] Data use agreements complied with (GBIF terms, eBird terms)
- [ ] Indigenous knowledge protocols followed (if applicable)
- [ ] GDPR/privacy compliance for observer data

## 7. Roles & Responsibilities

| Role | Person | Responsibility |
|---|---|---|
| Data collection | [name] | Field surveys, data entry |
| Data management | [name] | Cleaning, archiving, documentation |
| Analysis | [name] | Statistical modeling, code |
| Archiving | [name] | Repository deposit, DOI assignment |
