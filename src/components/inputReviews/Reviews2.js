import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./review.css";

const Reviews2 = () => {

    const [showReviews, setShowReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setShowReviews(data));
    }
        , []);
    
    const static_img = "https://i.ibb.co/q0QVrCN/images-2.jpg";

    return (
        <>
            <div className="container">
                <h2 className="text-center">
                    <span className="fw-bold text-danger h1">C</span>ustomer
                    <span className="fw-bold text-danger h1">R</span>eview
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        showReviews.map(crrElm => {
                            console.log(crrElm);
                            const { name, email, des, src, Rating } = crrElm;
                            const ratings = parseInt(Rating);
                            return (
                                <div class="col py-5">
                                    <div class="card text-center py-3 border-0 shadow">
                                        <div>
                                            <img src={src ? src : static_img} class="review_img" alt="..."/>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{name}</h5>
                                            <span class="card-title my-3">{email}</span>
                                            <p class="card-text my-1"><small>{des}</small></p>
                                            <div>
                                            {
                                                [...Array(5)].map((ignore,ind) => { // you just use indice here
                                                return (
                                                    <span key={ratings.length}>
                                                        <i
                                                            style={{color:"rgb(238,129,35)"}}
                                                        className={
                                                        ratings >= ind + 1
                                                        ? 'fas fa-star'
                                                        : ratings >= ind + 0.5
                                                        ? 'fas fa-star-half-alt'
                                                        : 'far fa-star'
                                                        } 
                                                    ></i>
                                                    </span>
                                                )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                   <div />
                                </div>
                            )
                        })
                       }             
                </div>
           </div>
        </>
    );
};

export default Reviews2;