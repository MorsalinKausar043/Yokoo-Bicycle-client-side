import React, { useState } from 'react';
import { useHistory } from "react-router";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./reviews.css";
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const handleRatings = e => setRating(e.target.value);
    const [reviewData, setReviewData] = useState({
        name: "",
        email: "",
        des:""
    })
    const { user} = useAuth();
    const history = useHistory();
    
    const inputBox = (e) => {
        const { name, value } = e.target;
        setReviewData({...reviewData , [name] : value})
    }
    
    const handleOnclick = (e) => {
        e.preventDefault();
        const { name , email , des } = reviewData;
        if (des)
        {
            if (!name || !email)
            {
                reviewData.name = user.displayName;
                reviewData.email =user.email;
            }
            else
            {
                reviewData.name = name;
                reviewData.email = email;
            }
            reviewData.src = user.photoURL;
            reviewData.Rating = rating;
            console.log(reviewData)
            fetch('http://localhost:5000/review', {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(reviewData)
            }).then(res => res.json())
            .then(data => {
                if (data.insertedId)
                {
                    setReviewData({  des:"" });
                    alert('congratulations! Booked successfully');
                    history.push("/");
                }
            })
        }
        else
        {
            alert("please fill the review Box")
        }
        
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto py-5 py-md-0 col-md-4">
                        <form onSubmit={handleOnclick}>
                            <h2 className="text-center fw-bold mb-4">Add Your Review</h2>
                            <span>name :</span>
                            <input
                                className="form-control my-2"
                                onChange={inputBox}
                                type="text"
                                name="name"
                                defaultValue={user.displayName}
                            />
                            <span>email :</span>
                            <input
                                className="form-control my-3"
                                onChange={inputBox}
                                type="email"
                                name="email"
                                defaultValue={user.email}
                            />
                            <span>Review :</span>
                            <textarea
                                className="form-control my-3 text_details"
                                onChange={inputBox}
                                placeholder="Your Review Desciption"
                                type="text"
                                name="des"
                                rows="4"
                                value={reviewData.des}
                            ></textarea>
                            <span>Ratings : </span>
                            <Stack spacing={1}>
                                <Rating className="my-3" name="size-large" onBlur={handleRatings} defaultValue={0} size="large" />
                            </Stack>
                            <button
                                type="submit"
                                className="btn btn-primary mt-2">
                                submit review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;