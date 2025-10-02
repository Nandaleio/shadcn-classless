# 🎨 shadcn-inspired Classless CSS

A minimalist, class-less CSS framework inspired by the beautiful components of [shadcn/ui](https://ui.shadcn.com/). This project aims to provide a simple, yet elegant styling solution for your web projects without the need for custom classes.

## ✨ Features

- 🖌️ Inspired by shadcn/ui components  
- 🚫 No classes required  
- 🌓 Dark mode support  
- 📱 Responsive design  
- 🚀 Lightweight and fast  

## 🚀 Getting Started

You can include the framework directly via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nandaleio/shadcn-classless@main/dist/shadcn-classless.css">
```

Or download the `shadcn-inspired-classless.min.css` file from this repository and include it locally:

```html
<link rel="stylesheet" href="path/to/shadcn-classless.css">
```

Then, start writing your HTML without worrying about classes!

## 📚 Usage

Simply write semantic HTML, and the styles will be automatically applied. For example:

```html
<header>
  <h1>My Awesome Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

## 🎨 Customization

To customize the styles, you can override the CSS variables defined at the root of the stylesheet. For example:

```css
:root {
  --primary: #3498db;
  --background: #f0f0f0;
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/nandaleio/shadcn-classless/issues).

## 📜 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 🙏 Acknowledgements

- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Based on the concept of classless CSS frameworks like [Pico.css](https://picocss.com/)
