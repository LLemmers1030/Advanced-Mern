// @ts-nocheck
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import "./LoginScreen.css";
import "./Signin.css";

const LoginScreen =({history}) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")){
            history.push("/dashboard");
        }
    }, [history]);

    const LoginHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            const {data} = await axios.post("/api/auth/login", 
            {email, password},
            config);

            localStorage.setItem("authToken", data.token);
            history.push("/dashboard");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000)
        }
    };

    return(
        
        <div className="container">
              <div className="forms-container">
                <div className="signin-signup">
            <form onSubmit={LoginHandler} className="sign-in-form">
                <h2 className="title">Sign in</h2>
                {error && <span className="error-message">{error}</span>}
    
                <div className="input-field">
                    <i className="fas fa-user"/>
                    
                    <input
                        type="email"
                        required id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        tabIndex={1}
                    />
                </div>
    
                <div className="input-field">
                    <i className="fas fa-lock"/>
                   
                    <input
                        type="text"
                        required id="name"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        tabIndex={2}
                    />
                </div>
            <Link to="/forgotpassword"><p>Forgot password?</p></Link>
            <button type= "submit" className="btn btn-primary" tabIndex={3}>Login</button>
            <p className="social-text">Sign in with other platforms</p>
            <Link to="/register"><p>Create Account?</p></Link>
                </form>
                
            </div>
        </div>
        </div>
        );
}

export default LoginScreen;


