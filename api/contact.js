const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { from_name, from_email, title, phone, time, message } = req.body;

    // Validation
    if (!from_name || !from_email || !title || !message) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form: ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${from_name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${from_email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Best Time:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${time}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${title}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #000; margin: 10px 0;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from your website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: from_email
    };

    await transporter.sendMail(mailOptions);
    
    console.log(`✅ Contact form submitted by ${from_name} (${from_email})`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      message: error.message 
    });
  }
}