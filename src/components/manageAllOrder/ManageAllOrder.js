import { MdDeleteForever } from 'react-icons/md';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import "./manageorder.css";

const ManageAllOrder = () => {

    const { loading } = useAuth();
    const [showProduct, setShowProduct] = useState([]);
    const status = "shipped";

    useEffect(() =>
        fetch("https://still-woodland-71864.herokuapp.com/singleProduct")
            .then(res => res.json())
            .then((data) => setShowProduct(data))
        , []);
    
        const deleteClickHandle = async (id) => {
            const deletes = window.confirm("Do You Delete This Packages?");
            if (deletes)
            {
                const url = `https://still-woodland-71864.herokuapp.com/singleProduct/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingUsers = showProduct.filter(user => user._id !== id);
                            setShowProduct(remainingUsers);
                        }
                    });
            }
    };

    const updateStatusData = id => {
        const confirmApproved = window.confirm("Do You Approved this Package!");
        if (confirmApproved)
        {
            const url = `https://still-woodland-71864.herokuapp.com/singleProduct/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status})
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                {
                    const remainingUsers = showProduct.filter(user => user._id === id)[0];
                    remainingUsers.status = "shipped";
                    setShowProduct([...showProduct]);
            }
        })
        }
    };
    
    return (
        <>
             <div className="container py-5">
                <h2 className="fw-bold mb-5">Manage All Order :</h2>
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
                            <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Update Status</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    {showProduct.map(crrElm => {
                                        console.log(crrElm)
                                        return (
                                                <tbody>
                                                    <tr>
                                                    <td>{crrElm.name}</td>
                                                    <td>{crrElm.email}</td>
                                                    <td>{crrElm.date.slice(0,10)}</td>
                                                    <td style={{
                                                        color: crrElm.status === "panding"
                                                            || crrElm.status === "pending" ?
                                                            'red' : 'rgb(11, 164, 224)'
                                                    }}>{crrElm.status}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-danger"
                                                            onClick={_=>updateStatusData(crrElm._id)}
                                                        >
                                                            shipped
                                                        </button>
                                                    </td>
                                                    <td
                                                        onClick={_ => deleteClickHandle(crrElm._id)}
                                                        className="text-danger h3"
                                                    >
                                                        <MdDeleteForever/>
                                                    </td>
                                                    </tr>
                                                 </tbody>
                                        )
                                            
                                    }) 
                                    }
                                </table>
                            </div>
                        
                    }
                </div>
            </div>
        </>
    );
};

export default ManageAllOrder;