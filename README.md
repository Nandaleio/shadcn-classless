# 🎨 shadcn-classless

A minimalist, classless CSS framework inspired by [shadcn/ui](https://ui.shadcn.com/). Write semantic HTML and get beautiful, accessible components automatically - no classes required.

## ✨ Features

- 🖌️ **Inspired by shadcn/ui** - Beautiful design tokens and component styles
- 🚫 **Zero classes** - Just write semantic HTML
- 🌓 **Dark mode** - Automatic system preference detection with manual override
- 📱 **Responsive** - Mobile-friendly out of the box
- 🚀 **Lightweight** - ~15KB minified
- ♿ **Accessible** - Built with ARIA attributes and semantic HTML
- 🎨 **Customizable** - CSS custom properties for easy theming

## 🚀 Quick Start

You can include the framework directly via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fordus/shadcn-classless@main/dist/shadcn-classless.css">
```

Or download the `dist/shadcn-classless.css` file from this repository and include it locally:

```html
<link rel="stylesheet" href="path/to/shadcn-classless.css">
```

Then, start writing your HTML without worrying about classes!

## 📚 Usage

Write semantic HTML and the styles are automatically applied:

```html
<article>
  <header>
    <h2>Article Title</h2>
    <small>Published on October 9, 2025</small>
  </header>
  <p>Your content here...</p>
  <footer>
    <button>Primary Action</button>
    <button secondary>Secondary Action</button>
  </footer>
</article>
```

### Component Examples

**Buttons** - Use different elements for variants:
```html
<button>Primary</button>
<button secondary>Secondary</button>
<input type="submit" value="Outline">
<input type="button" value="Ghost">
<input type="reset" value="Destructive">
```

**Dialog & Modals**:
```html
<button onclick="myDialog.showModal()">Open Dialog</button>
<dialog id="myDialog">
  <h3>Dialog Title</h3>
  <p>Dialog content...</p>
  <button onclick="myDialog.close()">Close</button>
</dialog>
```

**Forms** - Automatic styling:
```html
<form>
  <label>Email
    <input type="email" placeholder="you@example.com" required>
  </label>
  <button type="submit">Subscribe</button>
</form>
```

See [index.html](./index.html) for a complete showcase of all available components.

## 🎨 Customization

Override CSS custom properties to match your brand:

```css
:root {
  --primary: oklch(0.5 0.2 250);
  --radius: 0.25rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.1 0 0);
}
```

### Manual Dark Mode Toggle

```html
<button onclick="document.documentElement.setAttribute('data-theme',
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')">
  Toggle Theme
</button>
```

## 🧩 Available Components

- **Typography** - Headings, paragraphs, lists, blockquotes
- **Forms** - Inputs, textareas, selects, checkboxes, radios, file uploads
- **Buttons** - 5 variants (primary, secondary, outline, ghost, destructive)
- **Cards** - Article elements with shadows
- **Dialogs** - Modals, drawers, sheets (top/bottom/left/right)
- **Navigation** - Navbars, breadcrumbs, menus
- **Feedback** - Toast notifications, progress bars, loading states, tooltips
- **Data Display** - Tables, badges, avatars, skeletons
- **Interactive** - Accordions, popovers, toggles, sliders

## 🌐 Browser Support

Works in all modern browsers that support:
- CSS Custom Properties
- CSS Grid & Flexbox
- Native dialog element
- OKLCH color space

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Edit `css/shadcn-classless.css` (NOT the dist file)
4. Test your changes with `index.html`
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

The minified version will be automatically generated when merged to main.

## 📜 License

MIT License - see [LICENSE](LICENSE) for details

## 🙏 Acknowledgements

- Design system inspired by [shadcn/ui](https://ui.shadcn.com/)
- Classless CSS concept from [Pico.css](https://picocss.com/)
- Icons in demo from [Lucide](https://lucide.dev/)
