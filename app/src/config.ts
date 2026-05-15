import type { Data } from '@/lib/types';

const projects = {
  en: [
    {
      title: 'Quantum Portfolio for Devs',
      description: 'Minimal ShadCN portfolio template for developers.',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Lucide React', 'GitHub Pages', 'Docker'],
      link: 'https://github.com/QuantumOrbit-Soft/Quantum-Portfolio-for-Dev',
      image: 'project-001-en-dark.png',
    },
  ],
  'pt-BR': [
    {
      title: 'Portfólio para Desenvolvedores da QuantumOrbit Soft',
      description: 'Portfólio minimalista para desenvolvedores feito na QuantumOrbit Soft.',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Lucide React', 'GitHub Pages', 'Docker'],
      link: 'https://github.com/QuantumOrbit-Soft/Quantum-Portfolio-for-Dev',
      image: 'project-001-ptBR-dark.png',
    },
  ],
};

export const configData: Data = {
  'en': {
    fullName: 'Raphael dos Santos Esteves',
    nickname: 'rapdos / rapdos-s',
    title: 'Raphael\'s Portfolio',
    role: 'Fullstack Developer',
    bio: 'Focused on practical, simple and efficient solutions.',
    avatarFallback: 'RSE',

    companies: ['QuantumOrbit Soft', 'Spatial Ducks'],
    companiesLinks: ['https://github.com/QuantumOrbit-Soft', 'https://github.com/Spatial-Ducks'],

    primaryStack: ['TypeScript', 'Python', 'React', 'Bash', 'Docker'],
    secondaryStack: ['Makefile ', 'C'],

    avatarImage: 'https://avatars.githubusercontent.com/u/86138022',
    wallpapers: {
      light: 'wallpaper_light.jpg',
      dark: 'wallpaper_dark.jpg',
    },

    projects: projects['en'],
  },
  'pt-BR': {
    fullName: 'Raphael dos Santos Esteves',
    nickname: 'rapdos / rapdos-s',
    title: 'Portfólio de Raphael',
    role: 'Desenvolvedor Fullstack',
    bio: 'Focado em soluções práticas, simples e eficientes.',
    avatarFallback: 'RSE',

    companies: ['QuantumOrbit Soft', 'Spatial Ducks'],
    companiesLinks: ['https://github.com/QuantumOrbit-Soft', 'https://github.com/Spatial-Ducks'],

    primaryStack: ['TypeScript', 'Python', 'React', 'Bash', 'Docker'],
    secondaryStack: ['Makefile ', 'C'],

    avatarImage: 'https://avatars.githubusercontent.com/u/86138022',
    wallpapers: {
      light: 'wallpaper_light.jpg',
      dark: 'wallpaper_dark.jpg',
    },

    projects: projects['pt-BR'],
  },
};
