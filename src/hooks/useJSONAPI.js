import {useState, useEffect} from "react";

const useJSONAPI = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response=> response.json())
        .then(data=> setInfo(data))      
    }, []);

    return info;
}

export default useJSONAPI;