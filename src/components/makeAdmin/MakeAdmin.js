import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState("");

    const inputBox = e => setEmail(e.target.value);
    const updateUserToAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail("");
                    alert("Admin Add Successfull");
                }
            })
        
    }


    return (
        <>
            <div className="container">
                <div className="row">
                        <h2 className="text-center fw-bold">Make Admin</h2>
                    <div className="col-10 mt-3 col-md-6 mx-auto">
                        <form onSubmit={updateUserToAdmin} className="d-flex">
                            <input
                                onBlur={inputBox}
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                className="form-control"
                                value={email.email}
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;