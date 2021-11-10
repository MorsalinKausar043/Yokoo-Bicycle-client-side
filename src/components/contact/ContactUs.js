import React from 'react';
import "./contact.css";

const ContactUs = () => {

    const contact_image = "https://i.ibb.co/jJsKtSZ/photo-1624915438420-c6808f95f357.jpg";

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="contact_header p-1 py-md-3 px-md-5">
                        <h1 className="fw-bold"><span className="text-danger fw-light">C</span>ontact <span className="text-danger fw-light">U</span>s</h1>
                        <p>Home / Contact us</p>
                    </div>
                </div>
            </div>
            <div className="main_contact_part">
                <div className="container pb-5 pt-3 pt-md-0">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-4 d-flex justify-content-center align-items-center">
                            <figure>
                                <img src={contact_image} className="img-fluid shadow rounded" alt="about_image" />
                            </figure>
                        </div>
                        <div className="col-10 mx-auto col-md-8 d-flex justify-content-center align-items-center">
                            <form>
                                <div>
                                    <h2 className="fw-bold contact_title">Contact us</h2>
                                    <div className="d-flex">
                                        <p className="me-3 text-secondary">Email</p>
                                        <p className="text-secondary">EmailInfo@fortis.com</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="me-3 text-secondary">Phone</p>
                                        <p className="text-secondary">Phone+230 5674 2343</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="me-3 text-secondary">Address</p>
                                        <p className="text-secondary">Gladstone, Rose Hill</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="massage_title fw-bold">Massage Us</h2>
                                    <div>
                                        <p className="text-secondary">Email</p>
                                        <input className="massage_email w-100" type="email" required/>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-secondary">Massage</p>
                                        <textarea className="text_area" name="" id="" cols="30" rows="5" required></textarea>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger my-3">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;