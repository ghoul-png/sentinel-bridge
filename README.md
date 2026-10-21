# SENTINEL — Team 7

This is a minimal Next.js wrapper for the supplied SENTINEL HTML experience. The original interactive page is preserved at `public/sentinel.html` and is shown full-screen at the Next.js home route.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000

Press Enter to initialize the experience. The page loads Three.js from a CDN, so an internet connection is required for the 3D scene and Google Fonts.

## Production build

```bash
npm run build
npm run start
```

To edit the experience, modify `public/sentinel.html`.

## Refinement pass 2 (changelog)
- Cinematic black bars removed; canvases are full-bleed (100vw x 100dvh), iframe is `position:fixed; inset:0`.
- Terrain: 300x230 mesh, slope/height-based colouring, smooth detail map (no pixel noise).
- Trees: real leaf-card canopies (deciduous + pine), per-tree colour (some autumn), wind sway, always visible,
  dither-fade near the camera so the fly-in never clips through them. Camera is kept above the terrain.
- Water: Gerstner waves, planar reflections (bridge/hills/sky), sun glitter, depth colour, shore foam, fog.
- Intro -> bridge shot is now a time-eased arc (no more straight line through hills).
- Film grain overlay (animated canvas noise, overlay blend).
- Mirror zoom: new 3D scene (chrome mirror dissolving into a lit atom lattice with bonds, electron clouds,
  laser wave in/out, phase-shifted by the real bridge signal).
- Top nav: centred, borderless; a box + blur appears only on hover. Active item is an amber underline.

## Refinement pass 3
- Grain reduced, colours enriched without over-brightening.
- Vibration smoothed and made subtle.
- Interferometer scene rebuilt (optical table, glass beam-splitters, chrome mirrors, laser, detector, soft-glow beams).
- Audio removed.
