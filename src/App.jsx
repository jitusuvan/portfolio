import React from 'react';
import { useTheme } from './hooks/useTheme.jsx';
import ThemeToggle from './components/common/ThemeToggle';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';

function App() {
  let themeData;
  try {
    themeData = useTheme();
  } catch (error) {
    console.error('Theme hook error:', error);
    themeData = { darkMode: false, toggleDarkMode: () => {} };
  }
  
  const { darkMode, toggleDarkMode } = themeData;

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
export default App;