# Companies / Client logos — kaise add karein

## Quick steps

1. Open **`src/data/companies.json`**
2. Copy an existing block and paste at the end of the `"companies"` array
3. Change `id`, `name`, `industry`
4. Save — site refresh par nayi company dikhe gi

## Example — sirf naam (logo ke bina)

```json
{
  "id": "acme-corp",
  "name": "Acme Corporation",
  "industry": "Technology",
  "logo": "",
  "website": "",
  "enabled": true
}
```

## Example — PNG/SVG logo ke sath

1. Image save karein: **`public/logos/acme.png`** (white/light logo dark background ke liye best)
2. JSON mein:

```json
{
  "id": "acme-corp",
  "name": "Acme Corporation",
  "industry": "Technology",
  "logo": "/logos/acme.png",
  "website": "https://acme.com",
  "enabled": true
}
```

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique slug, e.g. `my-company` |
| `name` | Yes | Website par dikhe ga naam |
| `industry` | Yes | Chota subtitle |
| `logo` | No | `/logos/file.png` ya khali `""` |
| `website` | No | Click par open (khali chhor sakte hain) |
| `enabled` | Yes | `false` = hide, delete ki zaroorat nahi |

## Company hataana

- Temporary: `"enabled": false`
- Permanent: poora object array se delete karein

## Logo folder

Images yahan rakhein: **`public/logos/`**

Recommended: PNG/SVG, transparent background, ~200–400px width.
