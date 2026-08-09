# AssembledHOI ECCV-style Project Page

A self-contained GitHub Pages project page built for **AssembledHOI**. It uses only local HTML/CSS/JS/assets, so there are no CDN dependencies.

## Included links

- **Paper:** `static/pdfs/AssembledHOI_ECCV26.pdf`
- **Supplementary:** `static/pdfs/AssembledHOI_Supply_ECCV26.pdf`
- **Code:** `https://github.com/donghongyong/AssembledHOI`

If the final code repository URL is different, search `index.html` for `https://github.com/donghongyong/AssembledHOI` and replace it in the three GitHub links.

## Recommended deployment

If your current project page is served from the `AssembledHOI` repository:

1. Back up the current project page.
2. Copy the contents of this folder into the GitHub Pages branch/folder used by your repository (commonly repository root on `main`, or a `gh-pages` branch).
3. Commit and push.
4. In **Settings → Pages**, make sure the correct branch/folder is selected.
5. Open `https://donghongyong.github.io/AssembledHOI/` and hard-refresh once.

## Things you may want to replace later

- Add MP4/GIF results if you have higher-quality turntable renders. The current page intentionally uses figures extracted from the final paper, so it works immediately without extra media.
- Replace the BibTeX block once official ECCV workshop proceedings metadata is published.
- If you prefer not to publish the PDFs inside the repository, remove `static/pdfs/` and change the Paper/Supplementary buttons to the URLs where you choose to host them.

## Design notes

The page intentionally follows a clean academic/ECCV project-page style rather than copying the official ECCV website: white space, paper-first typography, restrained blue-violet accents, results-first visuals, responsive layout, lightweight scroll reveals, image lightboxes, and no third-party JS framework.
