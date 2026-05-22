# Navjeevan Website — Image Prompts

The site is already working with the 4 images you provided (`doctor.png`, `doc1.png`, `doc2.png`, `doc_Landscape.png`).

To take it from "great" to "stunning", here are the optional images you can generate and drop into `/website/assets/`. **Use the same model that produced your existing creatives** (the brand consistency across them is gold — keep it).

---

## Style Guide for Every Prompt

Always include these style anchors so every new image matches your existing brand:

```
soft natural light, warm sage-green and cream tones, minimal aesthetic,
editorial wellness magazine style, shallow depth of field,
high-end clinical-but-cozy mood, premium feel, lots of negative space
```

---

## Image 1 — Clinic Interior (Hero alt + About + Contact map fallback)
**Filename:** `clinic-interior.png` (use 16:9 or 4:5)

**Prompt:**
> Interior of a modern boutique homoeopathy and nutrition clinic in Mumbai. Soft natural light through linen curtains, warm cream walls, sage-green velvet armchair, a wooden consultation desk with a small potted plant, framed botanical prints on the wall, a wooden shelf with homeopathic glass vials neatly arranged, a small basket of fresh fruit on a side table. Calm, minimal, premium wellness aesthetic. Editorial photography, shallow depth of field, magazine style. No people in frame.

---

## Image 2 — Homeopathy Remedy Close-up (Services page)
**Filename:** `remedy-closeup.png` (4:5)

**Prompt:**
> Close-up still life of homeopathic remedy bottles — small amber and clear glass vials with cork stoppers — arranged on a cream linen surface with soft natural light from the side. A single dried lavender sprig beside them. Subtle blur on the background, sharp focus on the front vials. Warm editorial wellness photography, minimal, calm, premium pharmacy aesthetic. Sage and cream tones.

---

## Image 3 — Healthy Indian Plate (Nutrition section)
**Filename:** `indian-plate.png` (1:1 or 4:5)

**Prompt:**
> Overhead shot of a beautiful, balanced Indian meal on a cream ceramic plate: small portion of brown rice, dal in a small bowl, fresh sabzi (palak or bhindi), a side of cucumber-tomato salad, a piece of multigrain roti, a tiny katori of curd. On a linen tablecloth with a small sprig of fresh coriander and a wooden spoon beside it. Natural daylight, warm tones, food magazine styling, minimal aesthetic, no clutter.

---

## Image 4 — Hands Holding Fresh Greens (About / Philosophy section)
**Filename:** `hands-greens.png` (4:5)

**Prompt:**
> Close-up of a woman's hands gently holding a small bunch of fresh green leafy vegetables — spinach, methi, fresh coriander — over a wooden cutting board. Soft morning light, warm cream and sage tones, gentle blur on the background, magazine-style food photography. Her hands are clean, no rings, the focus is on the freshness of the greens. Calm and grounded mood.

---

## Image 5 — Consultation Moment (Services / About)
**Filename:** `consultation.png` (16:9 or 5:4)

**Prompt:**
> A warm consultation moment in a boutique wellness clinic — a young Indian woman doctor (white coat, stethoscope, hair tied back, kind smile) sitting across a wooden table from a female patient (back to camera, slightly out of focus). On the table: an open notebook, a glass of water with lemon, a small plant, a homeopathy vial. Soft window light from the left, sage and cream colour palette, minimal premium aesthetic, editorial photography style.

---

## Image 6 — Mother & Child (Kids' Immunity feature)
**Filename:** `mother-child.png` (4:5)

**Prompt:**
> A young Indian mother gently feeding a healthy meal to her smiling 5-year-old child in a sunlit kitchen. Warm cream and sage tones, soft natural light, modern minimal home interior with one or two indoor plants in the background. Editorial lifestyle photography, premium wellness magazine feel, candid and warm but composed.

---

## Image 7 — Fruits & Glass of Water Flat-Lay (Background texture)
**Filename:** `fruits-flatlay.png` (16:9 panorama)

**Prompt:**
> A flat-lay still life on a cream linen surface: a small green apple, a sliced lemon, a glass of water, a tiny clay bowl of soaked almonds, a sprig of fresh mint, a small homeopathic vial. Soft natural daylight from the top-left, gentle shadows. Editorial wellness magazine style, minimal, sage-green and cream tones, lots of negative space (suitable for text overlay).

---

## Image 8 — Pregnant Woman (Women's Wellness)
**Filename:** `wellness-women.png` (4:5)

**Prompt:**
> A serene Indian woman in her 30s in a cream linen dress, standing softly by a window with morning light on her face. She holds a glass of warm herbal tea, eyes closed, peaceful expression. Indoor minimal setting, a single potted plant in the background, blurred. Editorial wellness magazine photography, warm sage and cream palette, premium calm mood.

---

## Image 9 — Open Notebook with Meal Plan (Services / How it Works)
**Filename:** `meal-plan-notebook.png` (1:1)

**Prompt:**
> Close-up of an open kraft-paper notebook with a handwritten weekly meal plan in elegant handwriting, beside a wooden fountain pen, a small green apple, a sprig of fresh mint, and a clay cup of herbal tea. Cream linen background, soft natural light from above, magazine flat-lay food photography, warm minimal aesthetic.

---

## Image 10 — Pills/Globules in Hand (Homeopathy detail)
**Filename:** `globules-hand.png` (1:1)

**Prompt:**
> Extreme close-up of small white homeopathic globules in the palm of a hand, viewed from above. Soft natural light, very shallow depth of field, gentle warm tones. The hand is steady and clean. Minimal background — just a hint of a cream linen cloth. Premium pharmacy photography, calm and pure.

---

## How to use them in the site

Once you have the images, drop them into `/website/assets/` and update these references in the HTML:

| Page | Section | Current image | Replace with |
|------|---------|---------------|--------------|
| index.html | Hero | `doctor.png` | Keep `doctor.png` OR `consultation.png` |
| index.html | About preview | `doc2.png` | `consultation.png` |
| about.html | Story | `doctor.png` | Keep |
| about.html | Philosophy | `doc1.png` | `hands-greens.png` |
| services.html | Homeopathy block | `doc1.png` | `remedy-closeup.png` or `globules-hand.png` |
| services.html | Nutrition block | `doc2.png` | `indian-plate.png` or `meal-plan-notebook.png` |
| services.html | Integrated block | `doc_Landscape.png` | Keep |
| conditions.html | Feature banner | `doc1.png` | `mother-child.png` (since it's near kids immunity) |
| contact.html | Map area | (map only) | Add `clinic-interior.png` above the map |

You don't need all 10. Even 3–4 new images will dramatically lift the site. The most impactful ones to generate first:

1. **`clinic-interior.png`** — adds environment, removes the "stock photo" feel
2. **`indian-plate.png`** — anchors the nutrition story visually
3. **`remedy-closeup.png`** — anchors the homeopathy story visually

---

## After adding images

Run a quick check:
- Every image is ~1500–2000px on the longer side (not huge, not tiny)
- Saved as `.webp` if possible (smaller, faster) — otherwise `.png` is fine
- Filename matches what's referenced in the HTML

Then just refresh the browser. No build step needed.
