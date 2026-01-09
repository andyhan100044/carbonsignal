#!/bin/bash

echo "🚀 Deploying CarbonSignal to Vercel..."

# Check if user is logged in to Vercel
vercel whoami > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Please login to Vercel first:"
    echo "   vercel login"
    echo ""
    echo "📝 Manual deployment steps:"
    echo "1. Go to https://vercel.com/new"
    echo "2. Import your GitHub repository: andyhan100044/carbonsignal"
    echo "3. Configure project settings:"
    echo "   - Framework Preset: Next.js"
    echo "   - Root Directory: ./"
    echo "   - Build Command: npm run build"
    echo "   - Output Directory: .next"
    echo "4. Add environment variables (see .env.example)"
    echo "5. Click 'Deploy'"
    exit 1
fi

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "🔗 Next steps:"
echo "1. Add your custom domain (www.carbonsignal.org) in Vercel dashboard"
echo "2. Configure DNS records in Cloudflare"
echo "3. Set up environment variables in Vercel dashboard"
