# Environment Variables for Deployment

## Frontend (Vercel)

Set these in Vercel dashboard under **Environment Variables**:

```
NEXT_PUBLIC_API_URL=https://stay-shire-backend.onrender.com
```

## Backend (Render)

Set these in Render dashboard under **Environment**:

```
DATABASE_URL=<your-supabase-connection-string-from-dashboard>
JWT_SECRET=<generate-random-string>
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://stay-shire-platform.vercel.app
```

**To get your Supabase connection string:**
1. Go to: https://supabase.com/dashboard/project/qwxlrgmravzfbcwziutn
2. Settings → Database → Connection String → URI
3. Copy and replace `[password]` with your actual password

### Optional (for Social Auth):
```
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
FACEBOOK_APP_ID=<your-facebook-app-id>
FACEBOOK_APP_SECRET=<your-facebook-app-secret>
```
