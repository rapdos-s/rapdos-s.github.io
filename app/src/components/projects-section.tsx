import type { JSX } from 'react';
import type { Data, Language, LanguageContent } from '@/lib/types';

import { ProjectCard } from '@/components/project-card';

import { en } from '@/locales/en';
import { ptBR } from '@/locales/pt-BR';

type ProjectsSectionComponentProps = {
  data: Data;
  language: Language;
};

export function ProjectsSectionComponent(
  props: ProjectsSectionComponentProps
): JSX.Element {
  const currentLanguage: LanguageContent =
    props.language === 'en'
      ? en
      : ptBR;

  return (
    <section
      aria-labelledby="work-title"
      className="space-y-5 px-4 sm:px-6 mb-4"
    >
      <div className="space-y-2">
        <h2
          className="text-2xl font-semibold tracking-normal"
          id="work-title"
        >
          {currentLanguage.work.title}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {props.data[props.language].projects.map((project) => (
          <ProjectCard
            imageLabel={
              currentLanguage.work.imagePlaceholder
            }
            key={project.link}
            linkLabel={currentLanguage.work.linkLabel}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}