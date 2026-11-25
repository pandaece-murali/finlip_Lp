import { NextResponse, after } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";

// Reuse nodemailer transporter instance across requests with connection pooling
let cachedTransporter: Transporter | null = null;

function getTransporter(user: string, pass: string) {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
    });
  }
  return cachedTransporter;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email = "Not provided",
      city = "Not provided",
      course = "Finlip Market Masterclass",
      experience = "Beginner (0-1 yrs)",
      source = "Website Form",
    } = body;

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const passId = "FLIP-PASS-" + Math.floor(1000 + Math.random() * 9000);
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const waLink = `https://wa.me/91${cleanPhone.slice(-10)}`;
    const receiverEmail = process.env.LEAD_RECEIVER_EMAIL || process.env.GMAIL_USER || "finlipsecurity@gmail.com";

    const mailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 4px 0 0; font-size: 12px; opacity: 0.9; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: #ecfdf5; color: #047857; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 9999px; border: 1px solid #a7f3d0; margin-bottom: 16px; }
    .lead-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    .lead-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
    .lead-table td.label { width: 35%; color: #64748b; font-weight: 600; }
    .lead-table td.value { color: #0f172a; font-weight: 700; }
    .actions { margin-top: 24px; display: flex; gap: 10px; }
    .btn { display: inline-block; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; text-decoration: none; text-align: center; }
    .btn-wa { background: #25D366; color: #ffffff; }
    .btn-call { background: #0f172a; color: #ffffff; }
    .footer { background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>FINLIP SECURITY ACADEMY</h1>
      <p>NEW STUDENT ADMISSIONS REGISTRATION</p>
    </div>
    <div class="content">
      <span class="badge">Session Pass: ${passId}</span>
      <h2 style="margin: 0 0 12px; color: #0f172a; font-size: 18px;">New Lead Received!</h2>
      <p style="margin: 0 0 16px; font-size: 13px; color: #475569;">A prospective trader has registered for a free live masterclass demo seat.</p>
      
      <table class="lead-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">WhatsApp Phone</td>
          <td class="value"><a href="tel:${cleanPhone}" style="color: #059669; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">City / Region</td>
          <td class="value">${city}</td>
        </tr>
        <tr>
          <td class="label">Selected Program</td>
          <td class="value" style="color: #059669;">${course}</td>
        </tr>
        <tr>
          <td class="label">Trading Experience</td>
          <td class="value">${experience}</td>
        </tr>
        <tr>
          <td class="label">Registration Source</td>
          <td class="value">${source}</td>
        </tr>
        <tr>
          <td class="label">Time (IST)</td>
          <td class="value">${timestamp}</td>
        </tr>
      </table>

      <div style="margin-top: 24px; text-align: center;">
        <a href="${waLink}" class="btn btn-wa" target="_blank" style="margin-right: 8px;">Message on WhatsApp</a>
        <a href="tel:${cleanPhone}" class="btn btn-call">Call Candidate</a>
      </div>
    </div>
    <div class="footer">
      Finlip Security Lead Engine • Lead delivered to ${receiverEmail}
    </div>
  </div>
</body>
</html>
`;

    // Asynchronous background execution: runs in parallel via Promise.allSettled without delaying the response
    const runBackgroundTasks = async () => {
      const emailTask = async () => {
        const gmailUser = process.env.GMAIL_USER;
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

        if (gmailUser && gmailAppPassword) {
          try {
            const transporter = getTransporter(gmailUser, gmailAppPassword);
            await transporter.sendMail({
              from: `"Finlip Security Leads" <${gmailUser}>`,
              to: receiverEmail,
              replyTo: email && email.includes("@") ? email : undefined,
              subject: `🔥 New Lead: ${name} - ${course} (${city})`,
              text: `New Lead Details:\n\nPass ID: ${passId}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nCourse: ${course}\nExperience: ${experience}\nSource: ${source}\nTimestamp: ${timestamp}\nWhatsApp: ${waLink}`,
              html: mailHtml,
            });
            console.log(`[Lead API] Email dispatched successfully for ${name} (${passId})`);
          } catch (err: unknown) {
            console.error("[Lead API] Nodemailer Gmail SMTP Error:", err);
          }
        } else {
          console.warn("[Lead API] Gmail credentials not configured.");
        }
      };

      const sheetTask = async () => {
        const googleSheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;
        if (googleSheetWebhook) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);

            const sheetResponse = await fetch(googleSheetWebhook, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                timestamp,
                passId,
                name,
                phone,
                email,
                city,
                course,
                experience,
                source,
                waLink,
              }),
              signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (sheetResponse.ok) {
              console.log(`[Lead API] Google Sheet updated successfully for ${name}`);
            } else {
              console.warn(`[Lead API] Google Sheet returned status ${sheetResponse.status}`);
            }
          } catch (err: unknown) {
            console.error("[Lead API] Google Sheet Webhook Error:", err);
          }
        }
      };

      await Promise.allSettled([emailTask(), sheetTask()]);
    };

    if (typeof after === "function") {
      after(async () => {
        await runBackgroundTasks();
      });
    } else {
      runBackgroundTasks().catch((err) =>
        console.error("[Lead API] Background execution error:", err)
      );
    }

    // Return instant success response to client (< 50ms)
    return NextResponse.json({
      success: true,
      passId,
      message: "Lead received and processing",
    });
  } catch (error: unknown) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
