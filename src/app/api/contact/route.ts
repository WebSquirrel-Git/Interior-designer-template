import {NextResponse} from 'next/server';
import nodemailer from "nodemailer";
export const runtime = 'nodejs';
export async function POST(req: Request) {
  try {
    const {name,telephone,email,location,surface,message} = await req.json();

 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'websquirrelcontact@gmail.com',
      subject: `FORMULARZ Interior Designer od ${name}`,
      html: `
            <font size="4"><font color="#ff9900" style="font-weight: bold;">Telefon:&nbsp;</font><font style="" color="#000000">
            ${telephone}</font></font>
            <div><font size="4" color="#ff9900"><b>Imię:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${name}</font></div>
            <div><font size="4" color="#ff9900"><b>E-mail:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${email}</font><font color="#000000" style="font-size: large;"></font></div>
             <div><font size="4" color="#ff9900"><b>Lokalizacja:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${location}</font><font color="#000000" style="font-size: large;"></font></div>
             <div><font size="4" color="#ff9900"><b>Powierzchnia:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${surface}</font><font color="#000000" style="font-size: large;"></font></div>
            <div><font size="4" color="#ff9900"><b>
            Wiadomość:&nbsp;<br></b></font></div>
            <div><font color="#000000" style="">
            ${message}</font></div>`,
    });

    return NextResponse.json({success: 'Wiadomość wysłana!'});
  } catch (error) {
    console.error('Błąd wysyłania e-maila:', error);
    return NextResponse.json(
      {error: 'Nie udało się wysłać wiadomości'},
      {status: 500}
    );
  }
}
