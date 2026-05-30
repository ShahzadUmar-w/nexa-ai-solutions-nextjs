# Site content — yahan se manage karein

| File | Website par kahan dikhta hai |
|------|------------------------------|
| `companies.json` | Client logos grid (Work, Enterprise) |
| `clientProjects.ts` | Home ticker — logos in `public/companilogo/` |
| `fiverrReviews.json` | Reviews + Home testimonials |
| `portfolioProjects.ts` | Portfolio grid + `/work/[project]` pages |
| `blogPosts.ts` | Blog (future `/blog` pages) |
| `integrations.ts` | Integration partners data |

## Portfolio projects

Edit **`portfolioProjects.ts`** — har project ke liye:

- `title`, `category`, `summary`, `outcome`, `stack`
- `images`: paths from `public/` e.g. `/Outlook/Attachment/photo.png`

Screenshots rakhein: **`public/Outlook/`**, **`public/word/`**, **`public/excel/`**, etc.

## Reviews

Edit **`fiverrReviews.json`** — client reviews (Fiverr / Upwork).

Optional project screenshot: `"imageUrl": "/feedbacks/your-image.png"`  
Ya portfolio folder path: `"imageUrl": "/Outlook/..."`

Set `"enabled": false` style filtering via `"status": "canceled"` (site shows only `completed` with rating ≥ 4).

## Companies

See **`HOW-TO-ADD-COMPANIES.md`**.
