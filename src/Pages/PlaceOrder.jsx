import React, { useEffect } from 'react'
import "./style/order.css"
import { CheckoutSteps } from '../components/CheckoutSteps/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import Page from '../components/Page/Page'
import Loading from "../components/Loading/Loading"
import Rating from '../components/Rating/Rating'
import { createOrder } from '../Redux/actions/orderAction'
import { ORDER_CREATE_RESET } from '../Redux/constants/orderConstant'
import Alert from '../components/Alert/Alert'
import { motion } from "framer-motion"

const PlaceOrder = ({history}) => {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    // console.log(cart,"cart")
    if(!cart.paymentMethod){
        history.push("/payment")
    }
    const orderCreate = useSelector(state=>state.orderCreate)
    const {loading,success, error, order} = orderCreate
    console.log(orderCreate,"order")
    const toPrice = num=>Number(num.toFixed(2))
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a,c) => a+c.qty * c.price,0));
    cart.shippingPrice = cart.cartItems>100? toPrice(0): toPrice(10)
    cart.taxPrice=toPrice(0.06 * cart.itemsPrice)
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice
    // console.log(cart.itemsPrice)
    useEffect(()=>{
      if(success){
        history.push(`/order/${order._id}`)
        dispatch({type:ORDER_CREATE_RESET})
      }
    },[dispatch,success,history,order])

    const placeOrderHandler = ()=>{
      dispatch(createOrder({...cart, orderItems:cart.cartItems}))
    }
    return (
      <motion.div
      initial={{'opacity':0}}
      animate={{'opacity':1}}
      exit={{'opacity':0}} className="order">
            <Page >
                <CheckoutSteps step1 step2 step3 step4/>
              <div className="order-div">
              <div className="order-card">
                    <div className="card-body">
                  
                        <h1>Shipping</h1>
                        <div className="name-address">
                           <p> <b>Name:</b> {cart.shippingAddress.name}</p>
                           <p> <b>Address:</b> {cart.shippingAddress.address},
                            {cart.shippingAddress.city}, {cart.shippingAddress.postCode},
                            {cart.shippingAddress.country}
                            </p>
                            
                        </div>
                    
                    </div>
                    <div className="card-body">
                        <div className="name-address">
                        <h2>Payment</h2>
                        <p>
                            <b>Method:</b> {cart.paymentMethod}
                        </p>
                        </div>
                        
                    </div>
                    <div className="card-body">
                        <h2>Order Items</h2>
                      
                  {cart.cartItems.map((cart) => (
                    <div key={cart.product} className="order-items">
                      <div className="order-img">
                        <img src={cart.image} alt="" />
                      </div>
                      <div className="order-info">
                        <h3>{cart.name}</h3>
                        <div className="order-rating">
                          <Rating
                            className="order-rating"
                            rating={cart.rating}
                            numReviews={cart.numReviews}
                          />
                        </div>
                        <div className="order-price">
                          <p>Price: </p>{" "}
                          <b>{cart.qty} x ${cart.price} =  ${cart.qty* cart.price}</b>
                        </div>
                      </div>
                    </div>
                  ))}
                
                    </div>
                 
                </div>
                <div className="order-checkout">
                    <h4>ORDER SUMMARY</h4>
                    <div className="order-item">
                      <span>Items:</span>
                      <span>
                      ${cart.itemsPrice}
                      </span>
                    </div>
                    <div className="order-shipping">
                      <span>Shipping:</span>
                      <span>
                      ${cart.shippingPrice}
                      </span>
                    </div>
                    <div className="order-tax">
                      <span>Tax:</span>
                      <span>
                      ${cart.taxPrice}
                      </span>
                    </div>
                    <div className="order-total">
                      <span>Order Total:</span>
                      <span>
                      ${cart.totalPrice}
                      </span>
                    </div>
                    <div className="order-btn">
                      <button className="btn btn-order" onClick={placeOrderHandler}>Place order</button>
                    </div>
                    { loading&& <Loading/> }
                    { error&& <Alert className="alert-danger"> {error}</Alert> }
                  </div>
              </div>
               
            </Page>
        </motion.div>
    )
}

export default PlaceOrder
