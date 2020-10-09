const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const services = require('../../static/inventory/services.json');

exports.handler = async ({ body }) => {
  const { sku } = JSON.parse(body);
  const service = services.find(s => s.sku === sku);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    line_items: [
      {
        name: service.name,
        description: service.description,
        images: [service.image],
        currency: service.currency,
      }
    ],
    success_url: `${process.env.URL}/success/`,
    cancel_url: `${process.env.URL}/palvelut/`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id }),
  };
};