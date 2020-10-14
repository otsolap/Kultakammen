import React from "react"
import { loadStripe } from '@stripe/stripe-js';
import inventory from '../../static/inventory/services.json';
// Tällä varmistamme että Stripe on sivussamme ja lataantunut.
// loadStripe => lataa stripen tähän sivulle.
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_TEST_PUBLISHABLE_KEY);

const Services = () => {
  const format = (amount, currency) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format((amount / 100).toFixed(2));

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Formilla revimme kaikki tiedot itse lomakkeesta.
    // Joke on meidän inventory.
    const form = new FormData(event.target);
    // data => sku
    const data = {
      sku: form.get('sku'),
      quantity: Number(form.get('quantity')),
    };

    // TODO send to serverless function
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    // TODO get the session ID and redirect to checkout
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <section classname="services-page">
      {inventory.map((service) => (
        <div classname="service-card" key={service.sku} sx={{ mt: 3 }}>
          <img classname="service-image"
            src={service.image}
            alt={service.name}
          />
          <h2 sx={{ fontSize: 3 }}>{service.name}</h2>
          <p sx={{ fontSize: 1 }}>{service.description}</p>
          <p classname="service-card-costs"
          >
            {format(service.amount, service.currency)}
          </p>
          <form classname="service-card-submit"
            onSubmit={handleSubmit}
          >
            <label
              classname="service-quantity"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input classname="service-quantity-input"
              type="number"
              id="quantity"
              name="quantity"
              defaultValue={1}
              min="1"
              max="1"
            />
            <input type="hidden" name="sku" value={service.sku} />
            <button classname="service-submit"            >
              Osta
            </button>
          </form>
        </div>
      ))}
    </section>
  );
};

export default Services;