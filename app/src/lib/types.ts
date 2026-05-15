// // Theme ////////////////////////////////////////////////////////////////////

export type Theme = 'light' | 'dark';

export type Wallpapers = {
  light: string;
  dark: string;
};

export type ThemeManager = {
  initTheme(light: string, dark: string): void;
  getInitialTheme(): Theme;
  applyTheme(theme: Theme): void;
  applyThemeWallpaper(theme: Theme): void;
  toggleTheme(current: Theme): Theme;
};

// // Language /////////////////////////////////////////////////////////////////

export type Language = 'en' | 'pt-BR';

export type LanguageContent = {
  name: string;

  profile: {
    nicknameLabel: string;
    companiesLabel: string;

    primaryStackLabel: string;
    secondaryStackLabel: string;
  };

  work: {
    title: string;

    linkLabel: string;
    imagePlaceholder: string;
  };
};

// // Content //////////////////////////////////////////////////////////////////

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
};

export type Data = Record<Language, {
  fullName: string;
  nickname: string;
  title: string;
  role: string;
  bio: string;
  avatarFallback: string;

  companies: string[];
  companiesLinks: string[];

  primaryStack: string[];
  secondaryStack: string[];

  avatarImage: string;
  wallpapers: Wallpapers;

  projects: Project[];
}>;
