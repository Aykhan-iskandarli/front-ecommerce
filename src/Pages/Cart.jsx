import React, { useEffect } from "react";
import "./style/cart.css";
import Page from "../components/Page/Page";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/actions/cartActions";
import Rating from "../components/Rating/Rating";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Cart = ({ match, location,history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const Checkout =(e)=>{
    e.preventDefault()
    history.push("/shipping")
  }
  return (
    <>
        <motion.div
        initial={{'opacity':0}}
        animate={{'opacity':1}}
        exit={{'opacity':0}} className="cart_section">
        <Page className="cart-page">
          {cartItems.length === 0 ? (
            <div className="gotoshopping">
              {" "}
              <h1>Cart is empty</h1>{" "}
              <span>
                <Link to="/product">Go to Shopping</Link>
              </span>{" "}
            </div>
          ) : (
            <div>
              <h1>YOUR BAG</h1>
              <div className="c">
                <div className="cart-content">
                  {cartItems.map((cart) => (
                    <div key={cart.product} className="cart">
                      <div className="cart-img">
                        <img src={cart.image} alt="" />
                      </div>
                      <div className="cart-info">
                        <h3>{cart.name}</h3>
                        <div className="cart-rating">
                          <Rating
                            className="cart-rating"
                            rating={cart.rating}
                            numReviews={cart.numReviews}
                          />
                        </div>
                        <div className="cart-price">
                          <b>Price:</b>
                          <b>${cart.price}</b>
                        </div>
                      </div>
                      <div className="cart-stock">
                        <select
                          value={cart.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(cart.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(cart.countInStock).keys()].map((c) => (
                            <option value={c + 1}>{c + 1}</option>
                          ))}
                        </select>
                      </div>
                      <div className="cart-delete">
                        <button
                          className="btn delet-btn"
                          onClick={() => removeCartHandler(cart.product)}
                        >
                          {" "}
                          <TiDelete />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {cartItems.length > 0 && (
                  <div className="cart-checkout">
                    <h4>ORDER SUMMARY</h4>
                    <div className="cart-subtotal">
                      <span>SubTotal:</span>{" "}
                      <span>
                        {" "}
                        ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                      </span>
                    </div>
                    <div className="cart-total">
                      <span>SubTotal:</span>{" "}
                      <span>
                        {" "}
                        ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                      </span>
                    </div>
                    <div className="cart-btn">
                      <button className="btn btn-cart" onClick={Checkout}>checkout now</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Page>
      </motion.div>
    </>
  );
};

export default Cart;
