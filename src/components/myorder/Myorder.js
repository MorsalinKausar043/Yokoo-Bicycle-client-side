import React, { useEffect, useState } from 'react';
import "./myorder.css";
import useAuth from "../../Hooks/useAuth";

const Myorder = () => {

    const { user , loading } = useAuth();
    const [showCart, setShowCart] = useState([]);

    useEffect(() =>
        fetch("http://localhost:5000/singleProduct")
            .then(res => res.json())
            .then((data) => setShowCart(data))
        , []);
    
        const deleteClickHandle = async (id) => {
            const deletes = window.confirm("Do You Delete This Packages?");
            if (deletes)
            {
                const url = `http://localhost:5000/singleProduct/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingUsers = showCart.filter(user => user._id !== id);
                            setShowCart(remainingUsers);
                        }
                    });
            }
        };
    
    return (
        <>
             <div className="container py-5">
                <h2 className="fw-bold mb-5">Your Order :</h2>
                <div className="row">
                    {
                        loading ?
                        <div className="container">
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-4 text-center">
                                        <div class="spinner-border text-danger" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            showCart.filter(crrVal => crrVal.email === user.email).map(crrElm => {
                            return (
                                <div key={crrElm._id} class="card mb-3 mx-3" style={{maxWidth: "530px"}}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        <img src={crrElm.src} class="w-100 h-100" alt="oder_images"/>
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                                <h5 class="card-title">{crrElm.title}</h5>
                                                <p class="card-text fw-bold">
                                                    <small>Status : </small>
                                                    <small style={{
                                                        color: crrElm.status === "panding" ?
                                                            'red' : 'rgb(11, 164, 224)'
                                                    }}
                                                    >{crrElm.status}
                                                    </small>
                                                </p>
                                                {crrElm.status === "panding" || crrElm.status === "pending" ?
                                                    <div className="">
                                                    <button onClick={_=> deleteClickHandle(crrElm._id)} className="btn btn-danger me-3">Cancel</button>
                                                    </div> :
                                                    <p className="fw-bold">Please take it!</p>
                                        }
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    );
};

export default Myorder;