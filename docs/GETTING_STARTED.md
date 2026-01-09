# Getting Started

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values.

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
carbonsignal/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── dashboard/        # Dashboard pages
│   ├── projects/         # Project pages
│   ├── pricing/          # Pricing page
│   └── api/              # API routes
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── charts/           # Chart components
│   └── forms/            # Form components
├── lib/                  # Utility libraries
│   ├── db/              # Database client
│   ├── auth/            # Authentication
│   └── utils.ts         # Helper functions
├── types/               # TypeScript type definitions
├── public/             # Static assets
└── docs/              # Documentation
```

## Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type check
npm run type-check
```

## Next Steps

1. Set up your database (Neon PostgreSQL)
2. Configure Vercel KV for caching
3. Add your API keys (Claude, Resend, Creem)
4. Deploy to Vercel
5. Set up custom domain (www.carbonsignal.org)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
