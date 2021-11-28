import React from 'react'
import RegisterComp from "../components/RegisterComp/Register"
import { motion } from "framer-motion"


const Register = ({history,location}) => {
    const redirect = location.search ? location.search.split("=")[1] : "/"
    return (
        <motion.div
        initial={{'opacity':0}}
        animate={{'opacity':1}}
        exit={{'opacity':0}}
        >
       <RegisterComp history={history} redirect={redirect}/>
        </motion.div>
    )
}

export default Register
