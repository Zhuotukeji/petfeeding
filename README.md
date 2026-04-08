# Pet Feeding Guide

A responsive web application for pet feeding guidance, built with Next.js and optimized for Google AdSense for Search (AFS).

## Features

- 🐾 Comprehensive pet feeding guides (Dogs, Cats, Birds, Other Pets)
- 🔍 Integrated Google AdSense for Search
- 📱 Fully responsive design (Desktop, Tablet, Mobile)
- ⚡ SEO optimized with Next.js App Router
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Zhuotukeji/petfeeding.git
cd petfeeding

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local and add your Google AFS credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Zhuotukeji/petfeeding)

### Manual Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_AFS_CLIENT_ID`
   - `NEXT_PUBLIC_AFS_SEARCH_ID`
4. Deploy

## Project Structure

```
petfeeding/
├── app/
│   ├── (categories)/      # Category pages
│   ├── articles/          # Article pages
│   ├── about/            # Static pages
│   ├── contact/
│   ├── privacy/
│   ├── disclaimer/
│   └── layout.tsx
├── components/           # Reusable components
├── lib/                 # Utilities and data
└── public/              # Static assets
```

## Content Management

Articles are managed through markdown files in the `lib/articles` directory. Each article includes:
- Title and description
- Category classification
- SEO metadata
- FAQ section

## SEO Features

- Sitemap generation
- Robots.txt configuration
- Structured data (JSON-LD)
- Meta tags optimization
- Mobile-first responsive design

## License

MIT

## Contact

For questions or support, please visit our [Contact Page](https://petfeeding.vercel.app/contact).
