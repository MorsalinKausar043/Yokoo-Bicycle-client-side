import {useState , useEffect} from 'react';

const useProductApi = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://yokoo-bicycle-server-side-production.up.railway.app/product")
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