import React from 'react';
import { NavLink } from 'react-router-dom';
import ExtraSection from '../extra-section/ExtraSection';
import Reviews2 from '../inputReviews/Reviews2';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductDatas from "./ProductDatas";
import "./home.css";

const Home = () => {

    const bike_img_1 = "https://i.ibb.co/wCD6rZC/modern-eco-friendly-bicycle-23-2148733489.jpg";
    const bike_img_2 = "https://i.ibb.co/t4p20QY/realistic-mountain-bike-bmx-bicycle-3d-mockup-side-view-326414-342.jpg";
    const bike_img_3 = "https://i.ibb.co/pzy8fQ3/white-old-bicycle-with-black-details-23-2148907948.jpg";
    const btn_theme = ">>";


    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                <img src={bike_img_1} className="d-block banner_image" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Reserve Your Bike Online and Save</h5>
                                    <p>All of our listed US tours offer remarkable opportunities towitness the country.</p>
                                </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src={bike_img_2} className="d-block banner_image" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Traveling by bicycle is an excellent way for families</h5>
                                    <p>At a cyclist’s pace, you’ll experience places four-wheeled travelers will never know existed.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={bike_img_3} className="d-block banner_image" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-light">Remember, it’s more about the journey than the destination.</h5>
                                    <p className="text-light">Bicycle tours help give kids a feel for a country, its terrain and its people more so than most other means.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <h2><span className="fw-bold text-danger display-6">O</span>ur <span className="fw-bold text-danger display-6">P</span>roducts</h2>
                    <ProductDatas/>
                </div>
                <div className="text-end">
                    <NavLink className="see_more_btn" to="/explore">See More {btn_theme}</NavLink>
                </div>
            </div>

            <ExtraSection />
            <Reviews2 />
            <Footer/>
        </>
    );
};

export default Home;