import type { Language, ThemeManager } from '@/lib/types';

import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { configData } from '@/config';

import { createThemeManager } from '@/lib/theme';
import { languageProvider } from './lib/language';

import { TopBarComponent } from './components/top-bar';
import { ProfileSectionComponent } from './components/profile-section';
import { ProjectsSectionComponent } from './components/projects-section';

import '@/index.css';

const themeManager: ThemeManager = createThemeManager();

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    languageProvider()
  );

  const [theme, setTheme] = useState(() =>
    themeManager.getInitialTheme()
  );

  useEffect(() => {
    localStorage.setItem(
      'spatial-duck-portfolio-language',
      language,
    );
  }, [language]);

  useEffect(() => {
    themeManager.initTheme(
      configData[language].wallpapers.light,
      configData[language].wallpapers.dark
    );
  }, [language]);

  useEffect(() => {
    themeManager.applyTheme(theme);
    themeManager.applyThemeWallpaper(theme);
  }, [theme]);

  return (
    <main>
      <TopBarComponent
        data={configData}
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />

      <ProfileSectionComponent
        data={configData}
        language={language}
      />

      <ProjectsSectionComponent
        data={configData}
        language={language}
      />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
