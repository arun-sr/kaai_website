# Kerala Academy for Artificial Intelligence (KAAI) - Website

![KAAI Logo](assets/kaai_logo.png)

Modern, responsive landing page for Kerala Academy for Artificial Intelligence (KAAI). Built with clean HTML5, CSS3, and vanilla JavaScript for optimal performance and SEO.

## 🌟 Features

### Design & UX
- ✨ **Modern UI**: Glassmorphism, gradients, and smooth animations
- 🎨 **Brand Colors**: Official KAAI color scheme (deep blue, cyan, green)
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Smooth Animations**: Scroll-triggered reveals and micro-interactions
- 🎯 **Accessibility**: WCAG 2.1 compliant with ARIA labels and keyboard navigation

### Sections
- **Hero**: Eye-catching introduction with clear CTAs
- **Stats**: Impressive numbers showcasing impact
- **Programs**: Detailed program offerings (AI@School, Training, Internship, etc.)
- **Why KAAI**: 6 compelling reasons to choose KAAI
- **Testimonials**: Real student success stories
- **Contact**: Multiple ways to connect (phone, email, WhatsApp, social media)

### Technical
- 🚀 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, Schema.org
- 📊 **Analytics Ready**: Event tracking placeholders for Google Analytics
- ⚡ **Performance**: Lazy loading images, optimized CSS, minimal JS
- 🔍 **Search Engine Ready**: sitemap.xml, robots.txt, proper semantic HTML
- ♿ **Accessible**: Skip links, proper heading structure, alt text

## 📁 Project Structure

```
kaai-website/
├── assets/                 # Images and media files
│   ├── kaai_logo.png      # Main logo (also used as favicon)
│   ├── kaai_logo.jpg      # Logo alternate format
│   ├── logo.svg           # SVG logo for header
│   ├── kaai_whatsapp_qr.png  # WhatsApp QR code
│   └── qr.png             # Legacy QR code
├── css/
│   └── styles.css         # Main stylesheet with modern CSS
├── js/
│   └── main.js            # JavaScript for animations & interactivity
├── index.html             # Main HTML file
├── sitemap.xml            # Search engine sitemap
├── robots.txt             # Crawler instructions
├── CNAME                  # Custom domain configuration
├── CHANGELOG.md           # Version history and updates
├── .gitignore             # Git ignore rules
└── Readme.md              # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kaai-website.git
   cd kaai-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. **View the site**
   - Navigate to `http://localhost:8000`

### Making Changes

1. **Update Colors**: Edit CSS variables in `css/styles.css`
   ```css
   :root {
     --accent-cyan: #4dd5e8;
     --accent-green: #7ed957;
     /* ... more variables */
   }
   ```

2. **Update Content**: Edit text in `index.html`

3. **Update Images**: Replace files in `assets/` folder

4. **Update Contact Info**: Update in `index.html` contact section

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Save

3. **Custom Domain** (Optional)
   - Add your domain in GitHub Pages settings
   - CNAME file is already configured with `www.keralaaiacademy.com`

### Azure Static Web Apps

1. **Create Azure Static Web App**
   - Go to Azure Portal
   - Create new Static Web App
   - Connect to GitHub repository

2. **Configure Build**
   - App location: `/`
   - Output location: leave empty (static site)

3. **Deploy**
   - Azure will automatically deploy on push to main branch

### Netlify (Alternative)

1. **Connect Repository**
   - Log in to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Deploy**
   - Build command: leave empty
   - Publish directory: `/`
   - Click "Deploy site"

## 🎨 Customization

### Colors

The color scheme is defined using CSS variables. Update these in `css/styles.css`:

```css
:root {
  --bg-primary: #0d4573;           /* Main background */
  --accent-cyan: #4dd5e8;          /* Cyan accent */
  --accent-green: #7ed957;         /* Green accent */
  --text-primary: #ffffff;         /* Primary text */
  --text-muted: #b8e3f5;          /* Secondary text */
}
```

### Fonts

The site uses Inter font with system fallbacks. To change fonts:

1. Add Google Fonts link in `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. Update CSS variable:
   ```css
   :root {
     font-family: 'YourFont', system-ui, sans-serif;
   }
   ```

### Adding Sections

To add a new section, follow this pattern in `index.html`:

```html
<section class="section your-section reveal" aria-labelledby="your-heading">
  <div class="container">
    <h3 id="your-heading">Your Section Title</h3>
    <!-- Your content here -->
  </div>
</section>
```

The `reveal` class will add scroll animation automatically.

## 📞 Contact Information

- **Address**: KAAI, Trivandrum-08, Kerala, India
- **Phone**: +91 8943438494, +91 9995140889
- **Email**: info@keralaaiacademy.com
- **Website**: www.keralaaiacademy.com
- **Instagram**: [@kaai.tvm](https://instagram.com/kaai.tvm)
- **YouTube**: [@KaaiAcademy](https://youtube.com/@KaaiAcademy) | [@AiAcademyKerala](https://youtube.com/@AiAcademyKerala)

## 📈 Analytics Setup (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add this before closing `</head>` in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Uncomment tracking code in `js/main.js`

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- No inline scripts (except Schema.org JSON-LD)
- Content Security Policy ready
- No sensitive data in code

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None currently! 🎉

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 Kerala Academy for Artificial Intelligence (KAAI). All rights reserved.

## 🙏 Acknowledgments

- Design inspired by modern AI company websites
- Color scheme based on official KAAI branding materials
- Built with best practices from web.dev and MDN

---

**Built with ❤️ for Kerala's AI Future**

For questions or support, contact us at info@keralaaiacademy.com
