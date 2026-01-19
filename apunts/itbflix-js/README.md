# Disseny d'interfícies web

## Multimèdia  React

### Lazy loading

```html
<img src="imatge.jpg" alt="Exemple" loading="lazy" />
<video src="video.mp4" controls loading="lazy"></video>
```
### `<picture>`
- `<picture>` permet oferir imatges en diferents formats.
- El navegador tria el millor que suporta.
- L’últim `<img>` és la imatge per defecte perquè sempre funcioni.

```html
<picture>
  <source srcset="imatge.avif" type="image/avif">
  <source srcset="imatge.webp" type="image/webp">
  <img src="imatge.jpg" alt="Exemple">
</picture>
```

### `<img>`, `<audio>`, `<video>`
```html
<audio controls>
  <source src="so.mp3" type="audio/mpeg">
  <source src="so.ogg" type="audio/ogg">
  El teu navegador no suporta àudio.
</audio>
```

```html
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <track src="subtitols.vtt" kind="subtitles" srclang="ca" label="Català">
  El teu navegador no suporta vídeo.
</video>
```