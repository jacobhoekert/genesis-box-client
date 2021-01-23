const nodemailer = require('nodemailer');

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    let {firstName, lastName, email, topic, message, type} = req.body;

    let subjectContent = '';
    let content = '';
    // if it is a prayer/testimony form (because that form has a type field)
    if (req.body.type) {
      content = `name: ${firstName} ${lastName} \n email: ${email} \n type: ${type} \n message: ${message}`
      if (req.body.type == "prayer") {
        subjectContent = `Website Prayer Message from ${firstName} ${lastName} <${email}>`
      } else {
        subjectContent = `Website Testimony Message from ${firstName} ${lastName} <${email}>`
      }
    // else it is a contact us message form
    } else {
      subjectContent = `Website Connect Message from ${firstName} ${lastName} <${email}>`
      content = `name: ${firstName} ${lastName} \n email: ${email} \n topic: ${topic} \n message: ${message}`
    }


    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: 'thegenesisbox@gmail.com',
      subject: subjectContent,
      text: content
    }

    return transporter.sendMail(mail, (err, info) => {
      if(err){
        return res.send(err.toString());
      }
      return res.send('Email sent');
    });
};