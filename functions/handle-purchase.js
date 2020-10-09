const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body, headers }) => {
  // stripe webhooks constructEvent varmistaa
  // että tilaukset ovat ihmisten tekijöitä eikä bottien.
  // funktio tarvitsee stripe webhook salaisuuden.
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET,
    );
    // Stripesta otettu
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object
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