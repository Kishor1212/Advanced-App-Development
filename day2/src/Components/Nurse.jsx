// import React from 'react'
// import './Nurse.css';
// import img7 from'../assets/caring.jpg';
// import CheckIcon from '@mui/icons-material/Check';

// const Nurse = () => {
//   return (
//     <div className='Kishor'>
//     <div className="nurse">
// <h1 style={{fontSize:"32px",marginBottom:"40px"}} sty>Trust Ahgaram for Nursing Services</h1>
// <br></br>
// <p style={{fontSize:"20px"}}>Our attendants are certified caregivers & are able to assist with patient’s mobility, maintaining hygiene, feeding, to helping in exercise and other nursing care specializations</p>
//     </div>
//     <div className="char">
//     <img src={img7}></img>
//     <div className="icon">
//     <CheckIcon style={{margin: "var(--e-icon-list-icon-margin, 0 calc(var(--e-icon-list-icon-size, 1em))) * .25) 0 0)",width: "var(--e-icon-list-icon-size, 1em)",
//     height: "var(--e-icon-list-icon-size, 1em);"}}  />
//     </div>
    
    
//     </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import'./Nurse.css';

const Nurse = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [service, setService] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label><br />
    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
    <label htmlFor="age">Age:</label><br />
    <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
    <label htmlFor="service">Type of Service Required:</label><br />
    <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
    <option value="Eldercare">Elder Care</option>
    <option value="homemaking">Homemaking</option>
    <option value="nursing">Nursing Care</option>
    <option value="diagnostic">Diagnostic</option>
    <option value="post">Post Operative Care</option>
    <option value="physio">Physiotherapist</option>
    </select><br />
    <label htmlFor="additionalinfo">Additional Information:</label><br />
    <textarea id="additionalinfo" name="additionalinfo" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)}></textarea><br />
    <input type="submit" value="Submit" />
   
    </form>
    <div className="ola">hello</div>
    </div>
  );
}

// export default HomeCareForm;
export default Nurse