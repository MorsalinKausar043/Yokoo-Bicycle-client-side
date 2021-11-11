import React from 'react';
import useAuth from "../../Hooks/useAuth";
import "./dashboardhome.css";

const DashboardHome = () => {
    const { user } = useAuth();
    const staticImg = "https://i.ibb.co/q0QVrCN/images-2.jpg";
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <div class=" shadow py-5 text-center h-100">
                            <div className="text-center">
                                <img src={user.photoURL ? user.photoURL : staticImg} class="dashboard_profile_image" alt="services_image"/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{user.displayName}</h5>
                                <h5 class="card-title">{user.email}</h5>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;