// @ts-nocheck
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./RegisterScreen.css";

const RegisterScreen =({history}) =>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")){
            history.push("/");
        }
    }, [history])

    

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (password !== confirmpassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(() =>{
                setError("")
            }, 5000);
            return setError("password do not match");
        }

        try {
            const {data} = await axios.post("/api/auth/register", {username, email, password},
            config);

            localStorage.setItem("authToken", data.token);
            // push to login page ?
            history.push("/");
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
            <form onSubmit={registerHandler} className="sign-in-form">
                <h2 className="title">Sign Up</h2>
                {error && <span className="error-message">{error}</span>}
        
                <div className="input-field">
                    <i className="fas fa-user"/>
                    <input
                        type="text"
                        required id="name"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        
                    />
                </div>

                <div className="input-field">
                    <i className="fas fa-user"/>
                    <input
                        type="email"
                        required id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       
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
                        
                    />
                </div>

                <div className="input-field">
                    <i className="fas fa-lock"/>
                   
                    <input
                        type="password"
                        required id="confirmpassword"
                        placeholder="Enter confirm password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        
                    />
                </div>
    
            <button type= "submit" className="btn btn-primary" >Register</button>
            <p className="social-text">Sign up with other platforms</p>
                    <div className="social-media">
                      
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default RegisterScreen;