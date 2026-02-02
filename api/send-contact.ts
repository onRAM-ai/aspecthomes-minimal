/**
 * Vercel Serverless Function for Contact Form
 * 
 * This function handles contact form submissions and sends emails via Resend.
 * 
 * SETUP:
 * 1. Install resend: npm install resend
 * 2. Add RESEND_API_KEY to your Vercel environment variables
 * 3. Update the 'from' and 'to' email addresses below
 * 
 * For Netlify, see: netlify/functions/send-contact.ts
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration - Update these values for your domain
const CONFIG = {
  from: 'Contact Form <noreply@aspect-homes.com>',
  to: ['admin@aspect-homes.com'],
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers (adjust origin for production)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { name, email, phone, message } = req.body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 255);
    const sanitizedPhone = phone ? String(phone).trim().slice(0, 20) : null;
    const sanitizedMessage = message.trim().slice(0, 2000);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: CONFIG.from,
      to: CONFIG.to,
      subject: `New Contact Form Submission: ${sanitizedName}`,
      replyTo: sanitizedEmail,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; width: 100px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${escapeHtml(sanitizedName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">
                  <a href="mailto:${escapeHtml(sanitizedEmail)}" style="color: #0066cc;">${escapeHtml(sanitizedEmail)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${sanitizedPhone ? escapeHtml(sanitizedPhone) : '<em style="color: #666;">Not provided</em>'}</td>
              </tr>
            </table>
            
            <h3 style="color: #1a1a1a; margin-top: 30px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(sanitizedMessage)}</div>
            
            <p style="margin-top: 30px; font-size: 12px; color: #666;">
              This message was sent from the contact form on aspect-homes.com
            </p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}
