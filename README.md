# Nature Explorer Songkhla

## Purpose

Nature Explorer Songkhla helps users explore real nature sites in Songkhla,
record species observations, and unlock entries in a simple NatureDex.

## How to install

No installation is needed for the current static MVP.

## How to run

Open `src/index.html` in a web browser, then use the navigation links to move
between pages.

## How to test

Run the sample check script from the project root:

```powershell
.\tests\check_sample_data.ps1
```

If PowerShell blocks direct script execution, use:

```powershell
powershell -ExecutionPolicy Bypass -File .\tests\check_sample_data.ps1
```

## Main files

- `src/index.html` - app structure and forms
- `src/map.html` - station list
- `src/area.html` - selected area details and check-in
- `src/naturedex.html` - species cards
- `src/records.html` - saved observation table and summaries
- `src/species.html` - selected species detail
- `src/styles.css` - page layout and visual styling
- `src/app.js` - shared data, page rendering, check-in, NatureDex, observations, and records
- `species.csv` - seed species database used to build the app species list
- `tests/check_sample_data.ps1` - simple MVP behavior checks
- `docs/git_setup.md` - GitHub remote and push commands

## Known limitations

- This is a frontend-only MVP.
- Records are saved in the browser with `localStorage`.
- Location-based check-in is simulated with sample distance data.
- Photo recognition is simulated with local generated-reference profiles; no real
  computer-vision model is included yet.
