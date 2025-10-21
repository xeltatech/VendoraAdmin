# Vendora Admin

Admin panel for Vendora application built with Next.js 15.

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) to view the application.

### Build

```bash
npm run build
# or
yarn build
```

### Start Production

```bash
npm run start
# or
yarn start
```

## Technologies

- **Next.js 15.5.6** - React framework
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **ESLint** - Code linting

## Design System

The application uses a custom color palette defined in `globals.css`:

- Primary colors (black, gray)
- Orange accent colors
- Red colors for errors
- Typography using system fonts

## Development Guidelines

1. Follow the feature-based architecture
2. Use TypeScript for type safety
3. Create reusable components in `shared/components`
4. Keep feature-specific components in their respective feature folders
5. Use custom hooks for business logic
