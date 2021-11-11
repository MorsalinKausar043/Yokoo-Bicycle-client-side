import { MdDeleteForever } from 'react-icons/md';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import "./manageorder.css";

const ManageOrder = () => {

    const { loading } = useAuth();
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
                <h2 className="fw-bold mb-5">Manage Order :</h2>
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
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    {showCart.map(crrElm => {
                                        console.log(crrElm)
                                        return (
                                                <tbody>
                                                    <tr>
                                                    <td>{crrElm.name}</td>
                                                    <td>{crrElm.email}</td>
                                                    <td>{crrElm.date.slice(0,10)}</td>
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

export default ManageOrder;