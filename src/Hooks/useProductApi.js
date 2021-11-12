import {useState , useEffect} from 'react';

const useProductApi = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then((data) => {
                setProductData(data)
                setIsLoading(true)
            }).finally(() => setIsLoading(false))
    }, []);
    return {
        productData,
        isLoading
    }
};

export default useProductApi;