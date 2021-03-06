const nodemailer = require('nodemailer');

// Can be used for many things
const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: 'sonljzx@gmail.com',
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transporter.sendMail(mailOptions, function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}

module.exports = sendEmail;