import React from "react"
import { handleFormSubmission } from '../../functions/stripe-purchase'
import inventory from '../../static/inventory/services.json';


const Services = () => {
  const format = (amount, currency) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format((amount / 100).toFixed(2));



  return (
    <section
      sx={{
        mt: 5,
        '@media (min-width: 360px)': {
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (min-width: 500px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      }}
    >
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
            onSubmit={handleFormSubmission}
            sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'auto 50px' }}
          >
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

export default Services;