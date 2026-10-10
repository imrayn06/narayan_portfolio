TASK: Add an "Experience Certificates" section to the /resume page of my portfolio (https://narayan-portfolio-three.vercel.app/resume). First inspect the repo to learn the framework, styling approach and the existing design language of the Resume page, then match it exactly.

ASSETS (already cropped + enhanced, do NOT reprocess): I'm adding these to /public/certs/
- full/<name>.jpg (full size, for the lightbox and download) + full/<name>.png (lossless copy)
- thumbs/<name>-thumb.jpg (400px wide, for the cards)
Names: mind-and-matter-internship-certificate, q3-infotech-experience-letter, jrd-digital-marketing-certificate, wipro-wase-testimonial
Intrinsic sizes (w x h): mind-and-matter 1098x1580, q3 1216x1564, jrd 1140x1600, wipro 1238x1592. Thumbs are 400px wide with the same aspect ratio.

BUILD THE SECTION (reverse-chronological, newest first)
1. Mind & Matter Marketing Solutions Pvt Ltd — Digital Marketing Intern — 04 Feb 2026 – 18 Aug 2026 — Internship Completion Certificate — Kolkata
2. Q3 Infotech Pvt. Ltd. — Jr. Software Engineer — 02 Apr 2025 – 13 Oct 2025 — Experience Letter — Gurgaon
3. JRD (jrd.cz) — Digital Marketing Intern — 01 Dec 2024 – 31 Jan 2025 — Certificate of Completion
4. Wipro Limited (Wipro Academy of Software Excellence) — Student, Computer Applications — 27 Sep 2021 – 08 Mar 2024 — Testimonial — Bengaluru

- Each card: thumbnail, company, role, date range, document type, "View certificate" button.
- Click opens an accessible lightbox/modal with the full image, zoom, Download button (JPG), close on Esc/backdrop click, focus trap, arrow keys to move between certificates.
- Responsive grid (1 col mobile, 2 col tablet+), lazy-loaded images with width/height set to avoid layout shift, alt text like "Wipro WASE testimonial letter".
- Match the site's existing theme (dark/light) and entrance animations. Add a nav anchor if the page has one.

VERIFY: run build + lint, fix errors, check mobile and desktop widths, then summarize files changed.
