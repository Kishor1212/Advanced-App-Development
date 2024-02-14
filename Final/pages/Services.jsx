import React, { useState } from 'react'
import "../assets/css/Service.css"
import cake1 from"../assets/images/pic6.jpg"
import cake2 from"../assets/images/eld.jpg"
import cake3 from"../assets/images/diagnostic.jpg"
import cake4 from "../assets/images/phy.jpg"
import food1 from "../assets/images/do.png"
import food2 from "../assets/images/donot.png"
import act1 from "../assets/images/walk.jpg"
import act2 from "../assets/images/music.jpg"
import act3 from "../assets/images/garden.jpg"
import act4 from "../assets/images/exercise.jpg"
import hall1 from "../assets/images/hall1.jpg"
import hall2 from "../assets/images/hall2.jpg"
import hall3 from "../assets/images/hall3.jpg"
import hall4 from "../assets/images/hall4.jpg"
import hall5 from "../assets/images/hall5.jpg"
import hall6 from "../assets/images/hall6.jpg"
import Navbar from '../components/Navbar'
import { Navigate, useNavigate } from 'react-router-dom';
import Bookingform from './Bookingform'
let index=0;
function Services() {

    const[hall,setHall]=useState("");
    const[food,setFood]=useState("");
    const[location,setLocation]=useState()
    const [activity,setActivity] = useState([]);
    const[cake,setCake]=useState();
    const[but,setbut]=useState(true)
    const[but1,setbut1]=useState(true)
    const[but2,setbut2]=useState(true)
    const[but3,setbut3]=useState(true)
    const[but4,setbut4]=useState(true)
    const[but5,setbut5]=useState(true)
    const[but6,setbut6]=useState(true)
    const[but7,setbut7]=useState(true)
    const[but8,setbut8]=useState(true)
    const[but9,setbut9]=useState(true)
    const[but10,setbut10]=useState(true)
    const[but11,setbut11]=useState(true)
    const[but12,setbut12]=useState(true)
    const[but13,setbut13]=useState(true)
    const[but14,setbut14]=useState(true)
    const[but15,setbut15]=useState(true)
    const[but16,setbut16]=useState(true)
    const navigate=useNavigate();


    const handleHall=(a)=>
    {
        setHall(a.name);
        localStorage.setItem('hall',hall)
        setLocation(a.Street+" "+a.City+" "+a.State+" "+a.Phonenumber+" "+a.Country)
        localStorage.setItem('location',location)
    }
    const handleCake=(a)=>
    {
        localStorage.setItem('cake',cake)
        setCake(a.name)
    }
    const handleNav=()=>
    {
        navigate("/booking")
        localStorage.setItem('activity',newList)
        console.log(cake+" "+hall+" "+food+" "+activity+" "+location);
        console.log(data);
        
    }
    const handleFood=(a)=>
    {
        setFood(a.name);
        localStorage.setItem('food',food)
    }
    const handleActivity=(a)=>
    {
        console.log(a.name)
        const newList=activity.concat(a.name)
        setActivity(newList)
       
    }
   
   
  return (
    <div>
    <Navbar/>
    <div className='title-heading'>
    <h1>SERVICES</h1>
    </div>
    <div className='cake-container'>
    <div className='cake-sub-container'>
    <img src={cake1}/>
    <h1>Nursing</h1>
    <p>
    "At Karam Home Care, our nursing in-home care service for seniors is designed to provide comprehensive medical support and compassionate assistance tailored to the unique needs of each individual."</p>
     <button onClick={()=>handleCake({name:"Multi-layer cake"},setbut14(false))}>{but14?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='cake-sub-container' style={{marginLeft:"2cm"}}>
    <img src={cake2}/>
    <h1>Elderly Care</h1>
    <p>
    "Elderly care is all about ensuring the well-being and comfort of our seniors as they age."</p>
     <button  onClick={()=>handleCake({name:"Icecream cake"},setbut13(false))}>{but13?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='cake-sub-container' style={{marginRight:"2cm"}}>
    <img src={cake3}/>
    <h1>Diagnostic</h1>
    <p>
    "Diagnostic services at Serenity Healthcare provide accurate and timely assessments, guiding effective treatment plans. With state-of-the-art technology and skilled professionals, we ensure precision and confidence in medical diagnoses."</p>
     <button  onClick={()=>handleCake({name:"Cup cake"},setbut12(false))}>{but12?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='cake-sub-container'>
    <img src={cake4}/>
    <h1>Physiotheraphy</h1>
    <p>"Physiotherapy at Peak Performance Clinic offers personalized rehabilitation plans tailored to your needs. Our expert therapists employ hands-on techniques and targeted exercises to restore mobility and improve overall well-being."</p>
    <button  onClick={()=>handleCake({name:"Chocolate cake"},setbut11(false))}>{but11?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    </div>
   
    <div className='title-heading'>
    <h1>DO & DONT'S</h1>
    </div>
    <div className='food-container'>
    <div className='food-sub-container'>
    <img src={food1}/>
    <h1>DO'S</h1>
    <div className='list-menu'>
    <li>Oral feeding</li>
    <li>Wash the careuser clothes</li>
    <li>Wash clothes in the machine</li>
    <li>Oral medication</li>
    <li>Assist in patient’s daily activities</li>
    </div>
    <button onClick={()=>handleFood({name:"veg"},setbut1(false))}>{but1?<div>view more</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>view more</div>}</button>
    </div>
    <div className='food-sub-container'>
    <img src={food2}/>
    <h1>DONT'S</h1>
    <div className='list-menu'>
    <li>Ryles or IV tube feeding</li>
    <li>Wash family’s clothes</li>
    <li>Wash clothes by hand</li>
    <li>Injection or any surgical procedures</li>
    <li>Domestic work</li>
    </div>
    <button  onClick={()=>handleFood({name:"Non-veg"},setbut(false))}>{but?<div>view more</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>view more</div>}</button>
    </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div className='title-heading'>
    <h1>Activity</h1>
    </div>
    <div className='activity-container'>
    <div className='activity-sub-container' style={{marginRight:"2cm"}}>
    <img src={act1}/>
    <h1>Walking</h1>
    <button  onClick={()=>handleActivity({name:"Fun Games"},setbut2(false))}>{but2?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='activity-sub-container'>
    <img src={act2}/>
    <h1>Music</h1>
    <button onClick={()=>handleActivity({name:"DJ Party"},setbut3(false))}>{but3?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='activity-sub-container' style={{marginRight:"2cm",marginTop:"2cm"}}>
    <img src={act3}/>
    <h1>Gardening</h1>
    <button  onClick={()=>handleActivity({name:"Dancing Show"},setbut4(false))}>{but4?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    <div className='activity-sub-container' style={{marginTop:"2cm"}}>
    <img src={act4}/>
    <h1>Exercise</h1>
    <button onClick={()=>handleActivity({name:"Magic Show"},setbut5(false))}>{but5?<div>Book</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Booked</div>}</button>
    </div>
    </div>
    <div className='proceed-container'>
    <button onClick={()=>{handleNav()}}>Proceed Here</button>
    </div>
    </div>
  )
}

export default Services