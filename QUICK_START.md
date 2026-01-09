# CarbonSignal Quick Start Guide

## Current Status: Vercel & Neon Setup

### ✅ Completed
- Project structure created
- Dependencies installed
- Database schema designed
- Deployment scripts ready

### 📋 Next Steps

#### 1. Set Up Neon Database
```bash
# Go to https://neon.tech
# Create new project named: carbonsignal
# Copy connection string
```

#### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Add your Neon database URL:
```env
DATABASE_URL=postgresql://USER:PASSWORD@HOSTNAME/dbname?sslmode=require
```

#### 3. Initialize Database
```bash
npm run db:init
```

#### 4. Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Option B: Manual**
1. Go to https://vercel.com/new
2. Import: `andyhan100044/carbonsignal`
3. Configure framework: Next.js
4. Add environment variables
5. Deploy

#### 5. Add Custom Domain
1. Vercel Dashboard → Project → Settings → Domains
2. Add: `www.carbonsignal.org`
3. Configure DNS in Cloudflare (see SETUP_VERCEL_NEON.md)

## Database Schema Overview

The following tables will be created:
- `users` - User accounts
- `subscriptions` - Subscription plans
- `carbon_prices` - Daily carbon market prices
- `projects` - VCS/GS projects
- `price_alerts` - User price alerts
- `api_usage` - API usage tracking

## Available Scripts

```bash
npm run db:init    # Initialize database schema
npm run db:test    # Test database connection
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
```

## Resources

- [SETUP_VERCEL_NEON.md](./SETUP_VERCEL_NEON.md) - Detailed setup guide
- [Neon Documentation](https://neon.tech/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Next Tasks

After completing Vercel & Neon setup:
1. Set up Supabase and Cloudflare
2. Register third-party APIs (Resend, Creem, Claude)
3. Implement authentication
4. Create data fetching logic
5. Set up CI/CD pipeline

## Need Help?

Check the troubleshooting section in SETUP_VERCEL_NEON.md for common issues.
