import { Resend } from 'resend'
let process = Node.process

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async () => {
        try {
            const data = await resend.emails.send({
                from: 'info@parmjeetmishra.com',
                to: 'iamparmjeetmishra@gmail.com',
                subject: 'Hello World',
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
            });
            console.log(data)
        } catch (err) {
            console.log(`error from email file: ${err}`)
        }
}

export default sendEmail;