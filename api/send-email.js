import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dRJrHuWM_KVPxLS4S66nvycEUian652wG');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    
    // Honeypot check
    if (body.botField) {
      return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    }
    let detailsText = '';
    
    // Construct text out of the body dynamically
    for (const [key, value] of Object.entries(body)) {
      if (key !== 'formType' && value) {
        // Format the key (e.g., camelCase to Camel Case)
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase());
          
        detailsText += `${formattedKey}: ${value}\n`;
      }
    }

    const formTypeLabel = body.formType 
      ? body.formType.charAt(0).toUpperCase() + body.formType.slice(1) 
      : 'Contact';

    const textContent = `Greetings by HVEV,

Thanks for reaching regarding the ${formTypeLabel} form submission. Please confirm the details filled by you:

${detailsText}
We will try to reach you shortly.`;

    const userEmail = body.email;

    if (!userEmail) {
      return res.status(400).json({ error: 'Email address is required in the form data' });
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;
    if (googleScriptUrl) {
      try {
        await fetch(googleScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      } catch (scriptError) {
        console.error('Failed to send data to Google Apps Script:', scriptError);
        // Continue even if sheet saving fails, to ensure email is still sent
      }
    }

    const data = await resend.emails.send({
      from: 'HVEV <akash@kisaanmitra.in>',
      to: userEmail,
      bcc: 'akash@kisaanmitra.in',
      subject: `Confirmation: New ${formTypeLabel} Form Submission`,
      text: textContent
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
