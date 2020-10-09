import React from "react"
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentRequestButtonElement,
  useStripe,
} from '@stripe/react-stripe-js';
import inventory from '../../static/inventory/services.json';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const Services = () => {
  const stripe2 = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe2 || paymentRequest !== null) {
      return;
    }

    const request = stripe2.paymentRequest({
      country: 'FI',
      currency: 'eur',
      total: {
        label: 'Kultakämmen palvelut',
        amount: 99900,
      },
      requestPayerName: false,
      requestPayerEmail: false,
    });

    request.canMakePayment().then((result) => {
      console.log({ result });
      if (result) {
        setPaymentRequest(request);
      }
    });
  }, [stripe2, paymentRequest]);

  const format = (amount, currency) =>
    // Intl.NumberFormat MDN: 
    // Konstrukti, joka muokkaa numeron kieliformaatin perusteella.
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format((amount / 100).toFixed(2));

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Formdatasta saadaan formaatin data irti
    // eli me saamme tuotteen tiedot irti tästä.
    // Niin checkouttiin tulee oikeat datat.
    const form = new FormData(event.target);

    const data = {
      sku: form.get('sku'),
      quantity: Number(form.get('quantity')),
    };

    // Netlify cloud-funktio!
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    // ottaa sessionID 
    // jonka tarvitsemme redirect
    // checkouttiin.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <section
      sx={{
        mt: 5,
        '@media (min-width: 360px)': {
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (min-width: 500px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      }}
    >
      {paymentRequest && (
        <p>
          Osta
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </p>
      )}

      {inventory.map((service) => (
        <div key={service.sku} sx={{ mt: 3 }}>
          <img
            sx={{
              width: '100%',
            }}
            src={service.image}
            alt={service.name}
          />
          <h2 sx={{ fontSize: 3 }}>{service.name}</h2>
          <p sx={{ fontSize: 1 }}>{service.description}</p>
          <p
            sx={{
              fontSize: 3,
              fontWeight: 700,
              m: 0,
              mb: 2,
              textAlign: 'right',
            }}
          >
            {format(service.amount, service.currency)}
          </p>
          <form
            onSubmit={handleSubmit}
            sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'auto 50px' }}
          >
            <label
              htmlFor="quantity"
              sx={{ fontSize: 1, fontWeight: 600, p: 2, textAlign: 'right' }}
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={1}
              min="1"
              max="10"
              sx={{
                border: '1px solid',
                borderColor: 'primary',
                borderRadius: 2,
                fontSize: 1,
                p: 2,
              }}
            />
            <input type="hidden" name="sku" value={service.sku} />
            <button
              sx={{
                bg: 'primary',
                border: 'none',
                borderRadius: 2,
                color: 'nav',
                fontFamily: 'heading',
                fontSize: 2,
                fontWeight: 800,
                gridColumn: '1 / 3',
                p: 2,
                textShadow: `
                  0.05em 0.05em #4F4F4F99,
                  0.05em -0.05em #4F4F4F99,
                  -0.05em 0.05em #4F4F4F99,
                  -0.05em -0.05em #4F4F4F99
                `,
                textTransform: 'uppercase',
              }}
            >
              Buy Now
            </button>
          </form>
        </div>
      ))}
    </section>
  );
};

const WrappedServices = () => {
  return (
    <Elements stripe={stripePromise}>
      <Services />
    </Elements>
  );
};

export default WrappedServices;