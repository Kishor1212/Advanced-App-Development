import React, { useState } from 'react';
import '../assets/css/Booking.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Bookingform() {
    let navigate=useNavigate();
    const [user, setUser] = useState({
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        date: '',
        time: '',
        noumberofperson: '',
        add_ons: [] 
    });
    const { name,address,phonenumber,email,date,time,numberofperson,add_ons} = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8085/postBooking", user);
        alert("YOUR FORM IS SUBMITTED")
        navigate("/");
      };
      
    return (
        <div className="-container">
            <h2>Appointment Booking Form</h2>
            <form class="form" onSubmit={(e)=>onSubmit(e)}>
                <label htmlFor="applicantName">Applicant Name:</label>
                <input type="text" id="applicantName" name="name" value={name} onChange={(e)=>onInputChange(e)}/>   
                <label htmlFor="applicantAddress">Applicant Address:</label>
                <input type="text" id="applicantAddress" name="address" value={address} onChange={(e)=>onInputChange(e)} />
                <label htmlFor="applicantMobile">Applicant Mobile Number:</label>
                <input type="tel" id="applicantMobile" name="phonenumber" value={phonenumber} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="applicantEmail">Applicant Email:</label>
                <input type="email" id="applicantEmail" name="email" value={email} onChange={(e)=>onInputChange(e)}/>

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={time} onChange={(e)=>onInputChange(e)} />

                <label htmlFor="numPeople">Number of People:</label>
                <input type="number" id="numPeople" name="numberofperson" value={numberofperson} onChange={(e)=>onInputChange(e)} />
                <br/>
                <input type="checkbox" id="magicShow" name="magicShow" checked={add_ons.includes('magicShow')} onChange={(e) => {
                    const addon = e.target.name;
                    setUser(prevState => ({
                        ...prevState,
                        add_ons: prevState.add_ons.includes(addon) ? prevState.add_ons.filter(item => item !== addon) : [...prevState.add_ons, addon]
                    }));
                }} />
                <label htmlFor="magicShow">Walking</label>
                <input type="checkbox" id="djParty" name="djParty" checked={add_ons.includes('djParty')} onChange={(e) => {
                    const addon = e.target.name;
                    setUser(prevState => ({
                        ...prevState,
                        add_ons: prevState.add_ons.includes(addon) ? prevState.add_ons.filter(item => item !== addon) : [...prevState.add_ons, addon]
                    }));
                }} />
                <label htmlFor="djParty">Music</label>
                <input type="checkbox" id="gameShow" name="gameShow" checked={add_ons.includes('gameShow')} onChange={(e) => {
                    const addon = e.target.name;
                    setUser(prevState => ({
                        ...prevState,
                        add_ons: prevState.add_ons.includes(addon) ? prevState.add_ons.filter(item => item !== addon) : [...prevState.add_ons, addon]
                    }));
                }} />
                <label htmlFor="dancingShow">Gardening</label>
                <input type="checkbox" id="dancingShow" name="dancingShow" checked={add_ons.includes('dancingShow')} onChange={(e) => {
                    const addon = e.target.name;
                    setUser(prevState => ({
                        ...prevState,
                        add_ons: prevState.add_ons.includes(addon) ? prevState.add_ons.filter(item => item !== addon) : [...prevState.add_ons, addon]
                    }));
                }} />
                <label htmlFor="gameShow">Exercise</label>
                <br></br>
                <center>
                  <input type="submit" value="Submit" />
                  </center>
            </form>
        </div>
    );
}

export default Bookingform;