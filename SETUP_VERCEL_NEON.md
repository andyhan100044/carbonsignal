# Vercel & Neon Setup Guide

## Overview
This guide covers deploying CarbonSignal to Vercel and setting up Neon PostgreSQL database.

## Part 1: Neon Database Setup

### Step 1: Create Neon Account
1. Go to https://neon.tech
2. Sign up for a free account
3. Create a new project

### Step 2: Create Database
1. In Neon dashboard, click "Create database"
2. Name: `carbonsignal`
3. Choose region closest to your users (e.g., Singapore, Tokyo)
4. Copy the connection string

**Connection String Format:**
```
postgresql://USER:PASSWORD@HOSTNAME/dbname?sslmode=require
```

### Step 3: Get Connection Details
From Neon dashboard → Settings → Connection:
- Host: `ep-xxxxx-xxxxx-xx-xx-xx-xx.neon.tech`
- Database: `carbonsignal`
- User: `your_username`
- Password: `your_password`

## Part 2: Vercel Deployment

### Option A: Using Vercel CLI (Recommended)

#### 1. Login to Vercel
```bash
vercel login
```

#### 2. Deploy
```bash
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (your account)
- Link to existing project? **N**
- Project name: `carbonsignal`
- Directory: `./` (current)
- Override settings? **N**

#### 3. Configure Environment Variables
In Vercel Dashboard → Settings → Environment Variables, add:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOSTNAME/dbname?sslmode=require
NEXT_PUBLIC_APP_URL=https://carbonsignal.vercel.app
NODE_ENV=production
```

### Option B: Manual Deployment via Web

1. Go to https://vercel.com/new
2. Import GitHub repository: `andyhan100044/carbonsignal`
3. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Add environment variables
5. Click **Deploy**

## Part 3: Custom Domain Setup

### Add Domain in Vercel
1. Vercel Dashboard → Project → Settings → Domains
2. Add: `www.carbonsignal.org`
3. Add: `carbonsignal.org` (redirect)

### Configure DNS in Cloudflare
1. Go to Cloudflare Dashboard
2. Select domain: `carbonsignal.org`
3. DNS → Records

**Add these records:**
```
Type: CNAME
Name: www
Content: cname.vercel-dns.com
Proxy: Enabled (orange cloud)

Type: A
Name: @
Content: 76.76.19.61
Proxy: Enabled (orange cloud)
```

## Part 4: Database Schema Setup

### Create Tables
Execute this SQL in Neon SQL Editor:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  plan VARCHAR(50) NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Carbon prices table
CREATE TABLE carbon_prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  volume BIGINT,
  market VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  country VARCHAR(100),
  vintage INTEGER,
  price DECIMAL(10,2),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_carbon_prices_date ON carbon_prices(date);
CREATE INDEX idx_projects_type ON projects(type);
CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
```

## Part 5: Vercel KV Setup

### Create KV Database
1. Vercel Dashboard → Storage → Create Database
2. Choose: **KV**
3. Name: `carbonsignal-kv`
4. Region: Choose closest to your users
5. Copy the connection details

### Add KV Environment Variables
```
KV_URL=redis://default:password@host:port
KV_REST_API_URL=https://your-kv-url.kv.vercel-storage.com
KV_REST_API_TOKEN=your_kv_token
KV_REST_API_READ_ONLY_TOKEN=your_readonly_token
```

## Part 6: Verify Setup

### Test Deployment
1. Open your Vercel deployment URL
2. Check that homepage loads correctly
3. Verify environment variables are set
4. Test database connection (will implement later)

### Local Development
To test locally with production database:
```bash
# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your production values
# Start dev server
npm run dev
```

## Troubleshooting

### Build Failures
- Check all environment variables are set
- Ensure Node.js version compatibility (18+)
- Check build logs in Vercel dashboard

### Database Connection Issues
- Verify SSL mode is set to `require` in connection string
- Check Neon project is not paused
- Ensure your IP is allowed (Neon allows all by default)

### Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Check Cloudflare proxy status (orange cloud)
- Verify domain is added in Vercel

## Next Steps
After completing this setup:
1. Configure Supabase (next task)
2. Set up Cloudflare Workers
3. Register third-party APIs
4. Implement authentication
5. Create data fetching logic

## Resources
- Vercel Docs: https://vercel.com/docs
- Neon Docs: https://neon.tech/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
