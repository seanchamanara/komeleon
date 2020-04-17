import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GErb8AcNYxu8K3wsPQF7NVxF009Wh7dI4h';

  const onToken = token => {
    console.log(token);
    alert('Payment Success');
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