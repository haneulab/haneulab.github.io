import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

type SendEmailAction = (req: Request, res: Response) => Promise<JSON>;
const sendEmail: SendEmailAction = async (req: Request, res: Response) => {
  const {
    subject,
    fullname,
    email,
    message,
  }: {
    subject: ReadableStream<Uint8Array> | null;
    fullname: ReadableStream<Uint8Array> | null;
    email: ReadableStream<Uint8Array> | null;
    message: ReadableStream<Uint8Array> | null;
  } = req.body as never;
  try {
    await sendgrid.send({
      to: 'hanchoi@ucdavis.edu',
      from: 'hanchoi@ucdavis.edu',
      subject: `HaneuLab New Email : ${subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>HaneuLab | Inquiry Email</title>
        <meta name="description" content="HaneuLab Email Sender Applicatio">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      
      <body>
            <div id="haneulab-email-app"
            style="min-height: 100vh;justify-content: center;align-items: center;gap: 20px;font-size: 16px;"
            >
            <h3 class="head-container"
            style="color: #222;font-weight: bold;margin-bottom: 0.5rem;font-size: 20px;"
            >HaneuLab Inquiry Message From ${fullname} </h3>
            <p class="subhead-container"
            style="font-family: sans-serif;display: block;font-size: 16px;margin-bottom: 1rem;color: #444;"
            >${fullname}'s email : <strong>${email}</strong></p>
            <div class="message-container"
            style="color: gray;font-size: 14px;line-height: 1.7;"
            >
            <p
            style="text-align:center;"
            >${message}</p>
            </div>
      </body>
      </html>`,
    });
    return res.json();
  } catch (error) {}
};
export default sendEmail;
