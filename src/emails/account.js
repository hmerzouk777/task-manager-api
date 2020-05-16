const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from:'hammou.merzouk@gmail.com',
        subject: 'Tanks forjoining in!',
        text : `Welcome to the app, ${name}. Met me know how you get along with the app.`
    }
    
    sgMail.send(msg)
}

const sendCancelationEmail  = (email, name) => {
    const msg = {
        to: email,
        from:'hammou.merzouk@gmail.com',
        subject: 'Sorry to see you go!',
        text : `Goodbye, ${name}. I hope see you back sometime soon.`
    }
    
    sgMail.send(msg)
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
