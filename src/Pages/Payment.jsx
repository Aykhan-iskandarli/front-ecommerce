import React,{useState} from "react";
import "./style/payment.css";
import { CheckoutSteps } from "../components/CheckoutSteps/CheckoutSteps";
import Page from "../components/Page/Page";
import Input from "../components/Input/input";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../Redux/actions/cartActions";
import { motion } from "framer-motion"
const Payment = ({history}) => {
    const [paymentMethod,setPaymentMethod] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push("/placeorder")
    }
  return (
    <motion.div
    initial={{'opacity':0}}
    animate={{'opacity':1}}
    exit={{'opacity':0}} className="payment-section">
      <Page>
        <CheckoutSteps step1 step2 step3 />

        <form className="payment" onSubmit={submitHandler}>
          <div className="payment-div">
            <h1 className="payment-text">Payment Method</h1>
            <div className="form-group">
              <div className="payment-form">
                <Input 
                type="radio"
                id="paypal"
                value={paymentMethod}
                checked
                name="paymentMethod"
                required
                onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="form-group">
              <div className="payment-form">
                <Input 
                type="radio" 
                id="stripe"
                value={paymentMethod}
                name="paymentMethod"
                checked
                required
                onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label htmlFor="stripe">Stripe</label>
              </div>
            </div>
            <div className="payment-button">
              <button className="btn payment-btn">Submit</button>
            </div>
          </div>
        </form>
      </Page>
    </motion.div>
  );
};

export default Payment;
