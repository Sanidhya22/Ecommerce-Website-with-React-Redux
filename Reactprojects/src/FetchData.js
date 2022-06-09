import { useEffect } from "react";
import {fetchdb} from "./Redux/Functions/Functionactions"
import {useDispatch} from "react-redux"

const Fetchdb=()=>{
    const dispatch =useDispatch()
    const url = "http://localhost:3000/Prod";
    const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        dispatch(fetchdb(json))
    }
    catch (error) {
        console.log("error", error);
        }
    };
useEffect(()=>{
    fetchData() 
    },[])
return (null)
}

export default Fetchdb;
