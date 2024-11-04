import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";

import'./App.css';
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";
import FacebookLoginComponent from "./FacebookLoginComponent";
import NotFound from "./NotFound";


function App()
{
  const cart=useSelector((state)=>state.cart);
   const totalItems= cart.reduce((sum,item)=>sum+item.quantity,0);
   
  return(
    <>
    <GoogleOAuthProvider clientId="371554755551-ppr6bsiupmkh6up2gcpsq02d5ummnmv3.apps.googleusercontent.com">
      <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    <br />
    <FacebookLoginComponent />
    <br />
    <BrowserRouter>
    <nav>
    <Link to="/home">Home</Link>
    <Link to="/veg">Veg-Items</Link>
    <Link to="/non-veg">Non-Veg</Link>
    <Link to="/purchasehistory">Purchase History</Link>
    <Link to="/cart">Cart {totalItems}</Link>
    <Link to="Aboutus">About-us</Link>
    <Link to ="Contactus">Contact-us</Link>
    </nav>
    <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/veg" element={<Veg/>}/>
       <Route path="/non-veg" element={<NonVeg/>}/>
       <Route path="/purchasehistory" element={<PurchaseHistory/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/Aboutus" element={<AboutUs/>}/>
       <Route path="/Contactus" element={<ContactUs/>}/>
       <Route path="*" element={<NotFound/>}/>

    </Routes>

    </BrowserRouter>
    
    </>
  )
}
export default App;