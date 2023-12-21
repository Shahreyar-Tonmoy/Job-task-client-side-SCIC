/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";
import SignIn from "../Login/SignIn";
import Register from "../Login/Register";



const Routes = createBrowserRouter([
    {
        path :"/",
       element :<MainLayOut></MainLayOut> ,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
           
        },
        {
            path : "/signin",
            element :<SignIn></SignIn>,
        },
        {
            path : "/register",
            element :<Register></Register>
        },
        
        
        
       ]
       
    }
])

export default Routes;