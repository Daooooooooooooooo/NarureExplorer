# Style Guide

## Purpose

Keep code and interface style consistent.

## Coding Style

Design direction:
- Inspired by creature-collection adventure games, but original and nature-focused
- Cute, friendly, playful, and suitable for children, students, tourists, and families
- Tropical Songkhla nature theme
- Cartoon forest, island, coral reef, mangrove, and national park feeling
- Rounded cards, soft shadows, colorful icons, badge-like buttons

Visual style:
- Bright green, ocean blue, coral orange, warm cream, sunny yellow
- Use rounded-2xl or rounded-3xl cards
- Use large friendly buttons
- Use soft gradient backgrounds
- Use playful icon cards
- Use cartoon species cards
- Avoid serious scientific dashboard style
- Avoid plain black/white admin UI

Every changed line should trace directly to the user's request. If a solution becomes much longer than the problem requires, simplify it before continuing.

## UI Style

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
- Add an upload control under each species card
- Keep the control compact and friendly
- Use a clear photo check button
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

Please create or update:
- global styles
- layout component
- reusable Card component
- SpeciesCard component
- Badge component
- ProgressCard component
- cartoon-style placeholder images using gradients or emoji until real images are added
