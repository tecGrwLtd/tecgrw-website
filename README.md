# tecGrw Website

<!-- ![TecGrw](https://img.shields.io/badge/TecGrw-Corporate%20Website-blue?style=for-the-badge) -->
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)

> tecGrw's website rebuilt with Next.js 15. 

## Overview

tecGrw website serves as the digital gateway to our company.

**Live Site:**[tecgrw.com](https://tecgrw.com)

## Architecture

- **Framework:** Next.js 15 with App Router.
- **Styling:** Tailwind CSS for maintainable, utility-first styling
- **Deployment:** Vercel with automatic CI/CD pipeline

## Key Features

 **Performance-First**
- Optimized images and fonts with Next.js built-in optimization
- Server components for faster initial page loads

 **Business Functionality**
- Contact form with server actions

## Tech Stack
```
Frontend:     Next.js 15, React 18, TypeScript
Styling:      Tailwind CSS
Deployment:   Vercel
Performance:  Next.js Image Optimization
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/tecgrw/tecgrw-website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── actions/         # Server actions
│   ├── app/             # App Router pages and layouts
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data and content
│   └── lib/             # Utility functions and configurations
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Deployment

This website is automatically deployed to Vercel with every push to the main branch. The deployment pipeline includes:

- Automatic builds and optimizations
- Preview deployments for pull requests
- Edge runtime for global performance

## Contributing

This is a private repository. For internal team members:

1. Create a feature branch from `main`
2. Make your changes.
3. Submit a pull request for review
4. Deploy after approval

## License

© 2025 TecGrw Ltd. All rights reserved.
