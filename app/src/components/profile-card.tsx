import type { JSX, ReactNode } from 'react';
import type { Data, Language, LanguageContent } from '@/lib/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { en } from '@/locales/en';
import { ptBR } from '@/locales/pt-BR';

function CompanyBadge({
  company,
  link,
}: {
  company: string;
  link?: string;
}) {
  const badge = <Badge variant="outline">{company}</Badge>;

  if (!link) {
    return badge;
  }

  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      {badge}
    </a>
  );
}

function InfoBlock({
  children,
  label,
  value,
}: {
  children?: ReactNode;
  label: string;
  value?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <span className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
        {label}
      </span>

      <div className="text-sm leading-6">
        {children ?? value}
      </div>
    </div>
  );
}

function StackBlock({
  label,
  stack,
}: {
  label: string;
  stack?: string[];
}) {
  return (
    <InfoBlock label={label}>
      <div className="flex flex-wrap gap-2">
        {stack?.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </InfoBlock>
  );
}

type ProfileCardComponentProps = {
  data: Data;
  language: Language;
};

export function ProfileCardComponent({
  data,
  language,
}: ProfileCardComponentProps): JSX.Element {
  const currentLanguage: LanguageContent =
    language === 'en'
      ? en
      : ptBR;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="gap-5 sm:flex-row sm:items-center">
        <Avatar className="h-28 w-28">
          <AvatarImage
            src={data[language].avatarImage}
          />

        <AvatarFallback>
          {data[language].avatarFallback}
        </AvatarFallback>
        </Avatar>

        <div className="space-y-2">
          <CardDescription>
            {data[language].role}
          </CardDescription>

          <CardTitle>
            {data[language].fullName}
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            {currentLanguage.profile.nicknameLabel}:{' '}

            <span className="text-foreground">
              {data[language].nickname}
            </span>
          </p>
        </div>
      </CardHeader>

      <CardContent className="grid gap-5">
        <InfoBlock
          label={currentLanguage.profile.companiesLabel}
        >
          <div className="flex flex-wrap gap-2">
            {data[language].companies.map((company, index) => (
              <CompanyBadge
                company={company}
                key={company}
                link={data[language].companiesLinks?.[index]}
              />
            ))}
          </div>
        </InfoBlock>

        <StackBlock
          label={currentLanguage.profile.primaryStackLabel}
          stack={data[language].primaryStack}
        />

        <StackBlock
          label={currentLanguage.profile.secondaryStackLabel}
          stack={data[language].secondaryStack}
        />
      </CardContent>
    </Card>
  );
}