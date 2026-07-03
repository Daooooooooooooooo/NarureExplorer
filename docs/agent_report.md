# Agent Report

## Read Before Coding

- `AGENTS.md`
- `README.md`
- `docs/function_design.md`
- `docs/architecture.md`
- `docs/testing.md`
- `docs/domain.md`
- `docs/style.md`
- `check_agent_work.md`

## Assumptions

- `AGENT.md` means the existing `AGENTS.md` file.
- The first MVP should stay beginner-friendly and runnable without installing
  dependencies.
- Browser `localStorage` is acceptable temporary storage for the first records
  table.
- Location, check-in boundaries, and photo recognition are simulated until a
  backend and verified data source are added.

## Uncertainties

- The long-term architecture mentions Next.js and Supabase, but the repository
  does not yet include package files or Supabase setup.
- Species data is sample data and should be reviewed by a domain expert before
  it is treated as scientific content.
- Real geofencing boundaries for the Songkhla sites still need confirmation.

## Tradeoffs

- A static HTML, CSS, and JavaScript app is less production-ready than the
  planned Next.js architecture, but it is smaller, clearer, and easier for
  beginners to run.
- Simulated verification keeps the MVP usable now, but it should be replaced
  before the app makes real identification claims.
- Local browser records are simple, but they do not sync across devices.

## Implementation Direction

The current implementation focuses on the documented MVP behavior: choose a
site, view area details, simulate check-in, browse NatureDex cards, submit an
observation, save it locally, and show the saved record in tables and summaries.

## Current Pass

This pass keeps the static MVP approach and adds the next small documented UI
gaps: a simple navigation bar, home quick stats, a nearest-site card, a today's
mission card, and locally saved successful check-ins.

## Page Split Pass

The app now uses separate static HTML pages for Home, Map, Area Detail,
NatureDex, inline species upload, Records, and Species Detail. Shared state remains in
browser `localStorage`, and shared rendering logic remains in `src/app.js`.

## Reference Style Pass

The visual style now follows the provided reference direction: a bright
cartoon-adventure header, large playful title treatment, rounded cream panels,
green numbered step badges, phone-like dark content cards, colorful species
cards, and a bottom navigation bar on larger screens. The implementation uses
CSS and simple HTML shapes instead of adding external image libraries or paid
asset services.

## Git Preparation Pass

The folder has been prepared for the GitHub remote
`git@github.com:Daooooooooooooooo/NarureExplorer.git` with a `.gitignore` and
`docs/git_setup.md`. Git is not currently available on this machine's PATH, so
repository initialization, staging, committing, and pushing still require Git to
be installed or run from another shell where Git is available.

## Species Database Pass

Page 2 has been renamed from Map to Station. The species list now comes from the
`species.csv` seed data and is embedded in `src/app.js` with English names, Thai
names, scientific names, station IDs, rarity, roles, facts, source URLs, and
cartoon-art categories. Area Detail and NatureDex now show species by selected
station instead of showing every species at once.

## Generated Photo Matching Pass

The species card upload flow now requires a user photo, compares the suspected species
against generated reference profiles for the selected station, stores successful
matches as `Matched` observations, and shows a tick symbol on matched species
cards at that station. This remains a local MVP simulation, not a trained image
recognition model.
