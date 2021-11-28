import React, { useState, useEffect } from "react";
import Page from "../Page/Page";
import Input from "../Input/input";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { signin } from "../../Redux/Reducers/userActions";
import Alert from "../Alert/Alert";

const Login = ({ history, redirect }) => {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className="register-section">
      <Page className="register-page">
        <div className="register">
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
          {loading && <Loading />}
          {error && <Alert className="alert-danger">please fill in all fields </Alert>}
            <div className="form-group">
              <label htmlFor="E-mail">E-mail</label>
              <Input
                type="email"
                placeholder="Enter E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
         
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => Setpassword(e.target.value)}
              />
            </div>

            <div className="register-button">
              <button className="btn register-btn">Submit</button>
            </div>
            <div className="already-account">
              <p>Create new account</p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </Page>
    </div>
  );
};

export default Login;
