import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
const Item =()=>{
    const [item,setItem]=useState({
    
        name:" ",
        price:" ",
        category:" ",
        url:" ",

    });
    const {id}=useParams();
    useEffect(()=>{
        loadItem();
    })
    const loadItem=async()=>{
       const res=await axios.get(`http://localhost:3005/items/${ id }`);
       //console.log(result);
        setItem(res.data);
   
    };
    return(
        <div className="container py-4">
            <Link className="btn-btn-primary" to="/home">Back to Home</Link>
            <h1 className="dispaly-4">Item Id:{id}</h1>
            <ul className="list-group w-50">
                <li className="list-group-item"> name:{item.name}</li>
                <li className="list-group-item"> price:{item.price}</li>
                <li className="list-group-item"> category:{item.category}</li>
                <li className="list-group-item"> url:{item.url}</li>
                
            </ul>
            </div>
        
    )
}
export default Item;