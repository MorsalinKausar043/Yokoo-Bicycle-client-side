import { useParams } from "react-router";
import useProductApi from "../../Hooks/useProductApi";
import SingleDetails from "./SingleDetails";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const PlaceOrder = () => {
    const { _id } = useParams();
    const { productData , isLoading } = useProductApi();
    return (
        <>
            <Navbar/>
            <div className="container py-5">
                <div className="row">
                    {
                        isLoading ?
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
                        productData.filter(crrVal => crrVal._id === _id).map(crrElm => <SingleDetails key={crrElm._id} {...crrElm}/>)
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PlaceOrder;