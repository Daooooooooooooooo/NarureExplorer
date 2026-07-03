# Testing

## Purpose

Explain how to test the project.

## How to Run the App

Open `src/index.html` in a web browser, then use the navigation links for:

- Home: `src/index.html`
- Station: `src/map.html`
- Area Detail: `src/area.html`
- NatureDex: `src/naturedex.html`
- Camera / Upload: `src/upload.html`
- Records: `src/records.html`
- Species Detail: `src/species.html`

## How to Run Automated Tests

From the project root, run:

```powershell
.\tests\check_sample_data.ps1
```

The script checks that the split page files exist and that key behavior strings
for navigation, station filtering, bilingual species data, records, local
storage, check-in messages, check-in stats, record summaries, simulated
generated-photo matching, verification, and the reference-inspired style markers
are present.

## Success Criteria

Before changing code, turn the task into a verifiable goal. For example:

- "Add validation" means invalid inputs are tested and rejected.
- "Fix a bug" means there is a test or manual check that reproduces the bug before the fix and passes after the fix.
- "Refactor code" means behaviour is unchanged and tests pass before and after.

For multi-step tasks, use a short plan:

```text
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]
```

## Manual Testing Checklist

- [ ] Can the app start without errors?
- [ ] Can the user enter valid data?
- [ ] Does the app reject invalid data?
- [ ] Is the data saved correctly?
- [ ] Does the table update correctly?
- [ ] Does the chart update correctly, if charts have been added?

## Common Failure Cases

- Browser location permission is denied.
- Browser geolocation is unavailable.
- Browser `localStorage` data is manually edited into invalid JSON.
- A user tries to save an observation without a selected species.
- A user tries to check a photo without uploading an image.
- A user selects a species that is not available at the selected station.

## Expected Outputs

- The app starts without a build step.
- Navigation opens separate static pages and labels Page 2 as Station.
- Station and Area Detail views show only species connected to the selected station.
- Upload requires a photo and checks it against generated references for species
  at the selected station.
- A matched photo saves a `Matched` observation and shows a tick on that species
  card for the station.
- Pages use the cartoon-adventure visual style with numbered panels and rounded
  illustrated cards.
- Selecting a site updates the Area Detail section.
- Checking in away from the sample nearby site shows a distance warning.
- A successful check-in updates the Home quick stats and can earn a first
  check-in badge.
- Saving an observation adds a row to the Records table.
- Saving an unlocked observation updates NatureDex status, record totals, area
  summaries, and group summaries.
