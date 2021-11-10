import React from 'react';
import { BiCycling } from 'react-icons/bi';
import { BsNut } from 'react-icons/bs';
import { GiHelmet } from 'react-icons/gi';
import "./extrasection.css";

const ExtraSection = () => {

    const img = "https://i.ibb.co/jJsKtSZ/photo-1624915438420-c6808f95f357.jpg";

    return (
        <>
            <div className="my-3">
                <div className="row">
                    <div className="col-md-6 img_box col-11 mx-auto p-0">
                        <img src={img} className="w-100 h-100 banner_2nd_img" alt="benner_img" />
                    </div>
                    <div className="col-md-6 col-11 mx-auto bg-dark text-light p-3 p-md-5">
                        <div>
                            <h5 className="mini_title_benner2nd">Our benefit lists</h5>
                            <h1 className="mb-5 ms-3 fw-bold"><span className="text-danger">W</span>hy Choose Yoko<span className="text-danger">o.</span></h1>
                            <p ><span className="display-6 fw-bold text-danger">U</span>t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
                        </div>
                        <div className="row my-5 text-center text-md-start">
                            <div className="col-10 m-auto col-md-3">
                                <BiCycling className="display-1 banner_rotate text-danger me-3"/>
                            </div>
                            <div className="col-10 mx-auto col-md-9">
                                <h2>Bike personal fitting</h2>
                                <p>Nullam euismod sapien lacus, placerat sem dapibus nec maecenas.Nullam euismod sapien lacus, placerat sem dapibus nec maecenas.</p>
                            </div>
                        </div>
                        <div className="row text-center text-md-start">
                            <div className="col-10 m-auto col-md-3">
                                <BsNut className="display-1 banner_rotate text-danger me-3"/>
                            </div>
                            <div className="col-10 mx-auto col-md-9">
                                <h2>Custom accessories</h2>
                                <p>Nullam euismod sapien lacus, placerat sem dapibus nec maecenas. job involves a lot more than just posting some inspirational picturesque snapshots </p>
                            </div>
                        </div>
                        <div className="row text-center text-md-start mt-5">
                            <div className="col-10 m-auto col-md-3">
                                <GiHelmet className="display-1 banner_rotate text-danger me-3"/>
                            </div>
                            <div className="col-10 mx-auto col-md-9">
                                <h2>Things To Do GiHelmet!</h2>
                                <p>These bike tours in New York City are unique experience you shouldn't miss. Take selfies with the Statue of Liberty on a NYC boat tour cruising through New York Harbor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSection;