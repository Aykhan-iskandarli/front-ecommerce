import React from 'react'
import "./checkout.css"

export const CheckoutSteps = ({step1,step2,step3,step4}) => {
    return (

                <div className="checkout-steps">
                    <div className={step1? "activeStep":""}>Sign-In</div>
                    <div className={step2? "activeStep":""}>Shipping</div>
                    <div className={step3? "activeStep":""}>Payment</div>
                    <div className={step4? "activeStep":""}>Place Order</div>
                </div>
         
    )
}
