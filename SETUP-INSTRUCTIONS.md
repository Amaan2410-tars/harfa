# Harfa AI Institute - Complete Setup Guide

## 🚀 Quick Start

### 1. Supabase Setup

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization
   - Enter project name: "harfa-ai"
   - Set a database password
   - Choose region closest to your users

2. **Run Database Schema:**
   - Go to SQL Editor in Supabase dashboard
   - Copy and paste the contents of `database-schema-simple.sql`
   - Click "Run" to execute

3. **Get API Keys:**
   - Go to Settings → API
   - Copy the following:
     - Project URL
     - Anon public key
     - Service role key (keep this secret!)

### 2. Environment Variables

Create `.env.local` file in your project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_key_here

# Stripe (Optional - for payments)
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3. Create Admin User

1. **Sign up for an account** on your site first
2. **Get your user ID:**
   - Go to Supabase → Authentication → Users
   - Copy your user ID
3. **Make yourself admin:**
   ```sql
   UPDATE users 
   SET role = 'admin' 
   WHERE id = 'your-user-id-here';
   ```

### 4. Deploy to Netlify

1. **Connect GitHub repo** to Netlify
2. **Add environment variables** in Netlify dashboard
3. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

## 🔧 Optional: Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.netlify.app/api/auth/callback/google` (production)

## 💳 Optional: Stripe Setup

1. Create [Stripe account](https://stripe.com)
2. Get API keys from dashboard
3. Set up webhook endpoint: `https://your-domain.netlify.app/api/webhooks/stripe`
4. Add webhook events: `payment_intent.succeeded`, `payment_intent.payment_failed`

## 🎯 Features Available

### For Students:
- ✅ Sign up/Sign in
- ✅ Apply for courses
- ✅ View application status
- ✅ Track enrollment progress
- ✅ Make payments

### For Admins:
- ✅ View all applications
- ✅ Approve/reject applications
- ✅ Auto-create enrollments on approval
- ✅ View user statistics

### Courses Available:
- **AI Foundation Program** - ₹45,000 (12 weeks)
- **AI Advanced Program** - ₹75,000 (16 weeks)  
- **Gen AI Program** - ₹10,000 (8 weeks)

## 🚨 Troubleshooting

### Build Errors:
- Make sure all environment variables are set
- Check Supabase connection
- Verify database schema is applied

### Authentication Issues:
- Check NextAuth configuration
- Verify Supabase RLS policies
- Ensure user roles are set correctly

### Payment Issues:
- Verify Stripe keys are correct
- Check webhook endpoints
- Test with Stripe test cards

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify environment variables
3. Test database connection in Supabase
4. Check Netlify build logs

Your Harfa AI Institute is now ready! 🎉
