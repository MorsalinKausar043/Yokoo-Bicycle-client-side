import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import ErrorPage from '../components/errorPage/ErrorPage';
import Footer from '../components/footer/Footer';
import Home from '../components/Home/Home';
import Navbar from "../components/navbar/Navbar";
import ContactUs from "../components/contact/ContactUs";
import AboutUs from '../components/about/AboutUs';
import Addservice from '../components/addProducts/Addservice';
import Login from '../components/signin/Login';
import SignUp from '../components/signup/SignUp';
import Explore from '../components/explore/Explore';
import AuthProvider from '../context/AuthProvider';
import PrivateRoute from '../privateRoute/PrivateRoute';
import PlaceOrder from '../components/addProducts/PlaceOrder';

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/contactus" component={ContactUs}/>
                        <Route exact path="/aboutus" component={AboutUs}/>
                        <Route exact path="/addproduct" component={Addservice}/>
                        <Route exact path="/explore" component={Explore}/>
                        <PrivateRoute path="/explore/:_id">
                            <PlaceOrder/>
                        </PrivateRoute>
                        <Route exact path="/signin" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="*" component={ErrorPage}/>
                    </Switch>
                    <Footer/>
                </Router>
            </AuthProvider>
        </>
    );
};

export default Routes;