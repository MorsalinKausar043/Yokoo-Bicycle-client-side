import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SingleDetails = ({ _id, title, body, src, status , price }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [cycleData, setcycleData] = useState({
        name: "",
        email: "",
        address:"",
        phone: "",
        date:startDate
    })
    const { user} = useAuth();
    const history = useHistory();
    
    const inputBox = (e) => {
        const { name, value } = e.target;
        setcycleData({...cycleData , [name] : value})
    }
    
    const handleOnclick = (e) => {
        e.preventDefault();
        const { name , email ,phone , address } = cycleData;
        if (address && phone)
        {
            if (!name || !email)
            {
                cycleData.name = user.displayName;
                cycleData.email =user.email;
            }
            else
            {
                cycleData.name = name;
                cycleData.email = email;
            }
            cycleData.project_id = _id;
            cycleData.title = title;
            cycleData.body = body;
            cycleData.src = src;
            cycleData.status = status;
            axios.post('https://still-woodland-71864.herokuapp.com/singleProduct', cycleData)
            .then(res => {
                if (res.data.insertedId)
                {
                    setcycleData({ phone: "" , address:"" });
                    alert('congratulations! Booked successfully');
                    history.push("/");
                }
            })
        }
        else
        {
            alert("please fill the Details Box")
        }
        
    };

    return (

        <>
            <div className="col-10 mx-auto col-md-8">
                <div className="single_service_imgBox">
                    <figure>
                            <img src={src} className="w-100 rounded shadow" alt="service_details" />
                    </figure>
                </div>
                <div className="text-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>{title}</h2>
                        <h4>Price : ${price}</h4>
                    </div>
                    <h4>Overview :</h4>
                    <p>{body}</p>
                </div>
            </div>
            <div className="col-10 mx-auto py-5 py-md-0 col-md-4">
                <form onSubmit={handleOnclick}>
                    <h2 className="text-center fw-bold mb-4">Buy Now This Product</h2>
                    <input
                        className="form-control"
                        onChange={inputBox}
                        type="text"
                        name="name"
                        defaultValue={user.displayName}
                    />
                    <input
                        className="form-control my-3"
                        onChange={inputBox}
                        type="email"
                        name="email"
                        defaultValue={user.email}
                    />
                    <input
                        className="form-control"
                        placeholder="Your Phone"
                        onChange={inputBox}
                        type="text"
                        name="phone"
                        value={cycleData.phone} />
                    <input
                        className="form-control my-3"
                        onChange={inputBox}
                        placeholder="Your Address"
                        type="text"
                        name="address"
                        value={cycleData.address}
                    />
                    <DatePicker
                        className="form-control my-3"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        value={cycleData.date} />
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Buy Now
                    </button>
                </form>
            </div>
        </>
    );
};

export default SingleDetails;