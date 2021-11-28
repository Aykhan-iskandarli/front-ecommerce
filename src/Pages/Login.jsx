import React from 'react'
import LoginComp from "../components/LoginComp/Login"
import { motion } from "framer-motion"

const Login = ({ history,location }) => {
    const redirect = location.search ? location.search.split("=")[1] : "/"
   
    return (
        <motion.div
        initial={{'opacity':0}}
        animate={{'opacity':1}}
        exit={{'opacity':0}}
        >
           <LoginComp history={history} redirect={redirect}/>
        </motion.div>
    )
}

export default Login
