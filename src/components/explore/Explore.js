import React from "react";
import { NavLink } from "react-router-dom";
import useProductApi from "../../Hooks/useProductApi";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./explore.css";

const Explore = () => {
  const { isLoading, productData } = useProductApi();
  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="col-10 mx-auto col-md-4 text-center py-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row row-cols-1 my-3 row-cols-md-3 g-4">
            {productData.map((crrElm) => {
              const { _id, title, body, src, price } = crrElm;

              return (
                <div key={_id} className="col">
                  <div className="card service_img_box h-100 border-0 shadow">
                    <img
                      src={src}
                      className="services_images"
                      alt="services_image"
                    />
                    <div className="card-body">
                      <h5 className="service_title">{title}</h5>
                      <p className="service_text">{body.slice(0, 200)}</p>
                      <div className="d-flex justify-content-around">
                        <NavLink
                          to={`explore/${_id}`}
                          className="btn btn-outline-danger">
                          Buy Now
                        </NavLink>
                        <h4 className="service_text">Price : ${price}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Explore;
