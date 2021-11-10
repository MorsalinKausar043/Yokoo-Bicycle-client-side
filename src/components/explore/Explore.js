import React from 'react';
import { NavLink } from "react-router-dom";
import useProductApi from '../../Hooks/useProductApi';
import "./explore.css";


const Explore = () => {
    
    const { isLoading, productData } = useProductApi();
    return (
        <>
            {
            isLoading ?
            <div className="col-10 mx-auto col-md-4 text-center py-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="container">
                <div className="row row-cols-1 my-3 row-cols-md-3 g-4">
                        {
                            productData.map(crrElm => {
                                const {_id , title , body , src , price} = crrElm;
                            
                                return(
                                    <div key={_id} class="col">
                                        <div class="card service_img_box h-100">
                                            <img src={src} class="services_images" alt="services_image"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{title}</h5>
                                            <p class="card-text">{body.slice(0, 200)}</p>
                                            <div className="d-flex justify-content-around">
                                                <NavLink to={`explore/${_id}`} className="btn btn-outline-danger">Booking Now</NavLink>
                                                <h4>Price : ${price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }
            
        </>
    );
};

export default Explore;