import React from 'react';
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./about.css";

const AboutUs = () => {
    const about_image = "https://i.ibb.co/nbzL9Kj/bicycle-realistic-fitness-sport-road-race-carbon-bike-detailed-pictures-chains-rudder-pedals-tires-t.jpg";
    return (
        <>
            <Navbar/>    
            <div className="row ">
                <div className="col">
                    <div className="about_header p-1 py-md-3 px-md-5">
                        <h1><span className="text-danger fw-bold">A</span>bout <span className="text-danger fw-bold">U</span>s</h1>
                        <p>Home / About us</p>
                    </div>
                </div>
            </div>
            <div className="main_about_part pb-5">
                <div className="container pb-5 pt-3">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">
                            <h1 className="fw-light">We Offer</h1>
                            <h2 className="fw-bold text-dark">Fast & Reliable</h2>
                            <h1 className="mini_title">Great team chemistry customer care will surprise you</h1>
                            <p>Do you remember what it is like to be cruising on the boulevard and catching fresh spring wind on the shiny and chromed old school bike? Our online shop is the best place to buy bikes, accessories and other related products. Perfect service, reliable shipping system and flexible discount and loyalty programs.</p>
                        </div>
                        <div className="col-10 mx-auto col-md-6 order-1 order-md-2">
                            <figure>
                                <img className="img-fluid shadow rounded" src={about_image} alt="about_section_images" />
                            </figure>        
                        </div>
                    </div>
                </div>    
            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;