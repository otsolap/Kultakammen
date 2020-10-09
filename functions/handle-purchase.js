const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.handler = async ({ headers, body }) => {
  const sig = headers['stripe-signature'];
  // tässä scopen takia, voimme käyttää eventtia myöhemmin uudestaan)
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      endpointSecret);
  } catch (error) {
    return {
      statusCode: 400,
      body: `WebHook error: ${error.message}`,
    };
  }
  // Stripesta otettu
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    console.log(session);
  }


  // TODO read out the line items
  // TODO send email - Hanki Sendgrid APi, jotta saat dataa.
  // Front-end mastercourse JamStack, selvitä sieltä.

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};