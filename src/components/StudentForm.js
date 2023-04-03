import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {


    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        mailId: '',
        phoneNo: 0,
        dob: '',
        gender: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: ''
    })

    const navigate = useNavigate();

    const submitDetails = (userDetails) =>{
        const firstName = userDetails.firstName , lastName = userDetails.lastName,
        mailId = userDetails.mailId, phoneNo = userDetails.phoneNo, gender = userDetails.gender, city = userDetails.city, state= userDetails.state, country =userDetails.country;
        console.log(firstName)
        
        if((firstName === '') ||
        (lastName ===  '') ||
        (mailId === '' ) ||
        (phoneNo === 0) ||
        (gender ===  '') ||
        (city ===  '') ||
        (state ===  '') ||
        (country ===  '')){
            return alert("you can't post empty values");
        }

        axios.post("http://localhost:8080/saveDetails", userDetails)
        .then(res=> navigate("/storedDetails"))
        .catch(err=> console.log(err))
    }
    return (
        <div className='body'>
            <h3>Student Form</h3>
            <div className="detailsForm">
                <label>First Name: </label>
                <input type='text' placeholder='Enter Your First Name' onChange={(e)=>{setDetails({...details, firstName:e.target.value})}} required /><br />
                <label>Last Name: </label>
                <input type='text' placeholder='Enter the Last Name' onChange={(e)=>{setDetails({...details, lastName:e.target.value})}} required /><br />
                <label>Email Id: </label>
                <input type='email' placeholder='Enter mail Id' onChange={(e)=>{setDetails({...details, mailId:e.target.value})}} required /><br />
                <label>Phone no: </label>
                <input type='number' placeholder='1234567890' onChange={(e)=>{setDetails({...details, phoneNo:e.target.value})}} required /><br />
                <label>Date of Birth</label>
                <input type='date' onChange={(e)=>{setDetails({...details, dob:e.target.value})}} /><br />
                <label>Gender: </label>
                <input type='text' placeholder='Enter Gender' onChange={(e)=>{setDetails({...details, gender:e.target.value})}} /><br />
                <label>Address line 1: </label>
                <textarea style={{ width: '200px' }} onChange={(e)=>{setDetails({...details, addressLine1:e.target.value})}} required></textarea><br />
                <label>Address line 2: </label>
                <textarea style={{ width: '200px' }} onChange={(e)=>{setDetails({...details, addressLine2:e.target.value})}}></textarea><br />
                <label>City: </label>
                <input type='text' placeholder='Enter your city' onChange={(e)=>{setDetails({...details, city:e.target.value})}} /><br />
                <label>State: </label>
                <input type='text' placeholder='Enter your state' onChange={(e)=>{setDetails({...details, state:e.target.value})}} /><br />
                <label>Country: </label>
                <input type='text' placeholder='Enter your country' onChange={(e)=>{setDetails({...details, country:e.target.value})}} /><br />
                <input type='button' value='Register' onClick={()=>{submitDetails(details)}} />

            </div>
        </div>
    );
}

export default StudentForm