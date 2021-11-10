import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div style={{height : "60vh"}} className="col-10 col-md-12 mx-auto d-flex justify-content-center align-items-center flex-column">
                        <h1 className="fw-bold text-danger">Obs! This page is Not Found!</h1>
                        <NavLink to="/" className="btn btn-secondary mt-3">Back To Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;