

## Plan: Configure Contact Form for Resend (GitHub-Based Deployment)

### Overview
Prepare the contact form to work with Resend by updating the frontend code and providing the serverless function code you'll need for your deployment platform.

### What You'll Need to Set Up Externally

1. **Resend Account**
   - Sign up at https://resend.com
   - Verify your domain at https://resend.com/domains (e.g., `aspect-homes.com`)
   - Create an API key at https://resend.com/api-keys

2. **Your Deployment Platform** (Vercel, Netlify, etc.)
   - Add `RESEND_API_KEY` as an environment variable
   - Deploy the serverless function (code provided below)

---

### Changes I'll Make

#### 1. Update Contact Form (`src/components/Contact.tsx`)

- Add loading state while sending
- Add proper error handling
- Call the serverless function endpoint
- Add input validation with Zod for security

```typescript
// Key changes to handleSubmit:
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/send-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) throw new Error('Failed to send');
    
    toast({ title: "Message sent!", description: "..." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    toast({ title: "Failed to send message", variant: "destructive" });
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 2. Create Serverless Function Template

I'll create a template file at `api/send-contact.ts` that you can use with Vercel or adapt for other platforms:

```typescript
// api/send-contact.ts (for Vercel)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <noreply@aspect-homes.com>',
      to: ['admin@aspect-homes.com'],
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

---

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/components/Contact.tsx` | Modify | Add async submission, loading state, error handling |
| `api/send-contact.ts` | Create | Vercel serverless function template |
| `README-RESEND.md` | Create | Setup instructions for your deployment |

---

### Deployment Setup Instructions

After I make these changes, you'll need to:

1. **In Resend:**
   - Verify `aspect-homes.com` domain
   - Create an API key

2. **In your hosting platform (e.g., Vercel):**
   - Add environment variable: `RESEND_API_KEY=re_xxxxx`
   - The `/api/send-contact.ts` file will automatically become a serverless endpoint

3. **If using Netlify instead:**
   - Move the function to `netlify/functions/send-contact.ts`
   - Adjust the import syntax slightly (I'll include both versions)

