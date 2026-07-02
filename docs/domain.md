# Domain Notes

## Purpose

Capture domain-related knowledge that the AI may not know. This file can describe scientific assumptions, game rules, business rules, data rules, or any other project-specific domain knowledge.


## Example: Water Quality Domain Notes

- pH is usually between 0 and 14.
- Freshwater pH is often around 6.5 to 8.5, but this varies by context.
- Turbidity should not be negative.
- Temperature should be recorded in degrees Celsius.
- The app should not make scientific claims without user confirmation.

## Variables and Units

- Distances are shown in kilometres.
- Species counts are whole numbers.
- Observation dates are stored as browser-formatted date strings.

## Reasonable Value Ranges

- Distance can be `0` or higher.
- Species count should not be negative.
- Rarity should use simple beginner-friendly labels such as `Common`,
  `Uncommon`, or `Rare`.

## Missing Value Rules

- If location is missing or denied, the user should choose a site manually.
- If a user observation has no suspected species, it should not be saved.
- If saved browser records cannot be read, the app should start with an empty
  records list.

## Scientific Cautions

- The MVP uses sample species data for learning and demonstration.
- Photo verification is simulated and should not be treated as a scientific
  identification result.
- The app should avoid making scientific claims without expert confirmation.
