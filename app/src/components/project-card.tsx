import type { JSX } from 'react';
import type { Project } from '@/lib/types';

import { ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { cn } from '@/lib/utils';

type ProjectCardProps = {
  imageLabel: string;
  linkLabel: string;
  project: Project;
};

export function ProjectCard({
  imageLabel,
  linkLabel,
  project,
}: ProjectCardProps): JSX.Element {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="flex aspect-video items-center justify-center overflow-hidden border-b bg-muted text-xs font-medium uppercase tracking-normal text-muted-foreground">
        {project.image ? (
          <img
            alt={project.title}
            className="h-full w-full object-cover"
            src={project.image}
          />
        ) : (
          imageLabel
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl">
          {project.title}
        </CardTitle>

        <CardDescription className="leading-6">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {project.stack.map((item, index) => (
          <Badge
            className="border-primary/20 bg-primary text-primary-foreground"
            key={`${project.title}-${item}-${index}`}
          >
              {item}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="mt-auto">
        <a
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'w-full'
          )}
          href={project.link}
          rel="noreferrer"
          target="_blank"
        >
          {linkLabel}

          <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}