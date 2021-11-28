import React, {  useEffect } from "react";
import "./style/order.css";
import {PayPalButton} from "react-paypal-button-v2"
import { useDispatch, useSelector } from "react-redux";
import Page from "../components/Page/Page";
import { detailsOrder } from "../Redux/actions/orderAction";
import Loading from "../components/Loading/Loading";
// import axios from "axios";
import Alert from "../components/Alert/Alert";
import { motion } from "framer-motion"


const OrderScreen = ({ history, match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);

  // const [sdkReady, setSdkReady] = useState(false);
  console.log(orderDetails);
  const { order, loading, error } = orderDetails;
 
  useEffect(() => {
    dispatch(detailsOrder(orderId));
    /* const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order._id) {
    
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  */
  }, [dispatch, orderId ]);
  const successPaymentHandler =()=>{

  }
  return loading ? (
    <Loading></Loading>
  ) : error ? (
    <Alert className="alert-danger"> {error}</Alert>
  ) : (
    <motion.div
    initial={{'opacity':0}}
    animate={{'opacity':1}}
    exit={{'opacity':0}} className="order">
      <Page>
        <div className="order-div">
          <div className="order-card">
            <div className="card-body">
              <h1>Order {order._id}</h1>
              <div className="name-address">
                <p>
                  {" "}
                  <b>Name:</b> {order.shippingAddress.name}
                </p>
                <p>
                  {" "}
                  <b>Address:</b> {order.shippingAddress.address},
                  {order.shippingAddress.city}, {order.shippingAddress.postCode}
                  ,{order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <h1>Delivered at {order.deliveredAt} </h1>
                ) : (
                    <Alert className="alert-danger"> Not Delivered</Alert>
                )}
              </div>
            </div>
            <div className="card-body">
              <div className="name-address">
                <h2>Payment</h2>
                <p>
                  <b>Method:</b> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <h1>Paid at {order.paidAt} </h1>
                ) : (
                    <Alert className="alert-danger"> Not Paid</Alert>
                )}
              </div>
            </div>
            <div className="card-body">
              <h2>Order Items</h2>

              {order.orderItems.map((order) => (
                <div key={order.product} className="order-items">
                  <div className="order-img">
                    <img src={order.image} alt="" />
                  </div>
                  <div className="order-info">
                    <h3>{order.name}</h3>
                    <div className="order-rating"></div>
                    <div className="order-price">
                      <p>Price: </p>{" "}
                      <b>
                        {order.qty} x ${order.price} = $
                        {order.qty * order.price}
                      </b>
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
              <span>${order.itemsPrice}</span>
            </div>
            <div className="order-shipping">
              <span>Shipping:</span>
              <span>${order.shippingPrice}</span>
            </div>
            <div className="order-tax">
              <span>Tax:</span>
              <span>${order.taxPrice}</span>
            </div>
            <div className="order-total">
              <span>Order Total:</span>
              <span>${order.totalPrice}</span>
            </div>
                  <div>
               
                        <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}>
                        </PayPalButton>
                    
                   </div>
            
          </div>
     
        </div>
      </Page>
    </motion.div>
  );
};

export default OrderScreen;
