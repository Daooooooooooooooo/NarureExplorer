# Architecture

## Purpose

Explain how the system is organised.

## Main Components

Nature Explorer Songkhla

├── Frontend (Next.js)
│   ├── Home
│   ├── Map
│   ├── NatureDex
│   ├── Species Detail
│   └── Camera
│
├── Backend
│   ├── API
│   ├── Authentication
│   ├── Photo Recognition
│   └── Check-in System
│
├── Database (Supabase)
│   ├── Sites
│   ├── Species
│   ├── User
│   ├── Observations
│   └── Badges
│
└── Storage
    ├── Cartoon Images
    ├── Reference Photos
    └── User Photos

## File Structure

```text
NatureExplorer/
|-- README.md
|-- species.csv
|-- docs/
|   |-- architecture.md
|   |-- agent_report.md
|   |-- domain.md
|   |-- function_design.md
|   |-- style.md
|   `-- testing.md
|-- src/
|   |-- index.html
|   |-- map.html
|   |-- area.html
|   |-- naturedex.html
|   |-- upload.html
|   |-- records.html
|   |-- species.html
|   |-- styles.css
|   `-- app.js
`-- tests/
    `-- check_sample_data.ps1
```

## Frontend and Backend Split

The current MVP is frontend-only. It uses separate static HTML pages, shared
CSS, and shared JavaScript so beginners can run it without a build step.

The originally planned backend, authentication, Supabase database, storage, and
photo recognition services are not implemented yet. Those should be added only
after the frontend flow is clear.

## Data Flow

1. The user opens `src/index.html`.
2. Navigation links move between the static pages.
3. The Station page shows exploration stations.
4. The app loads station data and a CSV-derived species database from shared `src/app.js`.
5. When location permission is confirmed, the Home page opens Area Detail for
   the nearest sample station automatically.
6. Station and NatureDex links pass selected site or species names through URL query parameters.
7. Area Detail shows only species connected to the selected station.
8. The app displays area details and simulated check-in feedback.
9. A successful check-in is saved to browser `localStorage`.
10. The user submits an observation from the upload form.
11. The app compares the uploaded image to a generated species reference profile
   for species available at the selected station.
12. If a station species is matched, the app saves a `Matched` observation and
   shows a tick on that species card for that station.
13. The Records table, NatureDex lock state, total found count, and badges update
   from the saved observations.

## Species Data

`species.csv` is the seed species dataset. The current frontend embeds the same
species list in `src/app.js` so the app still runs directly from local files.
Each species has English and Thai names, scientific name, group, station IDs,
rarity, ecosystem role, fun fact, source URL, and a cartoon-art category.

## Storage Method

Records are saved in browser `localStorage` under
`natureExplorerObservations`. Check-ins are saved under
`natureExplorerCheckIns`. This is temporary MVP storage and is not shared between
browsers or devices.

## Photo Matching

The current MVP uses simulated generated-reference profiles in `src/app.js`.
Each species has an art category such as `fish`, `coral`, `bird`, or `plant`.
When the user uploads an image, the app verifies that the suspected species is
available at the selected station, compares the upload against that generated
profile, stores a `Matched` observation, and displays a tick on the station
species card. This is not a real machine-learning identification model.

## External Libraries

No external libraries are used in the current MVP.
