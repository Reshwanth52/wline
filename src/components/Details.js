import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Details = () => {
    const [fetchData, setFetchData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/showDetails")
        .then(res=> setFetchData(res.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h4><center>Registered Students</center></h4>
        {
            fetchData.map(item=> {
                return(
                    <div className='card'>
                        <p>firstName: {item.firstName}</p>
                        <p>LastName: {item.lasttName}</p>
                        <p>mailId: {item.mailId}</p>
                        <p>phone Number: {item.phoneNo}</p>
                        <p>gender: {item.gender}</p>
                        <p>city: {item.city}</p>
                        <p>state: {item.state}</p>
                        <p>country: {item.country}</p>
                    </div>
                )          
            })
        }
    </div>
  )
}

export default Details