# Our Little Forever ❤️ – 180 Days to Forever

A beautiful, romantic countdown website for a couple getting married on **16 May 2027**.

## Features

✨ **Opening Animation**: Two photographs elegantly merge together, symbolizing two souls becoming one

⏰ **Live Countdown**: Real-time countdown showing days, hours, minutes, and seconds until the wedding

💕 **Romantic Design**: Soft blush pink, cream, and rose-gold color palette with floating hearts

📱 **Fully Responsive**: Beautiful on all devices - mobile phones, tablets, and desktops

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Countdown logic and animation control
- `priya.jpeg` - Bride's photograph
- `ananth.jpeg` - Groom's photograph

## How to Use

### Option 1: Open Locally
1. Simply open `index.html` in your web browser
2. The website will display with the countdown and animations

### Option 2: Deploy to GitHub Pages (Free)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click "New Repository"
   - Name it something like `our-forever` or `wedding-countdown`
   - Make it Public
   - Don't initialize with README (we already have files)

2. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all files:
     - index.html
     - styles.css
     - script.js
     - priya.jpeg
     - ananth.jpeg
   - Commit the files

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 3: Other Free Hosting Options

- **Netlify**: Drag and drop all files to [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: Deploy via [vercel.com](https://vercel.com)
- **Cloudflare Pages**: Deploy via [pages.cloudflare.com](https://pages.cloudflare.com)

## Customization

### Change the Wedding Date
Edit `script.js` line 2:
```javascript
const weddingDate = new Date('May 16, 2027 00:00:00').getTime();
```

### Replace Photographs
Simply replace `priya.jpeg` and `ananth.jpeg` with your own photographs. Keep the same filenames, or update the filenames in `index.html`.

### Adjust Colors
Edit the color values in `styles.css`:
- Main pink: `#d63861`
- Background gradient: `#fff5f7`, `#ffe8ec`, `#ffd4db`
- Rose gold accents: `#ff6987`

## Animation Sequence

1. Photos fade in separately (left and right)
2. Animated heart appears between them
3. Photos move toward each other
4. Photos merge into a heart-shaped frame
5. "Two Different Souls, One Beautiful Forever ❤️" appears
6. Transition to countdown section
7. Live countdown with floating hearts

## Browser Compatibility

Works perfectly on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks needed
- **Lightweight** - Fast loading, optimized for mobile
- **No dependencies** - Works offline once loaded
- **Smooth animations** - CSS3 transforms and transitions

## Credits

Created with love by a Machine Learning Engineer for her future husband ❤️

---

**Wedding Date**: 16 May 2027  
**Countdown**: 180 Days to Forever ❤️
