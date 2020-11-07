const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY, {
  maxNetworkRetries: 2,
});
const sendgridMail = require('@sendgrid/mail');

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  // stripe webhooks constructEvent varmistaa
  // että tilaukset ovat ihmisten tekijöitä eikä bottien.
  // funktio tarvitsee stripe webhook salaisuuden.
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_TEST_SECRET,
    );
    // Stripesta otettu
    // koko funktio pyörii vain jos stripe menee läpi.
    // hence => session.completed.
    if (stripeEvent.type === 'checkout.session.completed') {
      // session on stripe tapahtuma, ja items on suoraan
      // stripen dokumenteistä revitty termi.
      const session = stripeEvent.data.object
      const items = session.display_items;
      const clientEmail = session.customer_email;

      const purchase = { items }
      const msg = {
        from: process.env.KULTAKAMMEN_EMAIL_ADDRESS,
        to: clientEmail,
        subject: 'Kiitos tilauksestasi! | Kultakämmen',
        text: JSON.stringify(purchase, null, 2),
      };
      await sendgridMail.send(msg);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.log(`Stripe webhook failed with ${err}`);
    return {
      statusCode: 400,
      body: `WebHook error: ${error.message} `,
    };
  }
  // TODO read out the line items
  // TODO send email - Hanki Sendgrid APi, jotta saat dataa.
  // Front-end mastercourse JamStack, selvitä sieltä.
};