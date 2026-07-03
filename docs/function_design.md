# Function Design

## Purpose

- Create a web app MVP called Nature Explorer Songkhla.

## User Goals

- A Pokemon-style nature exploration game where users visit real places in Songkhla, check in, take photos of species, and unlock them in a NatureDex.

## Main Features

- Creat an Pokemon style narue exploartion game.
- Ask user for location permission.
- Show nearest exploration site.
- Display map of exploration sites:
   - Ko Nu
   - Ko Meaw
   - Ko Kham
   - Khao Nam Khang National Park
   - Ton Nga Chang Wildlife Sanctuary
   - Songkhla Lake wetland area
   - Songkhla mangrove area
- Allow check-in only when user is inside the site boundary or close to the site point.
- Show total species available in that area.
- Create NatureDex page with species cards.
- Each species card should include:
   - cartoon image placeholder
   - real photo placeholder
   - common name
   - scientific name
   - group
   - area
   - rarity
   - ecosystem role
   - fun fact
   - locked/unlocked status
- Add photo upload under each species card.
- For the first MVP, photo comparison can be simulated:
   - user uploads a photo from a species card
   - the card supplies the suspected species
   - system marks it as “pending verification” or “unlocked”
- Add records page:
   - total species found
   - species found in current area
   - species found by group
   - badges
   

## Pages needed
1. Home Page
- Large cartoon-style hero section
- Title: Nature Explorer Songkhla
- Subtitle: Explore. Discover. Protect.
- Show nearest exploration site card
- Show today’s mission card
- Show quick stats:
  - species found
  - check-ins
  - badges
  - areas explored

2. Map Page
- Use a colorful illustrated-map feeling
- Site markers should look like adventure pins
- Each site popup should show:
  - site name
  - distance
  - total species
  - “View Area” button

3. NatureDex Page
- Species cards should look like collectible game cards
- Locked species should appear as silhouettes
- Unlocked species should show cartoon image placeholder
- Add rarity stars
- Add category filter chips:
  - All
  - Fish
  - Coral
  - Plant
  - Bird
  - Other

4. Species Detail Page
- Large cartoon species image at top
- Card with:
  - common name
  - scientific name
  - group
  - area
  - habitat
  - ecosystem role
  - rarity
  - fun fact
- Big button/link back to NatureDex

5. Species Card Upload
- Put an upload control under each species card
- The selected card supplies the station and suspected species
- Submit Observation button checks the uploaded photo
- Use friendly helper text

6. Records Page
- Progress cards with icons
- Circular progress style if possible
- Recent badges section
- Species found by group
- Area progress cards

Navigation:
- Use bottom navigation on mobile
- Use sidebar navigation on desktop
- Icons should feel playful and adventure-themed

CSS/Tailwind style:
- Use gradients, rounded corners, shadows, and soft borders
- Use consistent spacing
- Use mobile-first responsive design
- Use hover animations:
  - cards lift slightly
  - buttons scale slightly
  - badges glow softly


## Database tables
- users
- exploration_sites
- species
- user_observations
- user_species_records
- badges
- user_badges


## User Interactions

1. First-time user opens the app
- User sees welcome screen: “Nature Explorer Songkhla”
- User clicks “Start Exploring”
- App asks for location permission
- If user allows location, app finds nearest exploration site
- If user denies location, app shows manual site selection

2. User chooses exploration site
- App shows nearby sites on the map
- User taps one site marker
- App opens Area Detail page
- User sees:
  - site name
  - distance from user
  - total species available
  - species groups available
  - check-in button

3. User checks in
- User clicks “Check In”
- App checks if user is inside allowed area
- If inside, check-in succeeds
- If outside, app says: “You need to be closer to this site to check in.”

4. User explores species list
- User opens NatureDex
- User filters by area or species group
- Locked species are shown as silhouettes
- Unlocked species show cartoon image, real photo, name, and facts

5. User takes or uploads photo
- User uploads a photo from the species card
- The app uses that card's station and suspected species
- User submits observation

6. Photo verification
- For MVP, verification is simulated
- After submitting, status becomes:
  - Pending verification, or
  - Unlocked
- If unlocked, species card becomes highlighted in NatureDex

7. User views records
- User opens Records page
- User sees:
  - total species found
  - species found by area
  - species found by group
  - recent discoveries
  - badges earned

8. User earns badge
- When user reaches a goal, app unlocks badge
- Example:
  - Find 5 coral species = Coral Explorer Badge
  - Find 10 bird species = Bird Watcher Badge
  - Check in at 3 sites = Songkhla Explorer Badge

9. User returns later
- App remembers user progress
- User can continue exploring from previous records
- New discoveries are added to the same NatureDex

## Expected Behaviour

- The app opens as a static browser page.
- The user can choose one of the Songkhla exploration sites.
- The area detail panel updates when a site is selected.
- The check-in button succeeds for the sample nearby site and shows a "closer to this site" message for other sample sites.
- The NatureDex shows species cards with cartoon and real photo placeholders.
- Locked species are visually obscured until the user saves an unlocked observation.
- Each species card has an upload form for simulated verification.
- Saved observations appear in the Records table.
- Unlocked observations update the total species found and badge display.
- Records remain available in the same browser through `localStorage`.

## Edge Cases

- If location permission is denied, the app asks the user to choose a site manually.
- If the browser does not support geolocation, the app asks the user to choose a site manually.
- If no suspected species is selected, the app rejects the observation.
- If saved browser data cannot be parsed, the app starts with an empty record list.
- If an area has no species options, the app falls back to the full species list.




The app should save the record and show it in a table.
