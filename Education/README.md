# Education Website Templates Collection

A collection of **5 responsive education website templates** built with HTML5, CSS3 and Vanilla JavaScript.

## Templates

1. **School Website** (`templates/01-school/`) — Oakwood Academy
2. **College Website** (`templates/02-college/`) — Crestview Institute of Technology
3. **University Website** (`templates/03-university/`) — St. Jude International University
4. **Coaching Institute** (`templates/04-coaching-institute/`) — Apex Academy Test Prep
5. **Online Education** (`templates/05-online-education/`) — SkillVerse EdTech

## Fixed functionality

- Corrected all template CSS and JavaScript relative paths.
- Added shared responsive template styling so the five pages no longer load only the Showcase Hub stylesheet.
- Restored mobile navigation interaction.
- Added FAQ accordion behavior for all five templates.
- Restored college program filtering.
- Restored university research tabs and dynamic research content.
- Restored school animated statistics and principal message modal.
- Restored online-course category filtering, live search, no-results state and preview modal.
- Added front-end success/validation handling for the admission/application/trial forms.
- Added a live coaching countdown.
- Fixed broken internal navigation anchors.
- Kept the existing page sections, content and UI structure intact.
- Verified all local HTML/CSS/JS relative references resolve to files present in the ZIP.
- Verified all internal `#anchor` links resolve to existing IDs.
- Verified all HTML documents contain valid `html`, `head` and `body` elements.
- Verified the shared JavaScript passes a syntax check.

## Directory Structure

```text
Education-Website-Templates/
├── index.html
├── css/
│   ├── style.css                  # Showcase Hub styles
│   └── template-style.css         # Shared styles for the 5 templates
├── js/
│   └── script.js                  # Showcase + template interactions
├── README.md
└── templates/
    ├── 01-school/index.html
    ├── 02-college/index.html
    ├── 03-university/index.html
    ├── 04-coaching-institute/index.html
    └── 05-online-education/index.html
```

## How to Run

1. Extract the ZIP completely.
2. Open `Education-Website-Templates/index.html`.
3. Use the launch buttons to open any template.
4. The templates can be opened directly from the extracted folder or served through VS Code Live Server.

The templates use Google Fonts and Unsplash images from external URLs, so those external assets require an internet connection. The HTML, CSS and JavaScript themselves do not require npm or a build process.
