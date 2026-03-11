# Restaurant Tracker — Landing Page

## Overview
This is a subpage of SocialLife Diary app website.
URL: `sociallife.makerka.com/restaurant-tracker/`
App Store Link: https://apps.apple.com/rs/app/sociallife-diary/id6758588325

## What this page is about
SocialLife Diary can be used as a personal restaurant tracker — log every dinner, rate it, track who you went with and how much you spent. This page targets people searching for a restaurant diary or food outing tracker app.

## Tech Stack
- Plain HTML, CSS, JavaScript only
- No frameworks, no build tools
- Mobile-first, fully responsive

## File Structure
```
restaurant-tracker/
  index.html
  style.css
  script.js
  assets/
    screenshots/
      IMG_0095-portrait.png  ← home feed with restaurant list
      IMG_0095-left.png      ← same, tilted version
      IMG_0096-portrait.png  ← food gallery grid
      IMG_0096-left.png
      IMG_0098-portrait.png  ← stats overview with Vibes rating
      IMG_0098-left.png
      IMG_0102-portrait.png  ← people stats
      IMG_0102-left.png
      IMG_0104-portrait.png  ← money stats overview
      IMG_0104-left.png
      IMG_0105-portrait.png  ← spending charts by weekday/month
      IMG_0105-left.png
```

## Image Usage Rules
- Use `-left` (tilted) versions for hero section and wide feature sections — more dynamic feel
- Use `-portrait` (straight) versions for mobile mockup displays and side-by-side layouts
- Never stretch or crop screenshots — always preserve aspect ratio

## Design Direction
- **Style**: Warm, editorial, food-magazine aesthetic. Think Bon Appétit meets a personal diary.
- **Background**: Warm creamy whites (#FFFAF4), soft terracotta accents, warm beige tones — NOT cold whites
- **Accent colors**: Deep burgundy #7B2D3E, warm amber #E8A838, soft sage green #8FAF7E
- **Typography**: Elegant serif for headings (e.g. Playfair Display or Cormorant), clean sans-serif for body. NOT Inter/Roboto.
- **Vibe**: Like a beautiful food journal — personal, warm, a little luxurious
- **Animations**: Subtle scroll reveals, gentle floating on phone mockups, smooth hover states
- **Layout**: Mix of full-width sections and asymmetric layouts. Some sections have phone on left with text on right, some reversed.

## Page Sections

### 1. Hero
- Headline: **"Every dinner, remembered."**
- Subheadline: "Rate restaurants, track spending, see who you dine with most. Your personal food diary."
- Use `IMG_0095-left.png` (tilted phone mockup) as hero image — large, prominent
- App Store download button (link to App Store)
- Warm, rich background — maybe a subtle food texture or deep warm color

### 2. "Log every outing"
- Screenshot: `IMG_0095-portrait.png` on the RIGHT
- Text on LEFT:
  - Heading: "Log every restaurant visit"
  - Body: "Add the name, date, who you went with, how much you spent, and how you felt. Rate it from 1 to 10. Never forget a great meal again."
  - Tags shown: `date`, `dinner`, `celebration`, `friends`

### 3. "Your food memories"
- Screenshot: `IMG_0096-left.png` (tilted) — full width or large
- Heading overlaid or beside: **"A gallery of every meal"**
- Body: "Every photo from every outing in one beautiful grid. Scroll back through months of dinners, brunches, and late-night bites."

### 4. "See who you dine with"
- Screenshot: `IMG_0102-portrait.png` on LEFT
- Text on RIGHT:
  - Heading: "Who's your favorite dining partner?"
  - Body: "SocialLife Diary tracks who you go out with and how much you enjoy it. Discover your most frequent dinner companion — and your highest-rated evenings."

### 5. "Track what you spend"
- Screenshot: `IMG_0104-left.png` (tilted) + `IMG_0105-portrait.png` side by side, or staggered
- Heading: **"Know exactly what dining out costs you"**
- Body: "See your total spending, average per outing, and which days of the week you spend the most. No budgeting app needed — it's all here."
- Highlight stats from screenshot: avg/month, avg/meetup, spending by weekday chart

### 6. "Vibes & Ratings"
- Screenshot: `IMG_0098-portrait.png` on RIGHT
- Text on LEFT:
  - Heading: "Rate the vibe, not just the food"
  - Body: "Add a mood emoji and a rating to every outing. Over time, see your average vibe score — and which restaurants (and people) bring out your best evenings."

### 7. Download CTA
- Big bold section
- Heading: **"Start your restaurant diary today"**
- Subheading: "Free to download. Private. No account needed."
- Large App Store button
- Background: warm, rich — could repeat the hero color/texture

## Navigation
- Simple top nav with link back to main site: `← SocialLife Diary`
- No other nav needed

## SEO
- Page title: "Restaurant Tracker App — Log, Rate & Track Every Dining Out | SocialLife Diary"
- Meta description: "Track every restaurant visit with photos, ratings, spending and who you went with. SocialLife Diary is your personal dining diary for iPhone."
- H1: "Every dinner, remembered."

## Important Notes
- App Store button must always link to: https://apps.apple.com/rs/app/sociallife-diary/id6758588325
- Keep code clean and commented
- All screenshots must have `alt` text describing what they show
- Link in nav back to `../index.html` (main site)
