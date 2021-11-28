import React from 'react'
import Category from '../components/Category/Category'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
        initial={{'opacity':0}}
        animate={{'opacity':1}}
        exit={{'opacity':0}}
        >
            <Hero/>
            <Category/>
            <Products/>
        </motion.div>
    )
}

export default Home
