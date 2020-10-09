const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  maxNetworkRetries: 2,
});
const services = require('../static/inventory/services.json');

exports.handler = async ({ body }) => {
  const { sku } = JSON.parse(body);
  const service = services.find((s) => s.sku === sku);
  const validatedQuantity = quantity > 0 && quantity <= 1 ? quantity : 1;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    line_items: [
      {
        name: service.name,
        description: service.description,
        images: [service.images],
        currency: service.currency,
        quantity: validatedQuantity,
      },
    ],
    success_url: `${process.env.URL}/success/`,
    cancel_url: `${process.env.URL}/palvelut/`,
  });
  console.log('session is:', session)
  console.log(session.id)
  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.GATSBY_STRIPE_PUBLISHABLE_KEY
    }),
  };
};