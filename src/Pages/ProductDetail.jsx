import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading/Loading";
import Page from "../components/Page/Page";
import Rating from "../components/Rating/Rating";
import { detailsProduct } from "../Redux/actions/productAction";
import { motion } from "framer-motion"
const ProductDetail = ({ match,history }) => {
    const [qty, setQty] = useState(1)
  const productId = match.params.id;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, product, error } = productDetails;


  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler =()=>{
      history.push(`/cart/${productId}?qty=${qty}`)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <motion.div
        initial={{'opacity':0}}
        animate={{'opacity':1}}
        exit={{'opacity':0}} className="product_details">
          <h1>PRODUCT DETAILS</h1>
          <Page className="detail-page">
            <div className="product-detail">
              <div className="product-detail-img">
                <img src={product.image} alt="" />
              </div>
              <div className="product-detail-info">
                <p>
                  <b>Product:</b>
                  {product.name}
                </p>
                <p>{product.description}</p>
                <Rating className="product-rating"
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
                <div className="detail-status">
                  Status:{" "}
                  {product.countInStock > 1 ? (
                    <span className="status-in">Stock in </span>
                  ) : (
                    <span className="status-out">Stock out </span>
                  )}
                </div>
                <div className="detail-price">
                  <span>Price:</span>
                  <span className="">${product.price}</span>
                </div>
                {product.countInStock > 1 && (
                  <div className="flex">
                    <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                        {
                            [...Array(product.countInStock).keys()].map(x=>(
                                <option key={x+1} value={x+1}>{x+1}</option>
                            ))
                        }
                      
                    </select>
                    <div className="details-btn">
                      <button className="btn btn-details" onClick={addToCartHandler}>Add to Cart</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Page>
        </motion.div>
      )}
    </>
  );
};

export default ProductDetail;
