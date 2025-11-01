# FAQ Accordion Component

## 📋 Overview

A fully functional, accessible FAQ accordion component built as a Frontend Mentor challenge. This project demonstrates modern web development practices with semantic HTML, modular JavaScript using ES6 modules, and responsive CSS with smooth animations.

### Preview

| Mobile View (375x812) | Desktop View (1440x960) |
|----------------------|------------------------|
| ![Mobile Light](./assets/img/site-preview-mobile_375x812.png) | ![Desktop Light](./assets/img/site-preview-desktop_1440x960.png) |
| ![Mobile Dark](./assets/img/site-preview-mobile-dark_375x812.png) | ![Desktop Dark](./assets/img/site-preview-desktop-dark_1440x960.png) |

---

## ✨ Features

### Core Functionality
- ✅ **Smooth Accordion Animation** - Expand/collapse with elegant transitions
- ✅ **Dynamic Icon Management** - Plus/minus icons update based on state
- ✅ **First FAQ Auto-Opens** - Enhanced user experience with default state
- ✅ **Responsive Resize Handling** - Open accordions adjust dynamically on window resize
- ✅ **Click on Question** - Both question text and button toggle the accordion

### Theme Support
- ✅ **Light/Dark Mode Toggle** - Seamless theme switching
- ✅ **Theme Persistence** - Saves preference to localStorage
- ✅ **System Preference Detection** - Respects user's OS theme preference
- ✅ **Dynamic Background Images** - Background patterns change with theme

### Accessibility
- ✅ **ARIA Attributes** - Complete aria-pressed and aria-label support
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Screen Reader Friendly** - Proper semantic HTML structure
- ✅ **Focus Indicators** - Clear focus states for all interactive elements
- ✅ **Reduced Motion Support** - Respects user's motion preferences

### Technical Excellence
- ✅ **Modular JavaScript** - ES6 modules for maintainable code
- ✅ **Error Handling** - Defensive programming with null checks
- ✅ **Performance Optimized** - Efficient event handling and DOM manipulation
- ✅ **Pixel Perfect** - Matches design specifications precisely
- ✅ **Cross-Browser Compatible** - Works on all modern browsers

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - runs directly in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/frontend-mentor-faq-accordion-main.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd frontend-mentor-faq-accordion-main
   ```

3. **Open in your browser**
   - Simply open `index.html` in your preferred browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the application**
   - Navigate to `http://localhost:8000` (or the port you specified)

---

## 📁 Project Structure

```
frontend-mentor-faq-accordion-main/
│
├── assets/
│   ├── docs/              # Design files and documentation
│   ├── downloads/          # Performance reports
│   ├── fonts/              # Custom font files (Work Sans)
│   ├── icons/              # Favicons and SVG icons
│   └── img/                # Background patterns and previews
│
├── css/
│   └── style.css          # Main stylesheet with variables and themes
│
├── js/
│   ├── index.js           # Entry point - initializes modules
│   └── modules/
│       ├── accordion.js   # Accordion functionality
│       ├── theme.js       # Theme toggle and management
│       └── ui.js          # UI utilities and icon management
│
├── index.html             # Main HTML file
├── favicon.ico            # Site favicon
├── LICENSE                # License file
└── README.md              # This file
```

---

## 🎨 Architecture

### JavaScript Modules

#### `js/index.js`
- Main entry point
- Initializes theme toggle and accordion
- Ensures proper initialization order

#### `js/modules/accordion.js`
- Handles accordion expand/collapse logic
- Manages first FAQ default state
- Implements resize event handling
- Manages icon state initialization

#### `js/modules/theme.js`
- Theme toggle functionality
- localStorage management
- System preference detection
- Background image switching
- Icon theme class management

#### `js/modules/ui.js`
- Icon shape management (plus/minus)
- Theme-aware icon styling
- ARIA attribute updates
- SVG path manipulation

### CSS Architecture
- CSS Custom Properties for theming
- Mobile-first responsive design
- Smooth transitions with reduced motion support
- Dark mode with `.dark` class

---

## 🎯 Usage

### Basic Accordion Interaction
- **Click the question text** or **click the icon button** to toggle
- **First FAQ opens automatically** on page load
- **Icons update** based on open/closed state and theme

### Theme Toggle
- **Click the theme toggle button** in the top-right corner
- Theme preference is **saved automatically**
- Background images **update dynamically**

### Keyboard Navigation
- **Tab** to navigate between accordion items
- **Enter** or **Space** to toggle accordion state
- All interactive elements are keyboard accessible

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Modular, modern JavaScript
- **Git** - Version control
- **GitHub** - Repository hosting

---

## 📊 Performance

- ✅ Optimized SVG icon handling
- ✅ Efficient event listeners with debouncing
- ✅ Minimal DOM manipulations
- ✅ CSS transitions for smooth animations
- ✅ Lazy initialization where appropriate

---

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `css/style.css`:
```css
:root {
  --BGCOLOR: hsl(275, 100%, 97%);
  --FONT-COLOR-CARD-QUESTION-HOVER: #ad28eb;
  /* ... more variables ... */
}
```

### Adjusting Animation Speed
Modify transition duration:
```css
.card__answer {
  transition: max-height 0.3s ease-in-out; /* Change 0.3s to your preference */
}
```

### Adding More FAQs
Simply duplicate the `.card__faq` section in `index.html`:
```html
<section class="card__faq">
  <header class="card__faq-header">
    <p class="card__question">Your question here?</p>
    <button class="card__button" type="button" aria-pressed="false">
      <!-- SVG icon -->
    </button>
  </header>
  <div class="card__answer">
    <p class="card__p">Your answer here.</p>
  </div>
</section>
```

---

## ♿ Accessibility Features

- **ARIA Attributes**: `aria-pressed`, `aria-label`, `aria-hidden`
- **Semantic HTML**: Proper use of `<section>`, `<header>`, `<button>`
- **Keyboard Support**: Full keyboard navigation
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Descriptive labels and states
- **Reduced Motion**: Respects `prefers-reduced-motion` media query


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

