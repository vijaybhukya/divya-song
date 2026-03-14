# 💜 Divya's Song

A beautiful, minimal romantic website to share Divya's song.

## Features

✨ **Clean & Elegant Design**
- Soft pastel gradient background
- Frosted glass card effect
- Minimal, distraction-free layout

🎵 **Audio Player**
- Play/pause button with smooth transitions
- Progress bar with seekable timeline
- Time display (current / duration)

💕 **Romantic Touches**
- Floating heart animations
- Smooth transitions and hover effects
- Fully responsive on all devices

🚀 **Pure Tech Stack**
- HTML5 for structure
- CSS3 for styling & animations
- Vanilla JavaScript (no frameworks)

## Setup Instructions

### 1. Your Files Are Ready

The following files have been created in your repository:
- `index.html` - Main page
- `style.css` - Styling
- `script.js` - Interactivity
- `audio.mp4` - Your audio file (already configured)

### 2. Verify Your Audio File

Make sure `audio.mp4` is in the repository root (same level as `index.html`).

If your audio file has a different name, update line 15 in `index.html`:
```html
<source src="audio.mp4" type="audio/mp4">
```

### 3. Enable GitHub Pages

1. Go to your repository: **https://github.com/vijaybhukya/divya-song**
2. Click **Settings** (gear icon at top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose branch: `main`
   - Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: **https://vijaybhukya.github.io/divya-song/**

### 4. Share the Link

Share the GitHub Pages URL with Divya to surprise her! 💜

## File Structure

```
divya-song/
├── index.html      # Main page structure
├── style.css       # All styling & animations
├── script.js       # Interactive features
└── audio.mp4       # The song (your file)
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Customization

### Change the Colors
Edit the gradient in `style.css` line 13:
```css
background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #e0e7ff 100%);
```

### Change the Text
Edit the title and subtitle in `index.html` (lines 20-21).

### Adjust Animation Speed
In `script.js`, modify the animation duration values in the `createHearts()` function.

## Notes

- The site works offline once loaded (no internet required)
- Audio format: MP4 is widely supported, but you can also use WAV or OGG
- The frosted glass effect requires modern browsers (Chrome 52+, Firefox 49+, Safari 9+)

---

Made with 💜 for Divya.