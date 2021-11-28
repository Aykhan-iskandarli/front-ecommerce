import React from "react";
import Product from "../components/Products/Products"
import { motion } from "framer-motion"

const ProductScreen = () => {
  return (
    <motion.div
    initial={{'opacity':0}}
    animate={{'opacity':1}}
    exit={{'opacity':0}}
    className="products-section">
      <Product/>
      
    </motion.div>
  );
};

export default ProductScreen;
