import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ message: 'Server email credentials are not configured' }, { status: 500 });
    }

    // Configure the nodemailer service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Options for the email we are going to receive
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // The message is sent TO your own email 
      replyTo: email,             // This lets you quickly reply back to the user's email
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile || 'Not provided'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #00f5ff, #bf00ff); padding: 30px 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">New Inquiry Received</h2>
          </div>
          
          <div style="padding: 40px 30px; background-color: #ffffff;">
            
            <!-- Contact Info Card -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #00f5ff; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);">
              <h3 style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 15px 0;">Contact Details</h3>
              
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80" style="padding-bottom: 12px; color: #94a3b8; font-size: 14px; font-weight: 500;">Name:</td>
                  <td style="padding-bottom: 12px; color: #0f172a; font-size: 15px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px; color: #94a3b8; font-size: 14px; font-weight: 500;">Email:</td>
                  <td style="padding-bottom: 12px; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #bf00ff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-size: 14px; font-weight: 500;">Mobile:</td>
                  <td style="color: #0f172a; font-size: 15px; font-weight: 600;">${mobile || '<span style="color: #cbd5e1; font-weight: 400;">Not provided</span>'}</td>
                </tr>
              </table>
            </div>

            <!-- Message Block -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; border-left: 4px solid #bf00ff; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);">
              <h3 style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 15px 0;">Client Message</h3>
              <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap; word-break: break-word;">${message}</p>
            </div>
            
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">Sent dynamically from your <strong>Portfolio Application</strong></p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}