import React, { useState } from 'react';
import axios from 'axios';
import "./addService.css"

const Addservice = () => {

    const [data, setData] = useState({
        title: "",
        body: "",
        src: "",
        price:"",
        status:""
    });

    const handleInputBox = e => {
        const { name, value } = e.target;
        setData({...data , [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { title, body, src, price } = data;
        console.log(data);
        
        if (title && body && src && price)
        {
            data.status = "pending";
            axios.post('https://still-woodland-71864.herokuapp.com/addProduct', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    setData({title:"",body:"",src:"" , price:""});
                    alert('added successfully');
                }
            })
        } else
        {
            alert("please fill the input box!")
        }
    }


    return (
        <>
           <div className="container my-5">
               <div className="row">
                    <div className="col-10 mx-auto col-md-6">
                        <h2 className="m-0 mb-3"><span className="fw-bold text-danger">A</span>dd a Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
                                <input onChange={handleInputBox} type="text" className="form-control" id="exampleFormControlInput1" placeholder="adding title" name="title" value={data.title}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Adding Details</label>
                                <textarea onChange={handleInputBox} name="body" value={data.body} className="form-control text_details" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Adding Image SRC</label>
                                <input onChange={handleInputBox} type="text" className="form-control" id="exampleFormControlInput1" placeholder="adding src" name="src" value={data.src}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Adding Price</label>
                                <input onChange={handleInputBox} type="text" className="form-control" id="exampleFormControlInput1" placeholder="adding price" name="price" value={data.price}/>
                            </div>
                            <button className="btn btn-outline-danger" type="submit">Submit</button>
                        </form>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Addservice;