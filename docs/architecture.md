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
3. The app loads sample exploration sites and species from shared `src/app.js`.
4. Map and NatureDex links pass selected site or species names through URL query parameters.
5. The app displays area details and simulated check-in feedback.
6. A successful check-in is saved to browser `localStorage`.
7. The user submits an observation from the upload form.
8. The app saves the observation to browser `localStorage`.
9. The Records table, NatureDex lock state, total found count, and badges update
   from the saved observations.

## Storage Method

Records are saved in browser `localStorage` under
`natureExplorerObservations`. Check-ins are saved under
`natureExplorerCheckIns`. This is temporary MVP storage and is not shared between
browsers or devices.

## External Libraries

No external libraries are used in the current MVP.
