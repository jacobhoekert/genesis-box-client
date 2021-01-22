const nodemailer = require('nodemailer');
const { GMAIL_USERNAME, GMAIL_PASSWORD} = require('../../config/keys');

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USERNAME,
        pass: GMAIL_PASSWORD
      }
    });

    let {firstName, lastName, email, message} = req.body;
    let content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message}`

    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: 'thegenesisbox@gmail.com',
      subject: `Website Contact Form Message from ${firstName} ${lastName} <${email}>`,
      text: content
    }

    return transporter.sendMail(mail, (err, info) => {
      if(err){
        return res.send(err.toString());
      }
      return res.send('Email sent');
    });
};