import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/Home/Home";
import ContactUs from "../components/contact/ContactUs";
import AboutUs from "../components/about/AboutUs";
import Login from "../components/signin/Login";
import SignUp from "../components/signup/SignUp";
import Explore from "../components/explore/Explore";
import AuthProvider from "../context/AuthProvider";
import PrivateRoute from "../privateRoute/PrivateRoute";
import PlaceOrder from "../components/addProducts/PlaceOrder";
import Dashboard from "../components/Dashboard/Dashboard";
import Preloader from "../components/preloader/Preloader";

const Routes = () => {
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", (_) => SetLoading(false));
  }, []);

  console.log(loading);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/explore" component={Explore} />
              <PrivateRoute path="/explore/:_id">
                <PlaceOrder />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route exact path="/signin" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="*" component={ErrorPage} />
            </Switch>
          </Router>
        </AuthProvider>
      )}
    </>
  );
};

export default Routes;
