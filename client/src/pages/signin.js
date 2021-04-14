import './index.css';
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import image1 from '../images/svg-6.svg'
import image2 from '../images/svg-7.svg'
//import rpng from './register.png';
//import './hook.js';


class SignInPage extends Component {

  constructor() {
    super();

    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });


      alert('Form submitted');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter email";
      //errors["email"] = alert("Please enter email");
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
        //errors["email"] = alert("Please enter valid email address.");
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password";
      //errors["password"] = alert("Please enter your password");
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password";
      //errors["confirm_password"] = alert("Please enter your confirm password");
    }

    if (typeof input["password"] != "undefined" && typeof input["confirm_password"] !== "undefined") {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match";
        //errors["password"] = alert("Passwords don't match");
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
    });

  }

  render() {
    return (
      <div>
        {/* <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <title>Sign In &amp; Sign Up</title>
        <link rel="stylesheet" href="style.css" />
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form" onSubmit={this.handleSubmit}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Email" />
                </div>
                <p className="text-danger">{this.state.errors.email}</p>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="danger">{this.state.errors.password}</div>
                <input type="submit" value="Submit" defaultValue="Login" className="btn solid" />
                <p className="social-text">Sign in with other platforms</p>
                <div className="social-media">
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </form>
              <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <h2 className="title">Sign up</h2>
                {/* <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div> */}
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="text" name="email" placeholder="Email"
                    value={this.state.input.email} onChange={this.handleChange} />
                </div>
                <p className="text-danger">{this.state.errors.email}</p>
                {/* <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="phoneNumber" placeholder="Phone Number" />
                </div> */}

                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" name="password" placeholder="Password"
                    value={this.state.input.password} onChange={this.handleChange} />
                </div>
                <div className="danger">{this.state.errors.password}</div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" name="confirm_password" placeholder="Re-Enter Password"
                    value={this.state.input.confirm_password} onChange={this.handleChange} />
                </div>
                <p className="danger">{this.state.errors.confirm_password}</p>
                <input type="submit" value="Submit" defaultValue="Sign up" className="btn solid" />
                <p className="social-text">Sign up with other platforms</p>
                <div className="social-media">
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3 className="top-title">New here?</h3>
                <p>Register here</p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
              </div>
              <img src={image2} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3 className="top-title">One of us?</h3>
                <p>Login here</p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
              </div>
              <img src={image1} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default SignInPage;