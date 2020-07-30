import {useState, useEffect} from "react";

const useJSONAPI = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response=> response.json())
        .then(data=> setInfo(data))
        .then(myInfo=> console.log(myInfo))  
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);            
    })}, []);

    return info;
}

export default useJSONAPI;