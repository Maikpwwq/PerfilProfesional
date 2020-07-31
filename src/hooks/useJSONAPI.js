import {useState, useEffect} from "react";

const useJSONAPI = (api) => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response=> response.json())
        .then(data=> setInfo(data))
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);            
    })}, []);

    return info;
}

export default useJSONAPI;