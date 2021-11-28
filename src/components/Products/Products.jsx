import React,{useEffect} from "react";
import "./products.css";
import { useDispatch,useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Page from "../Page/Page";
import { Link } from "react-router-dom";
import { listProducts } from "../../Redux/actions/productAction";
import Loading from "../Loading/Loading";
import Aos from "aos" 
import "aos/dist/aos.css"



const Products = () => {
const dispatch = useDispatch()
const productList = useSelector(state=>state.productList)


const {loading,error,products} = productList

  useEffect(() => {
    Aos.init({duration:1000})
    dispatch(listProducts())
  }, [dispatch])


  return (
  
    <div className="products-section">
      {
        loading?   <Loading/>  
        :
        error? <h1>{error}</h1>
        :
        (
      
          <Page>
                <h1>Products</h1>
          <div className="row product" data-aos="zoom-in">
            {products.map((product) => (
              <div key={product._id} className="products">
                <div className="products-img">
                  <img src={product.image} alt="" />
                </div>
                <div className="shopping">
                  <Link to={`/cart`}>
              
                    <div className="product-basket">
                      <AiOutlineShoppingCart />
                    </div>
                  
                  </Link>
                  <Link to={`/product/${product._id}`}>
                  <div className="product-search">
                    <AiOutlineSearch />
                  </div>
                  </Link>
                  <Link to={`/product/${product._id}`}>
                  <div className="product-wish">
                    <AiOutlineHeart />
                  </div>
                  </Link>
                </div>
            
              </div>
            ))}
          </div>
        </Page>
        )
      }
     
    </div>
  );
};

export default Products;
