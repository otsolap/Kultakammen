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
    <div className="grids col-1 sm-2 lg-3">
      {inventory.map((service) => (

        <div className="service-card" key={service.sku}>
          <img className="featured-image"
            src={service.image}
            alt={service.name}
          />
          <h2 className="title">{service.name}</h2>
          <p>{service.description}</p>
          <p className="service-card-costs"
          >
            {format(service.amount, service.currency)}
          </p>
          <form className="service-card-submit"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="sku" value={service.sku} />
            <button className="button osta palveluni" type="submit">
              Osta
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Services;