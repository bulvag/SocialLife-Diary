# SocialLife Diary — Website

## Project
Landing page for **SocialLife Diary**, an iOS app for tracking your social life.
Hosted on GitHub Pages. Plain HTML + CSS + JS only. No frameworks, no build tools.

## App Store Link
https://apps.apple.com/rs/app/sociallife-diary/id6758588325

## App Description
SocialLife Diary is a personal social life tracker. You log meetups, the people you spend time with, places you visit, how you felt, and how much you spent — then the app turns it all into a visual archive and stats you can actually learn from.

Key features:
- Log meetups with date, place, photo, mood, notes, and expenses
- Track which people you see most (and when you last saw them)
- Map view of all your social places
- Stats: meetup frequency, top people, spending, mood over time, social streaks
- Photo gallery of memories
- Private — everything stays on your device

Tagline ideas: "Your social life, made visible." / "Remember everything. Miss nothing." / "Track who you see. See who matters."

## Design Direction
- **Style**: Pinterest-meets-editorial. Colorful, warm, joyful. NOT a dark app website.
- **Vibe**: Like a beautiful scrapbook / lifestyle magazine. Playful but polished.
- **Background**: Light, warm, creamy whites or soft pastels — screenshotovi aplikacije (dark) iskaču unutar toga kao kontrast
- **Accent colors** (from the app): magenta #CC44FF, hot pink #FF44AA, deep purple #3D1A5E
- **Typography**: Distinctive display font for headings, clean readable body font. NOT Inter/Roboto/Arial.
- **Animations**: Scroll reveals, subtle floating effects on phone mockups, hover states
- **Layout**: Asymmetric, grid-breaking, generous use of whitespace and color blocks

## Page Structure (single page)
1. **Hero** — App name, tagline, App Store button, one big phone mockup
2. **What it does** — 3-4 feature highlights with screenshots (meetups, people, stats, gallery)
3. **Stories / Use cases** — "Night walk with friends", "Track your besties", "See your year" — short emotional copy with visuals
4. **Screenshots showcase** — masonry/pinterest-style grid of app screenshots
5. **Stats preview** — show off the stats feature visually
6. **Download CTA** — big, bold, App Store button

## Screenshots Available
Files: 001.png through 010.png (in /assets/screenshots/ folder)
- 001: Home feed (list of meetups)
- 002: New meetup form
- 003: Meetup detail (Alex's b-day party)
- 004: Photo gallery grid
- 005: Stats overview with calendar
- 006: Stats detail (overview, social streak)
- 007: People stats
- 008: Places map
- 009: Tags stats
- 010: Settings

## File Structure
```
index.html
style.css
script.js
assets/
  screenshots/
    001.png ... 010.png
```

## Rules for Claude Code
- Plain HTML, CSS, JS only — no React, no npm, no build step
- Mobile-first, fully responsive
- All screenshots go in assets/screenshots/
- App Store button must link to: https://apps.apple.com/rs/app/sociallife-diary/id6758588325
- Use Google Fonts (loaded via link tag) for distinctive typography
- Avoid generic design — this should feel like a real indie app landing page, not a template
- Keep code clean and commented
- DO NOT use purple gradients on white — that's too generic. Go for something unexpected and warm.
