import React from "react";
import Styles from "./Login.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      return console.log("All Fields are required");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/user/login`,
        credentials
      );

      if (response.data) {
        // setUser(response.data);
        // localStorage.setItem("userData", JSON.stringify(response.data));
        console.log(response.data);
        // return navigate("/home", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className={Styles.mainContainer}>
        <section className={Styles.pageContainer}>
          <div className={Styles.div}>
            <h1 className={Styles.title}>Login to your account</h1>
          </div>
          <div>
            <form className={Styles.formContainer}>
              <div className={Styles.inputContainer}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={credentials.password}
                  // type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                />
              </div>
              <div className={Styles.buttonContainer}>
                <button onClick={handleSubmit}>submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
