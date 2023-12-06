import admin from "../img/profile.png";
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
//import { axios } from "axios";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast} from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("hooooooooli");
      const { data } = await axios.post(
        "http://localhost:5003/api/v1/auth/login",
        {
          ...values,
        }/*,
        { withCredentials: true }*/
      );
      if (data) {
        console.log("hooooooooli data");
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  
  return (
    <div className="Login">
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand">
                  <img src={admin} alt="logo" />
                </div>
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title"><FaSignInAlt /> Login</h4>
                    <form onSubmit={(e) => handleSubmit(e)} className="my-login-validation">
                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          required
                          autoFocus
                          onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })
                          }
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          data-eye
                          onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })
                          }
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      <div className="form-group">
                        
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                        <button
                          type="submit"
                          className="metamask btn btn-primary btn-block"
                        >
                          Connect Wallet
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer">
                  Copyright &copy; 2022 &mdash; Your Company
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
