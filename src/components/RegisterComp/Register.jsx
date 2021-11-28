import React,{useState,useEffect} from "react";
import Page from "../Page/Page";
import Input from "../Input/input";
import "./register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Reducers/userActions";
import Loading from "../Loading/Loading";
import Alert from "../Alert/Alert";

const Register = ({history,redirect}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()
  const userSignin = useSelector(state=>state.userRegister)
  const {userInfo,loading,error} = userSignin

  useEffect(()=>{
    if(userInfo){
      history.push(redirect)
    }
   },[history,redirect,userInfo])

  const submitHandler=(e)=>{
    e.preventDefault()

    if(password !== confirmPassword){
        alert("Password and confirm password are not match")
    }
    else{
      dispatch(register(name,email,password))
    }


  


  }
  return (
    <div className="register-section">
      <Page className="register-page">
        <div className="register">
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
          {loading && <Loading />}
            {error && <Alert className="alert-danger">please fill in all fields </Alert>}
            <div className="form-group">
              <label htmlFor="Name">Full Name</label>
              <Input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="E-mail">E-mail</label>
              <Input type="email" placeholder="Enter E-mail" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm password</label>
              <Input type="password" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className="register-button">
              <button className="btn register-btn">Submit</button>
            </div>
            <div className="already-account">
              <p>Already have an account?</p>
              <Link to="/signin">Sign in</Link>
            </div>
          </form>
        </div>
      </Page>
    </div>
  );
};

export default Register;
