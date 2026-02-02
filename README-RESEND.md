# Contact Form Setup with Resend

This guide explains how to configure the contact form to send emails using [Resend](https://resend.com).

## Prerequisites

1. A Resend account ([sign up here](https://resend.com))
2. A verified domain in Resend
3. A deployment platform (Vercel, Netlify, or similar)

---

## Step 1: Resend Setup

### Create an Account
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### Verify Your Domain
1. Navigate to [Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `aspect-homes.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually a few minutes)

### Create an API Key
1. Navigate to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Contact Form")
4. Copy the key (starts with `re_`)
5. **Store it securely** - you won't be able to see it again!

---

## Step 2: Update the Serverless Function

### For Vercel
The function is at `api/send-contact.ts`. Update the CONFIG object:

```typescript
const CONFIG = {
  from: 'Contact Form <noreply@yourdomain.com>',  // Must use verified domain
  to: ['your-email@yourdomain.com'],               // Where to receive emails
};
```

### For Netlify
The function is at `netlify/functions/send-contact.ts`. Update the same CONFIG object.

**Important:** The `from` email MUST use a verified domain in Resend.

---

## Step 3: Platform Configuration

### Vercel

1. Go to your project settings in Vercel
2. Navigate to **Settings → Environment Variables**
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (e.g., `re_xxxxx...`)
4. Redeploy your project

The `api/send-contact.ts` file will automatically become available at `/api/send-contact`.

### Netlify

1. Go to your site settings in Netlify
2. Navigate to **Site settings → Environment variables**
3. Add a new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
4. Redeploy your site

The function will be available at `/.netlify/functions/send-contact`.

**Note:** If using Netlify, update the fetch URL in `Contact.tsx`:
```typescript
const response = await fetch('/.netlify/functions/send-contact', {
```

---

## Step 4: Install Dependencies

In your deployment platform or when building locally, ensure Resend is installed:

```bash
npm install resend
```

For TypeScript type checking with Vercel:
```bash
npm install -D @vercel/node
```

For Netlify:
```bash
npm install -D @netlify/functions
```

---

## Testing

### Local Development

Since the serverless function runs on your deployment platform, you have a few options for local testing:

1. **Use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel dev
   ```

2. **Use Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   netlify dev
   ```

3. **Mock the endpoint:** For local development, the form will show a "Failed to send" message (expected behavior without the backend).

### Production Testing

1. Deploy your site
2. Fill out the contact form
3. Check your inbox for the email
4. Check the Resend dashboard for delivery status

---

## Troubleshooting

### "Failed to send message" error

1. **Check API Key:** Ensure `RESEND_API_KEY` is set correctly
2. **Check Domain:** Ensure your `from` email uses a verified domain
3. **Check Logs:** Look at your platform's function logs for details

### Emails not arriving

1. Check spam folder
2. Verify the `to` email address in CONFIG
3. Check Resend dashboard for delivery status

### CORS errors

The functions include CORS headers. If you're still getting errors:
- Ensure the function is deployed correctly
- Check if your domain is correct in the CORS headers

---

## Security Notes

- The API key is stored as an environment variable (never in code)
- Server-side validation prevents malicious input
- HTML content is escaped to prevent XSS
- Input length is limited to prevent abuse

---

## Support

- [Resend Documentation](https://resend.com/docs)
- [Vercel Functions Docs](https://vercel.com/docs/functions)
- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
