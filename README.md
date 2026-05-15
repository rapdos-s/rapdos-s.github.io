# Quantum Portfolio

Simple portfolio for developers, built with React. The page displays profile,
bio, companies, stacks, projects, language switching (International English and
Brazilian Portuguese, by default), and light/dark theme.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- shadcn/ui
- Lucide React
- GitHub Pages
- Optional Docker

## Configure Personal Data

Edit the file:

```bash
app/src/config.ts
```

This file contains the data displayed in the portfolio:

- `fullName`, `nickname`, `title`, `role`, and `bio`
- `avatarImage` and `avatarFallback`
- `companies` and `companiesLinks`
- `primaryStack` and `secondaryStack`
- `wallpapers.light` and `wallpapers.dark`
- `projects`

The project has separate data for `en` and `pt-BR`. Update both blocks if
you want to keep the website bilingual.

To add projects, edit the `projects` list in `app/src/config.ts`:

```ts
{
  title: 'Project name',
  description: 'Short project description',
  stack: ['React', 'TypeScript', 'Vite'],
  link: 'https://github.com/your-user/your-project',
  image: 'https://project-image-url',
}
```

Static interface texts, such as labels and section titles, are located in:

```bash
app/src/locales/en.ts
app/src/locales/pt-BR.ts
```

## Run Locally Without Docker

Docker is not required. To run directly on your machine:

```bash
cd app
npm install
npm run dev
```

Open the URL shown by Vite, usually:

```bash
http://localhost:5173
```

To test the production build:

```bash
cd app
npm run build
npm run preview
```

## Run Locally With Docker

Docker is only an alternative for running the environment without installing
Node directly on your machine.

Install dependencies inside the container:

```bash
docker compose -f scripts/docker-compose.yml run --rm portfolio npm install
```

Then start the project:

```bash
./scripts/run.sh
```

Open:

```bash
http://localhost:5173
```

## Configure GitHub Pages

The deployment workflow is located at:

```bash
.github/workflows/deploy.yml
```

It runs whenever there is a push to the `main` branch, installs dependencies,
builds the project into `app/dist`, and publishes it to GitHub Pages.

On GitHub, configure:

1. Open the repository `Settings`.
2. Go to `Pages`.
3. In `Build and deployment`, select `GitHub Actions`.
4. Push to the `main` branch.

If this repository is published as a user or organization page, for example
`user.github.io`, the current Vite configuration already works.

If it is published as a project page, for example
`user.github.io/repository-name`, add the `base` option in
`app/vite.config.ts`:

```ts
export default defineConfig({
  base: '/repository-name/',
  plugins: [react(), tailwindcss()],
  // ...
});
```

Then commit the changes and push them to the `main` branch.
