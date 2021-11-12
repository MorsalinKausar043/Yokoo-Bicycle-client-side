import {useState , useEffect} from 'react';

const useProductApi = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://still-woodland-71864.herokuapp.com/product")
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