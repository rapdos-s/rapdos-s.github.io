import type { JSX, Dispatch, SetStateAction } from 'react';
import type { Theme, Language, Data } from '@/lib/types';

import { Moon, Sun, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { createThemeManager } from '@/lib/theme';
import { en } from '@/locales/en';
import { ptBR } from '@/locales/pt-BR';

type TopBarComponentProps = {
  data: Data;

  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;

  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

const themeManager = createThemeManager();

export function TopBarComponent(props: TopBarComponentProps): JSX.Element {
  return (
<header className="static mx-2 my-2 rounded-md border bg-background/85 backdrop-blur">
      <div
        className="
          mx-auto flex min-h-16 max-w-6xl
          items-center justify-between gap-4 px-4
        "
      >
        <a
          className="text-sm font-semibold tracking-normal"
          href="#top"
        >
          {props.data[props.language].title}
        </a>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 rounded-md border bg-muted p-1"
            role="group"
          >

          <Button
            className="h-8"
            onClick={() => props.setLanguage(
              props.language === 'pt-BR' ? 'en' : 'pt-BR'
            )}
            size="icon"
            type="button"
            variant="outline"
          >
            {<Languages className="h-4 w-4" />}
          </Button>

            <Button
              aria-pressed={props.language === 'pt-BR'}
              className="h-8 px-3"
              onClick={() => props.setLanguage('pt-BR')}
              type="button"
              variant={props.language === 'pt-BR' ? 'default' : 'ghost'}
            >
              {ptBR.name}
            </Button>

            <Button
              aria-pressed={props.language === 'en'}
              className="h-8 px-3"
              onClick={() => props.setLanguage('en')}
              type="button"
              variant={props.language === 'en' ? 'default' : 'ghost'}
            >
              {en.name}
            </Button>
          </div>

          <Button
            onClick={() =>
              props.setTheme(current =>
                themeManager.toggleTheme(current)
              )
            }
            size="icon"
            type="button"
            variant="outline"
          >
            {props.theme === 'dark'
              ? <Sun className="h-4 w-4" />
              : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
