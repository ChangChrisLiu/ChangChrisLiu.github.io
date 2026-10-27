# Website content maintenance

Updated October 27, 2026. This file is excluded from the public Jekyll build.

## Sources

- Biography, education, employment, internship availability, mentoring, and technical contributions: local `Documents/CV/CV_Academic.tex` and `Resume.tex`, read October 27, 2026. `assets/pdf/Chang_Liu_CV.pdf` is a copy of `CV_Academic.pdf`. The pre-existing `assets/pdf/CV.pdf` was preserved.
- PACER title, authors, method, endpoint, and benchmark: https://arxiv.org/abs/2610.19248 and https://pacer-corl.github.io/ . Code: https://github.com/ChangChrisLiu/PACER .
- SELF-VLA public description: https://arxiv.org/abs/2603.11080 . Project: https://self-vla.github.io/ . Revised manuscript results were not added to the HTML research summaries. The downloadable current academic CV retains its explicitly qualified under-review results.
- RAISE system description: https://arxiv.org/abs/2509.23048 . Journal DOI: https://doi.org/10.1016/j.resconrec.2025.108609 . Individual contributions are drawn from the current CV.
- Teleoperation platform: https://github.com/ChangChrisLiu/DataCollection .
- Hugging Face profile, provided by the owner: https://huggingface.co/ChangChrisLiu .
- Other publication metadata is preserved from the existing bibliography. The 2027 RCIM year is its journal volume year, not a claim that the current date is 2027.

## Asset provenance

- `assets/img/research/pacer.webp`: unchanged image from https://pacer-corl.github.io/assets/img/fig1_A1.webp .
- `assets/img/research/raise.png`: unchanged Figure 1 from https://arxiv.org/html/2509.23048v1/Figure_1.png .
- Portrait and SELF-VLA figure: existing repository assets, preserved.

## Editing

- Homepage biography: `_pages/about.md`; page structure: `_layouts/about.liquid`.
- Selected work is shared between home and research through `_data/research.yml`.
- Publications: `_bibliography/papers.bib`; online CV: `_data/cv.yml`.
- Styling: `_sass/_personal.scss`, extending the existing al-folio teal identity.
- Add dated news in `_news/`. No citation metrics are hard-coded.
- Template examples and local private documents are excluded in `_config.yml`, not deleted.

## Site structure and release checks

- The homepage layout also owns its hero statement, research themes, and Summer 2027 availability notice. Update the notice when availability changes.
- Research narrative: `_pages/research.md`; experience narrative: `_pages/experience.md`; professional contact links: `_data/socials.yml`.
- About is rendered explicitly in `_includes/header.liquid`. Other navigation entries use page front matter `nav` and `nav_order`: About, Research, Publications, Experience, CV.
- `_includes/research_projects.liquid` renders the shared project data on Home, Research, and the retained Projects bridge page. Preserved image files are `assets/img/prof_pic.jpg` and `assets/img/publication_preview/selfvla.png`. ImageMagick generates responsive WebP variants during the build; originals remain as fallbacks.
- The online CV YAML and downloadable PDF are separate copies. Updating the local academic CV does not automatically update either website copy.
- See `INSTALL.md` and `.github/workflows/deploy.yml` for setup. Deployment and the post-deploy link check use Ubuntu 24.04, Ruby 3.3.5, Python 3.13, and ImageMagick, run `JEKYLL_ENV=production bundle exec jekyll build`, then PurgeCSS. The runner image is pinned because Ruby 3.3.5 is unavailable on Ubuntu 26.04. Local verification used the installed Ruby 3.4.6 runtime. Sass already compresses styles, so the redundant Jekyll CSS minification pass is disabled.
- Source edits and a successful local production build are distinct from publication. Pushing to `main` or `master` triggers deployment; confirm the GitHub Actions result and the live pages before reporting a release as published.
