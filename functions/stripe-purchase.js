export async function handleFormSubmission(event) {
  // Formilla revimme kaikki tiedot itse lomakkeesta.
  // Joke on meidän inventory.
  const form = new FormData(event.target);
  // 
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
  const stripe = Stripe(response.publishableKey);

  const { error } = await stripe.redirectToCheckout({
    sessionId: response.sessionId,
  });

  if (error) {
    console.error(error);
  }
}
