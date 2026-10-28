# Website content maintenance

Updated October 28, 2026. This file is excluded from the public Jekyll build.

## Sources

- Biography, education, employment, internship availability, mentoring, and technical contributions: local `Documents/CV/CV_Academic.tex` and `Resume.tex`, rechecked October 28, 2026. `assets/pdf/Chang_Liu_CV.pdf` is a copy of `CV_Academic.pdf`. The pre-existing `assets/pdf/CV.pdf` was preserved.
- The owner confirmed on October 28, 2026 that their HeyGears work also included on-site Field Application Engineer responsibilities. This is reflected in the homepage, Experience page, and online CV. The Summer 2027 internship paragraph describes areas of interest and contributions supported by the current research and engineering experience; it does not add location, visa, or start-date commitments.
- PACER title, authors, method, endpoint, and benchmark: https://arxiv.org/abs/2610.19248 and https://pacer-corl.github.io/ . Code: https://github.com/ChangChrisLiu/PACER .
- SELF-VLA public description: https://arxiv.org/abs/2603.11080 . Project: https://self-vla.github.io/ . Revised manuscript results were not added to the HTML research summaries. The downloadable current academic CV retains its explicitly qualified under-review results.
- RAISE system description: https://arxiv.org/abs/2509.23048 . Journal DOI: https://doi.org/10.1016/j.resconrec.2025.108609 . Code: https://github.com/ChangChrisLiu/REMADE . The repository README, checked October 28, 2026, identifies REMADE as the repository for the RAISE sorting work; it does not implement the complete cutting and battery-removal system. Individual contributions are drawn from the current CV.
- Teleoperation platform: https://github.com/ChangChrisLiu/DataCollection .
- Hugging Face profile, provided by the owner: https://huggingface.co/ChangChrisLiu .
- Other publication metadata is preserved from the existing bibliography. The 2027 RCIM year is its journal volume year, not a claim that the current date is 2027.

## Asset provenance

- `assets/img/research/pacer.webp`: unchanged image from https://pacer-corl.github.io/assets/img/fig1_A1.webp .
- `assets/img/research/raise.png`: unchanged Figure 1 from https://arxiv.org/html/2509.23048v1/Figure_1.png .
- Portrait and SELF-VLA figure: existing repository assets, preserved.
- `assets/video/pacer-demo.mp4` and `assets/img/research/pacer-demo.jpg`: unchanged `assets/video/hero_loop.mp4` and `assets/img/hero_poster.jpg` from https://pacer-corl.github.io/ . The project's own metadata identifies CPU fan, RAM and GPU trials, learned approach followed by a fixed removal skill, and 3x playback. These assets are preserved but are no longer embedded on the homepage.

- `assets/img/research/pacer-overview.png`: unchanged Figure 1 from https://arxiv.org/html/2610.19248v1/Figure1.png .
- `assets/img/research/llm-remanufacturing.png`: unchanged ReManGPT architecture figure from https://arxiv.org/html/2608.04854v1/Figure_6.png .
- `assets/img/research/component-segmentation.png`: unchanged dataset figure from https://arxiv.org/html/2603.27441v1/f2.png .
- `assets/img/research/neurraft.png`: unchanged framework figure from https://arxiv.org/html/2608.24026v1/framework-crop.png .
- `assets/img/research/vision-torque.png`: unchanged method overview from https://arxiv.org/html/2604.01414v1/Overview_of_the_Proposed_Method.png .
- `assets/img/research/vla-desktop.png`: unchanged opening figure from https://arxiv.org/html/2512.04446v1/VLA-firstfigure-crop.png .

## Editing

- Homepage biography: `_pages/about.md`; page structure: `_layouts/about.liquid`.
- Homepage papers: set `homepage={true}` in `_bibliography/papers.bib`; `_layouts/bib_home.liquid` renders titles, authors, venues, and links directly from that bibliography. `_data/home_papers.yml` supplies only figures, alt text, and short summaries. Research and Projects use `_data/research.yml`.
- Publications: `_bibliography/papers.bib`; online CV: `_data/cv.yml`.
- Shared styling: `_sass/_personal.scss`. Homepage styling: `_sass/_home.scss`, using the existing Roboto typeface and teal palette, a 32px name, compact spacing, and aligned figure-and-text publication rows.
- Add dated news in `_news/`. No citation metrics are hard-coded.
- Template examples and local private documents are excluded in `_config.yml`, not deleted.

## Site structure and release checks

- The homepage layout contains the biography, professional links, eight selected papers, and Summer 2027 availability notice. Paper resources use compact outlined links; News is removed from the homepage. It has no video or entry animation. Update the notice when availability changes. The factual introduction in `_pages/about.md` covers robot-learning methods, teleoperation and data tools, the RAISE sorting station, earlier robotics research, industry experience, and education.
- Research narrative: `_pages/research.md`; experience narrative: `_pages/experience.md`; professional contact links: `_data/socials.yml`.
- About is rendered explicitly in `_includes/header.liquid`. Other navigation entries use page front matter `nav` and `nav_order`: About, Research, Publications, Experience, CV.
- `_includes/research_projects.liquid` renders shared project data on Research and the retained Projects bridge page. The homepage uses bibliography-driven publication rows in `_layouts/bib_home.liquid`. Preserved image files are `assets/img/prof_pic.jpg` and `assets/img/publication_preview/selfvla.png`. ImageMagick generates responsive WebP variants during the build; originals remain as fallbacks.
- The homepage follows the owner's requested compact academic layout, superseding the earlier editorial design. The Taste Skill is used for alignment and polish, not its oversized type, spacing, or motion defaults. Reference pages: https://jonbarron.info/ and https://shurans.github.io/ . Their assets, code and copy were not reused. Local direction notes and screenshots are in ignored, build-excluded `.taste-skill/`. The homepage is static and all paper links work without JavaScript.
- The online CV YAML and downloadable PDF are separate copies. Updating the local academic CV does not automatically update either website copy.
- See `INSTALL.md` and `.github/workflows/deploy.yml` for setup. Deployment and the post-deploy link check use Ubuntu 24.04, Ruby 3.3.5, Python 3.13, and ImageMagick, run `JEKYLL_ENV=production bundle exec jekyll build`, then PurgeCSS. The runner image is pinned because Ruby 3.3.5 is unavailable on Ubuntu 26.04. Local verification used the installed Ruby 3.4.6 runtime. Sass already compresses styles, so the redundant Jekyll CSS minification pass is disabled.
- Source edits and a successful local production build are distinct from publication. Pushing to `main` or `master` triggers deployment; confirm the GitHub Actions result and the live pages before reporting a release as published.
