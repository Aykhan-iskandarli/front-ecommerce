import React,{useState} from 'react'
import "./style/shipping.css"
import { CheckoutSteps } from '../components/CheckoutSteps/CheckoutSteps'
import Input from "../components/Input/input"
import Page from '../components/Page/Page'
import { useSelector,useDispatch} from 'react-redux'
import { saveShippingAddress } from '../Redux/actions/cartActions'
import { motion } from "framer-motion"


const Shipping = ({history}) => {

    const [fullName, setFullName] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [postCode, setPostCode] = useState("")
    const [country, setCountry] = useState("")

    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.userSignin)

   if(!userInfo){
      history.push("/signin")
    }
    const submitHandler=(e)=>{
        e.preventDefault();

        dispatch(saveShippingAddress({fullName,city,address,postCode,country}))
        history.push("/payment")
    }
    return (
      <motion.div
      initial={{'opacity':0}}
      animate={{'opacity':1}}
      exit={{'opacity':0}} className="shipping-section">
           
        <Page>
          <CheckoutSteps step1 step2 />
          <div className="shipping-form">
          <div className="shipping">
            <h1 className="shipping-text">Shipping</h1>
            <form onSubmit={submitHandler}>
            {/* {loading && <Loading />}
              {error && <h1>Error </h1>} */}
              <div className="form-group">
                <label htmlFor="Name">Full Name</label>
                <Input type="text" placeholder="Name" onChange={(e)=>setFullName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <Input type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="City">City</label>
                <Input type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="Postal Code">Postal Code</label>
                <Input type="text" placeholder="Postal Code" onChange={(e)=>setPostCode(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="Country">Country</label>
                <Input type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}/>
              </div>
              <div className="register-button">
                <button className="btn register-btn">Continue</button>
              </div>
            </form>
          </div>
          </div>
        </Page>
      </motion.div>
    )
}

export default Shipping
