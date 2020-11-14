import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GErb8AcNYxu8K3wsPQF7NVxF009Wh7dI4h';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment Error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you are using the provided payment card.'
      );
    });
  }
  return (
    <StripeCheckout
     label='Pay Now'
     name='Komeleon Clothing'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
    
    />
  )
};

export default StripeCheckoutButton;