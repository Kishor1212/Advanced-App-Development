// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import'./Jobs.css';

// const Jobs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form data here
//     // If form data is valid, submit it to your server
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       {formErrors.name && <p>{formErrors.name}</p>}

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       {formErrors.email && <p>{formErrors.email}</p>}

//       <label htmlFor="phone">Phone:</label>
//       <input
//         type="tel"
//         id="phone"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//       />
//       {formErrors.phone && <p>{formErrors.phone}</p>}

//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//       />
//       {formErrors.message && <p>{formErrors.message}</p>}

//       <Link to="/job"><button className="jb">Submit</button></Link>
//     </form>
//   );
// };

// export default Jobs;
import React, { useState } from 'react';
import './Jobs.css';
import im10 from'../assets/job.jpg';

export default function Jobs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    resume: null,
    coverLetter: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
 <div className="block">
 <div className='App'>
 
 <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className="form-input"
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className="form-input"
        />

        <label htmlFor="email">Email:</label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="form-input"
        />
        
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        className="form-input"
        />
        
        <label htmlFor="resume">Resume:</label>
        <input
        type="file"
        name="resume"
        onChange={handleFileChange}
        className="form-file"
        />
        
        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea
        name="coverLetter"
        value={formData.coverLetter}
        onChange={handleInputChange}
        className="form-textarea"
        />
        <br></br>
        
        <button type="submit" className="form-button">
        Submit
        </button>
        </form>
        <div className="hello">
        <img src={im10} style={{width:"600px",height:"700px",marginRight:"2px"}}></img>
        </div>
        </div>
        </div>
        );
    }