# Mahmoud Yahia — Portfolio

Personal portfolio for Mahmoud Yahia, Senior Machine Learning Engineer, based in Cairo, Egypt.

## Features
- Responsive introduction, biography, education, and work experience.
- Eight AI project case studies with category filters and expandable details.
- Animated core expertise cards beneath the profile photo.
- Cloud and AI certification cards.
- Latest CV with document preview, zoom controls, readable mobile text, and PDF download.
- Brain Arcade: working memory, number-pattern, and reaction-time games with local personal bests.
- Keyboard controls and reduced-motion support.

## Local preview
Open `index.html` directly, or serve the folder:

```sh
python -m http.server 8765
```

Visit http://localhost:8765. The games are at `/arcade.html`.

## Edit the site
- `index.html`: profile, education, experience, credentials, résumé, and contact details.
- `js/portfolio.js`: project descriptions, filtering, document viewer, and animation.
- `css/portfolio.css`: portfolio design and responsive layouts.
- `arcade.html`, `js/arcade.js`, `css/arcade.css`: games and their design.
- `MahYahia.pdf`: latest CV.
- `images/mahmoud-portrait.jpeg`: profile photo.
- `images/cv/latest-page-1.webp`: rendered CV preview.

No build step or external JavaScript packages are required. Project graphics are illustrative; case studies describe the owner's work. Arcade games run in the browser, with personal bests saved locally.

Validated in Microsoft Edge: project interactions, CV preview and download, game scoring and timing, keyboard controls, reduced motion, and responsive layouts at phone, tablet, and desktop widths. Local QA artifacts are excluded from Git.
