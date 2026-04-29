import { NextRequest, NextResponse } from "next/server";

const serviceLabels: Record<string, string> = {
  sales: "Refurbished Trampoline Purchase",
  installation: "Installation",
  repair: "Repair",
  relocation: "Relocation",
  quote: "General Quote Request",
  other: "Other / Not Sure",
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, serviceType, message } = await req.json();

    if (!name || !email || !serviceType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey && apiKey !== "re_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "The Bay Area Backyard Pros <noreply@bayareabackyardpros.com>",
        to: ["nate@bayareabackyardpros.com"],
        replyTo: email,
        subject: `New inquiry: ${serviceLabels[serviceType] ?? serviceType} — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #1a2e1a; margin-bottom: 24px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #555;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${serviceLabels[serviceType] ?? serviceType}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
              <div style="background: #f9f7f4; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
            </div>
            <p style="margin-top: 24px; color: #999; font-size: 12px;">
              Sent from the contact form at bayareabackyardpros.com
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
