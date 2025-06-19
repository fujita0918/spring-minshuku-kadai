const stripe = Stripe('pk_test_51RLyjQQ5pSbhhYlH0FtngH8Jm2PORRedP1No1SwFqHZOqZaqO7Z4EtjLHlGjlUCujbeIw55f30oYZ6Xw6A82p9xs00sNdt6JbL');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});