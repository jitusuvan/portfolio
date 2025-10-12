# Portfolio Project Structure

## 📁 Folder Organization

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (ScrollProgressBar, ThemeToggle)
│   ├── sections/        # Page sections (HeroSection, AboutSection)
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   ├── useScrollProgress.js
│   ├── useTheme.js
│   └── index.js         # Hook exports
├── data/                # Static data and content
│   └── portfolioData.js # Skills, projects, experience data
├── styles/              # CSS organization
│   ├── components/      # Component-specific styles
│   │   ├── base.css     # Base styles and reset
│   │   ├── theme.css    # Theme variables and dark/light mode
│   │   ├── common.css   # Common component styles
│   │   ├── hero.css     # Hero section styles
│   │   └── about.css    # About section styles
│   └── main.css         # Main CSS file (imports all)
├── App.jsx              # Main app component
└── main.jsx             # App entry point
```

## 🎯 Key Improvements

1. **Component Separation**: Each section is now a separate component
2. **Custom Hooks**: Logic extracted into reusable hooks
3. **Data Separation**: Content moved to dedicated data files
4. **CSS Organization**: Modular CSS with component-specific files
5. **Clean Imports**: Index files for easy importing
6. **No Lenis**: Removed smooth scrolling library for better performance

## 🚀 Benefits

- **Maintainable**: Easy to find and modify specific components
- **Scalable**: Simple to add new sections or components
- **Reusable**: Components and hooks can be reused
- **Performance**: Cleaner code without unnecessary dependencies
- **Developer Experience**: Better organization and imports