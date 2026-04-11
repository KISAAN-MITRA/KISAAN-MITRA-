import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dRJrHuWM_KVPxLS4S66nvycEUian652wG');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    let detailsHtml = '';
    
    // Construct HTML out of the body dynamically
    for (const [key, value] of Object.entries(body)) {
      if (key !== 'formType' && value) {
        // Format the key (e.g., camelCase to Camel Case)
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase());
          
        detailsHtml += `<p style="margin: 5px 0;"><strong>${formattedKey}:</strong> ${value}</p>`;
      }
    }

    const formTypeLabel = body.formType 
      ? body.formType.charAt(0).toUpperCase() + body.formType.slice(1) 
      : 'Contact';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #15803d; text-align: center; border-bottom: 2px solid #15803d; padding-bottom: 10px;">
          New Form Submission: ${formTypeLabel}
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h3 style="margin-top: 0; color: #111827;">Submission Details</h3>
          ${detailsHtml}
        </div>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #15803d;">
          <h3 style="margin-top: 0; color: #15803d;">About HVEV</h3>
          <p style="line-height: 1.5; margin-bottom: 0;">
            HVEV (formerly Kisaan Mitra) is revolutionizing the agricultural landscape by blending traditional farming methods with cutting-edge technology. We empower farmers with next-generation smart tools and modular farming platforms, maximizing yields and ensuring sustainable growth. Our commitment is to deliver affordable, high-efficiency equipment tailored for modern farming needs.
          </p>
        </div>
        
        <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">
          This is an automated email sent from the HVEV website.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'akash@kisaanmitra.in',
      subject: `New ${formTypeLabel} Form Submission`,
      html: htmlContent
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
