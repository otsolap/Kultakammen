import { loadStripe } from "@stripe/stripe-js"
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("<YOUR STRIPE PUBLISHABLE KEY>")
  }
  return stripePromise
}