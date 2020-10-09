const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.handler = async ({ headers, body }) => {
  let StripeEvent;
  // stripe webhooks constructEvent varmistaa
  // että tilaukset ovat ihmisten tekijöitä eikä bottien.
  // funktio tarvitsee stripe webhook salaisuuden.
  try {
    StripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      endpointSecret,
    );
    // Stripesta otettu
    if (StripeEvent.type === 'checkout.session.completed') {
      const session = StripeEvent.data.object
      console.log(session);
    } return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `WebHook error: ${error.message}`,
    };
  }
  // TODO read out the line items
  // TODO send email - Hanki Sendgrid APi, jotta saat dataa.
  // Front-end mastercourse JamStack, selvitä sieltä.
};