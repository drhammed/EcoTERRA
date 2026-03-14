---
description: Spatial data standards — CRS, projections, resolution, raster/vector conventions
globs: "*.shp,*.tif,*.tiff,*.gpkg,*.geojson,*.nc"
alwaysApply: false
---

# Spatial Data Rules

Standards for handling spatial data (rasters, vectors, coordinates) in quantitative ecology research.

## Cardinal Rules

1. **Always declare the CRS explicitly.** Never assume.
2. **All layers in an analysis must share the same CRS** before any spatial operation.
3. **Use geographic CRS (WGS 84) for storage**, projected CRS for distance/area calculations.

## Coordinate Reference Systems

### Standard CRS Usage

| Purpose | CRS | EPSG | When to Use |
|---|---|---|---|
| Storage & exchange | WGS 84 | 4326 | Default for storing coordinates, GBIF data, GPS data |
| Global analysis | WGS 84 | 4326 | When extent spans multiple UTM zones |
| Regional distance/area | UTM zone | varies | Local-to-regional studies requiring accurate distances |
| Continental equal-area | Lambert Azimuthal | varies | Area calculations over large extents |
| Continental conformal | Lambert Conformal Conic | varies | Shape-preserving continental maps |

### CRS Workflow

```r
library(sf)
library(terra)

# 1. Always check CRS on load
st_crs(vector_data)
crs(raster_data)

# 2. Set CRS if missing (only if you KNOW the CRS)
st_crs(vector_data) <- 4326

# 3. Transform to common CRS before operations
vector_proj <- st_transform(vector_data, crs = "EPSG:32633")
raster_proj <- project(raster_data, "EPSG:32633")

# 4. Verify CRS match before spatial operations
stopifnot(st_crs(layer_a) == st_crs(layer_b))
```

```python
import geopandas as gpd
import rasterio
from pyproj import CRS

# Check CRS
gdf = gpd.read_file("data.gpkg")
print(gdf.crs)

# Transform
gdf_proj = gdf.to_crs(epsg=32633)

# Verify match
assert gdf_a.crs == gdf_b.crs, "CRS mismatch!"
```

### Common Pitfalls
- **GBIF data has no CRS metadata** — it's WGS 84 (EPSG:4326), but you must set it explicitly
- **Shapefiles can lose CRS** if `.prj` file is missing — always verify
- **`terra::extract()` silently reprojects** — check that input CRS matches
- **Distance in degrees is meaningless** — transform to a projected CRS first

## Raster Data Standards

### Resolution & Extent

- Document the resolution of every raster layer (in native units)
- All raster layers in an analysis stack must have the **same resolution and extent**
- If resampling is needed, document the method:
  - **Bilinear**: For continuous variables (temperature, elevation)
  - **Nearest neighbor**: For categorical variables (land cover, soil type)
  - **Cubic**: For smooth continuous variables when higher quality needed

```r
library(terra)

# Check resolution and extent
res(raster_data)
ext(raster_data)

# Resample to match a template
resampled <- resample(source_raster, template_raster, method = "bilinear")

# Crop and mask to study area
cropped <- crop(env_stack, study_area)
masked <- mask(cropped, study_area)
```

### Raster Best Practices

1. **Use GeoTIFF** (`.tif`) with embedded CRS and NoData value
2. **Set NoData explicitly**: Don't use 0 or -9999 without declaring it
3. **Compress large rasters**: Use LZW or DEFLATE compression
4. **Document the source**: WorldClim v2.1, CHELSA v2.1, SoilGrids 250m, etc.
5. **Document temporal reference**: Which time period does the layer represent?
6. **Check for artifacts**: Striping, missing tiles, edge effects after mosaicking

### Environmental Layer Checklist

Before building a raster stack for analysis:

- [ ] All layers at the same resolution (or resampled with documented method)
- [ ] All layers at the same extent (cropped to study area)
- [ ] All layers in the same CRS
- [ ] NoData values consistent and properly set
- [ ] No multicollinearity issues (VIF < 10, |r| < 0.7)
- [ ] Variables ecologically relevant and justified
- [ ] Source, version, and temporal extent documented

## Vector Data Standards

### Preferred Formats

| Format | Extension | Pros | Cons |
|---|---|---|---|
| **GeoPackage** | `.gpkg` | Single file, no size limit, multiple layers | Less universal than shapefile |
| **Shapefile** | `.shp` + sidecar | Universal support | 2GB limit, column name truncation, multiple files |
| **GeoJSON** | `.geojson` | Human-readable, web-friendly | Large file sizes, WGS 84 only |

**Prefer GeoPackage** for new projects. Accept shapefile for compatibility.

### Vector Best Practices

1. **Validate geometry** before spatial operations
2. **Fix invalid geometries**: `st_make_valid()` in R, `gdf.make_valid()` in Python
3. **Simplify only for visualization**, never for analysis
4. **Buffer with projected CRS** — buffer distances in degrees are meaningless

```r
# Validate and fix
valid_data <- st_make_valid(vector_data)

# Check validity
all(st_is_valid(valid_data))
```

## Spatial Operations Checklist

Before any spatial analysis, verify:

- [ ] CRS is explicitly set on all layers
- [ ] All layers share the same CRS
- [ ] Projected CRS used for distance/area calculations
- [ ] Resolution matches across raster layers
- [ ] Extent appropriate for the ecological question
- [ ] Geometry valid for vector data
- [ ] Spatial autocorrelation considered in statistical analysis

## Map Standards

Every map produced for publication must include:

1. **Scale bar** — in appropriate units (km for regional, m for local)
2. **North arrow** — unless north is obviously up and the map is rectangular
3. **Coordinate grid or graticule** — with labeled tick marks
4. **CRS notation** — in the caption or on the map
5. **Legend** — clear, readable, with appropriate breaks
6. **Inset map** — showing location within larger geographic context (when helpful)
7. **Colorblind-safe palette** — `viridis`, `scico`, or Okabe-Ito

```r
library(ggplot2)
library(ggspatial)

ggplot() +
  geom_sf(data = study_area) +
  geom_sf(data = occurrences, aes(color = species)) +
  annotation_scale(location = "bl") +
  annotation_north_arrow(location = "tl", style = north_arrow_fancy_orienteering()) +
  scale_color_viridis_d() +
  coord_sf(crs = 4326) +
  labs(caption = "CRS: WGS 84 (EPSG:4326)")
```

## Common Spatial Ecology Workflows

### SDM Variable Extraction
1. Load occurrence points → set CRS to WGS 84
2. Load environmental rasters → verify CRS, resolution, extent
3. Crop/mask rasters to study area
4. Extract values at occurrence and background points
5. Check for NAs (points on raster edges, ocean cells)
6. Check multicollinearity

### Spatial Thinning
1. Project occurrences to appropriate UTM zone
2. Apply thinning with ecologically justified distance
3. Document thinning distance rationale (raster resolution, home range, etc.)
4. Report records before and after thinning
5. Transform back to WGS 84 for storage

### Connectivity / Landscape Analysis
1. Define resistance surface from land cover or habitat suitability
2. Use projected CRS for cost-distance calculations
3. Document connectivity method (least-cost path, circuit theory, etc.)
4. Report landscape metrics with units and scale
