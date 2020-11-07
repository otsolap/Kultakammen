const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY,
  KULTAKAMMEN_EMAIL_NAME,
  KULTAKAMMEN_EMAIL_ADDRESS }
  = process.env

exports.handler = async (event, context, callback) => {

  const payload = JSON.parse(event.body)
  const { email } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)


  const msg = {
    to: email,
    name: KULTAKAMMEN_EMAIL_NAME,
    from: KULTAKAMMEN_EMAIL_ADDRESS,
    subject: 'Kiitos yhteydenotosta | Kultakämmen',
    html: `Kiitos viestistäsi! Lupaan palata viestiisi viikon sisällä. Ystävällisin, Otso.`
  };

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Message sent"
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};