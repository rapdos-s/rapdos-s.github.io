import type { JSX } from 'react';
import type { Data, Language } from '@/lib/types';

import { ProfileCardComponent } from '@/components/profile-card';

type ProfileSectionComponentProps = {
  data: Data;
  language: Language;
};

function ProfileBioComponent(
  props: ProfileSectionComponentProps
): JSX.Element {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <h1 className="max-w-3xl text-2xl font-semibold leading-tight tracking-normal sm:text-4xl">
          {props.data[props.language].bio}
        </h1>
      </div>
    </div>
  );
}

export function ProfileSectionComponent(
  props: ProfileSectionComponentProps
): JSX.Element {
  return (
    <div
      className="
        mx-auto grid w-full max-w-6xl
        gap-10 px-4 py-8 sm:px-6 lg:py-8
      "
      id="top"
    >
      <section
        className="
          grid gap-8
          lg:grid-cols-[1.1fr_0.9fr]
          lg:items-center
        "
      >
        <ProfileCardComponent
          data={props.data}
          language={props.language}
        />

        <ProfileBioComponent
          data={props.data}
          language={props.language}
        />
      </section>
    </div>
  );
}