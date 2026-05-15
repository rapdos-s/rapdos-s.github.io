import type { Data } from '@/lib/types';

const projects = {
  en: [
    {
      title: 'projects[\'en\'].title',
      description: 'projects[\'en\'].description',
      stack: ['projects[\'en\'].stack', 'projects[\'en\'].stack', 'projects[\'en\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Project',
    },
    {
      title: 'projects[\'en\'].title',
      description: 'projects[\'en\'].description',
      stack: ['projects[\'en\'].stack', 'projects[\'en\'].stack', 'projects[\'en\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Project',
    },
    {
      title: 'projects[\'en\'].title',
      description: 'projects[\'en\'].description',
      stack: ['projects[\'en\'].stack', 'projects[\'en\'].stack', 'projects[\'en\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Project',
    },
  ],
  'pt-BR': [
    {
      title: 'projects[\'pt-BR\'].title',
      description: 'projects[\'pt-BR\'].description',
      stack: ['projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Projeto',
    },
    {
      title: 'projects[\'pt-BR\'].title',
      description: 'projects[\'pt-BR\'].description',
      stack: ['projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Projeto',
    },
    {
      title: 'projects[\'pt-BR\'].title',
      description: 'projects[\'pt-BR\'].description',
      stack: ['projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack', 'projects[\'pt-BR\'].stack'],
      link: 'https://github.com/orgs/QuantumOrbit-Soft/repositories',
      image: 'https://placehold.co/600x400/AAAAAA/EEEEEE?text=Projeto',
    },
  ],
};

export const configData: Data = {
  'en': {
    fullName: 'config[\'en\'].fullName',
    nickname: 'config[\'en\'].nickname',
    title: 'config[\'en\'].title',
    role: 'config[\'en\'].role',
    bio: 'config[\'en\'].bio',
    avatarFallback: 'config[\'en\'].avatarFallback',

    companies: ['config[\'en\'].companies[1]', 'config[\'en\'].companies[2]'],
    companiesLinks: ['config[\'en\'].companiesLinks[1]', 'config[\'en\'].companiesLinks[2]'],

    primaryStack: ['config[\'en\'].primaryStack[1]', 'config[\'en\'].primaryStack[2]'],
    secondaryStack: ['config[\'en\'].secondaryStack[1]', 'config[\'en\'].secondaryStack[2]'],

    avatarImage: 'https://avatars.githubusercontent.com/u/278219750www',
    wallpapers: {
      light: 'https://placehold.co/1200x600/EEEEEE/CCCCCC?text=Wallpaper',
      dark: 'https://placehold.co/1200x600/333333/444444?text=Wallpaper',
    },

    projects: projects['en'],
  },
  'pt-BR': {
    fullName: 'config[\'pt-BR\'].fullName',
    nickname: 'config[\'pt-BR\'].nickname',
    title: 'config[\'pt-BR\'].title',
    role: 'config[\'pt-BR\'].role',
    bio: 'config[\'pt-BR\'].bio',
    avatarFallback: 'config[\'pt-BR\'].avatarFallback',

    companies: ['config[\'pt-BR\'].companies[1]', 'config[\'pt-BR\'].companies[2]'],
    companiesLinks: ['config[\'pt-BR\'].companiesLinks[1]', 'config[\'pt-BR\'].companiesLinks[2]'],

    primaryStack: ['config[\'pt-BR\'].primaryStack[1]', 'config[\'pt-BR\'].primaryStack[2]'],
    secondaryStack: ['config[\'pt-BR\'].secondaryStack[1]', 'config[\'pt-BR\'].secondaryStack[2]'],

    avatarImage: 'https://avatars.githubusercontent.com/u/278219750www',
    wallpapers: {
      light: 'https://placehold.co/1200x600/EEEEEE/CCCCCC?text=Wallpaper',
      dark: 'https://placehold.co/1200x600/333333/444444?text=Wallpaper',
    },

    projects: projects['pt-BR'],
  },
};
