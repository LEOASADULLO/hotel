import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

const Single = () => {
    const {_id} = useParams()
    const [single, setSingle]=useState({});
    useEffect(()=>{
        axios.get(`/hotels/find/${_id}`).then(res=>{
            console.log(res.data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
}

export default Single;
