import React from "react"

import StripeCheckout from "react-stripe-checkout";


const ReactCheckoutStripe = ({price}) => {
    const priceForStripe = price * 100 ;
    const publishableKey = "pk_test_51JZWuwCO3Q7nF0vyNgJM2Jrwu0RDiWJnRXjCzI6vTo4ubfBWssL1SIknUl4kFMSVr7r0DP9Cq86rAMQ4XbZUO2rD00E3rvw8NO";
    
    const onToken = () => {
        alert("your Paymen Done!")
    }
    return(
        <StripeCheckout
            name="payment"
            shippingAddress
            billingAddress
            token = {onToken}
            panelLabel = {`Your Total is $${price}`}
            amount = { priceForStripe }
            stripeKey = { publishableKey }

        />
    )
}

export default ReactCheckoutStripe