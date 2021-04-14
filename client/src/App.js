import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index.js';
// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Screens
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import UserDashboard from "./pages/dashboard.js";


//import LoginScreen from './components/screens/LoginScreen';
//import RegisterScreen from './components/screens/RegisterScreen';
//import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
//import ResetPasswordScreen from './components/screens/ResetPasswordScreen';

const App = () => {
  return (
    <Router>
      
        <Switch>
          <Route path="/" component={Home} exact />
          
          <Route exact path ="/login" component={LoginScreen}></Route>
          <Route exact path ="/register" component={RegisterScreen}></Route>
          <Route exact path ="/forgotpassword" component={ForgotPasswordScreen}></Route>
          <Route exact path ="/passwordreset/:resetToken" component={ResetPasswordScreen}></Route>
          <PrivateRoute exact path ="/dashboard" component={UserDashboard}></PrivateRoute>
        </Switch>
      
    </Router>
  );
}

export default App;
