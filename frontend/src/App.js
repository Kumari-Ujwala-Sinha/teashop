import "./App.css";
import { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./pages/Home/Home";

import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/ContactUs/Contact";
import Footer from "./component/Footer/Footer";

import TestPage from "./component/TestPage/TestPage";
import DiabetesPredict from "./component/Models/DiabetesPredict";
import Form from "./component/Models/Form";
import Form2 from "./component/Models/Form2";
import MentalWellness from "./pages/product/allproducts/MentalWellness";
import WomenWellness from "./pages/product/allproducts/WomenWellness";
import SkinWellness from "./pages/product/allproducts/SkinWellness";
import HeartWellness from "./pages/product/allproducts/HeartWellness";
import WeightManagement from "./pages/product/allproducts/WeightManagement";

import Shop from "./pages/Shop/Shop";



import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";

import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import NoUserOptions from "./component/layout/Header/NoUserOptions";
import HomeHeader from './component/HomeHeader/HomeHeader'
import GutHealthAnalysis from "./component/Models/GutHealthAnalysis";
import StaminaAnalysis from "./component/Models/StaminaAnalysis";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  

 

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

   
  }, []);



  return (
    <Router>
      
     <HomeHeader/>

      
     

      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
 

        <Route exact path="/search" component={Search} />
        {/*<Route exact path="/shop" component={Shop} />*/}
        <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
         {/* <Route exact path="/product/d/mental-wellness" component={MentalWellness} />
          <Route exact path="/product/d/women-wellness" component={WomenWellness} />
          <Route exact path="/product/d/skin-wellness" component={SkinWellness} />
          <Route exact path="/product/d/heart-wellness" component={HeartWellness} />
          <Route exact path="/product/d/weight-management" component={WeightManagement} />
          {/* Model Routes */}
          <Route exact path="/customer-health-analysis" component={TestPage} />
          <Route exact path="/diabetes-predictor" component={DiabetesPredict} />
          <Route exact path="/pcos-detection" component={Form} />
          <Route exact path="/mental-health-analysis" component={Form2} />
          <Route exact path="/gut-health-analysis" component={GutHealthAnalysis} />
          <Route exact path="/stamina-analysis" component={StaminaAnalysis} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

       
      </Switch>
      <div className="shopIconFloat">
          <Link to="/products">
            <img
              src="/homeImg/shopIcon.jpg"
              className="shopIconImg"
              alt="shop_now"
            />
            <div className="shopFloatText">Shop Now</div>
          </Link>
        </div>
      <Footer />

    
    </Router>
  );
}

export default App;
