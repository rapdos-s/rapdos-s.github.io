import type { Theme, Wallpapers, ThemeManager } from '@/lib/types';

const DEFAULT_THEME: Theme = 'light';
const THEME_STORAGE_KEY: string = "spatial-duck-portfolio-theme";

export function createThemeManager(): ThemeManager {
  let wallpapers: Wallpapers | null = null;

  function initTheme(light: string, dark: string): void {
    wallpapers = { light, dark };
  }

  function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return DEFAULT_THEME;

    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  function applyThemeWallpaper(theme: Theme): void {
    if (!wallpapers) return;

    const url = wallpapers[theme];
    if (!url) return;

    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }

  function toggleTheme(current: Theme): Theme {
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    return next;
  }

  return {
    initTheme,
    getInitialTheme,
    applyTheme,
    applyThemeWallpaper,
    toggleTheme,
  };
}
