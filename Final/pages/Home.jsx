import React, { useState } from 'react'
import "../assets/css/Home.css"
import homeimg from "../assets/images/pic4.jpg" 
import celimg1 from "../assets/images/nurse.jpg"
import celimg2 from "../assets/images/post.jpg"
import act2 from "../assets/images/nur.jpg"
import act3 from "../assets/images/pic5.jpg"
import Navbar from '../components/Navbar'
import act4 from "../assets/images/physio.jpg"
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const[flag,setFlag]=useState(false)
  const[flag1,setFlag1]=useState(false)
  const[flag2,setFlag2]=useState(false)
  return (
    <>
    <Navbar/>
    <div>
    <div className='homeBody'>
    <img src={homeimg} style={{width:"1500px"}}/>
    <div className='home-conatiner'>
    <h1>“The simple act of caring is heroic.”</h1>
    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are on a journey to keep an appointment</h2>
    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; with whatever we are</h2>
    <div className="home-button">
    <button style={{marginRight:"2cm",border:"none",color:"white"}}>Book</button>
    </div>
    </div>
    </div>
    </div>
    <div className='home-container2'>
    <h1>Services</h1>
    <div className='display-container'>
    <div className='sub-container1'>
    <h1>Nursing</h1>
    <div className='sub-container2'>
    {flag?<div style={{color:"white"}}>At karam Home Care, we're dedicated to providing compassionate and professional care for seniors in the comfort of their own homes. Our goal is to ensure that your loved ones receive the support they need while maintaining their independence and dignity. From assistance with daily tasks to companionship and medication reminders, our team is here to make life easier for your family. With Karam Home Care, you can trust that your senior loved ones are in good hands."</div>:<div><img src={act2}/></div>}
    <button onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(false)}>View More</button>
    </div>
    </div>
    
    <div className='sub-container1'>
    <h1>Elderly care</h1>
    <div className='sub-container2'>
    {flag1?<div style={{color:"white"}}>"At karam Home Care, we understand the importance of providing quality care for seniors in their own homes. Our compassionate team is committed to meeting the unique needs of each individual, ensuring comfort and peace of mind for both seniors and their families. From assistance with daily activities to companionship and medication management, we're here to support your loved ones every step of the way. With karam Home Care, you can rest assured knowing your senior family members are receiving ."</div>:<div><img src={act3}/></div>}
    <button onMouseEnter={()=>setFlag1(true)} onMouseLeave={()=>setFlag1(false)}>View More</button>
    </div>
    </div>
    <div className='sub-container1'>
    <h1>Physiotheraphy</h1>
    <div className='sub-container2'>
    {flag2?<div style={{color:"white"}}>Four weeks prior to the partyFour weeks prior to the party  and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the party Four weeks prior to the partyFour weeks prior to the party -  party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the part</div>:<div><img src={act4}/></div>}
    <button onMouseEnter={()=>setFlag2(true)} onMouseLeave={()=>setFlag2(false)}>View More</button>
    <h2>
  
    </h2>
    </div>
    </div>
    
    </div>
    </div>
    <div className='home-container3'>
    <div className='sub-container3'>
      <p style={{fontSize:"0.6cm",padding:"1cm",fontStyle:"italic"}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"Forever Young Care will ensure your loved one's comfort and well-being. We specialize in providing personalized care for seniors, taking care of every detail to make their days special. While we focus on creating memorable experiences for your elderly family member, there are a few essential steps we need your assistance with. Here's how we plan to provide exceptional care:

      Six weeks before the scheduled care day - Planning ahead is crucial to ensure a smooth and enjoyable experience for your loved one. We'll meet with you and your senior family member to discuss their preferences and needs. Together, we'll choose activities and outings that align with their interests and abilities. Additionally, we'll finalize the schedule and location for their care days based on their preferences and any medical requirements.</p>
    <img src={celimg2}></img>
    </div>
    <div className='sub-container4'>
    <p style={{fontSize:"0.6cm",padding:"1cm",fontStyle:"italic"}}>"Three weeks to go for the party - Although invitations have been sent to all parents almost a week ago, in case if the child loses the card, it is better to mail them informing about the party. For the tiny tots, we do provide extra help on request.

    One and Two weeks before the party – From the period of 14 days until the birthday party, we are constantly in contact with the parents. The flow of the party is decided, guests who haven’t confirmed are called again. Our event managers' discus the comprehensive event, the menu is rechecked, we confirm with the bakers the cake designs and start our decoration preparations.
    pre-planning. So six weeks prior to the party, we sit with the parents and children and
    One or two days before the party - We again recheck with the caterers, bakers, party venue and see that the ambience is decorated based as you wanted.
    pre-planning. So six weeks prior to the party, we sit with the parents and children and
    On the day of the party, everything will be perfectly organized, the way your child wanted and the only thing that parents have to do is sit back and relax and take part in the activities".</p>
    <img src={celimg1}></img>
    </div>
    </div>
    <div class="mfooter">
        <div class="heading">
          <h2>BIO<sup></sup></h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="#">Nursing</a></p>
            <p><a href="#">Attendent</a></p>
            <p><a href="#">Physiotheraphy</a></p>
            <p><a href="#">Elderly Care</a></p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/SimpleLearn"
              ><i class="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="https://www.twitter.com"
              ><i class="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com"
              ><i class="fab fa-github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com"
              ><i class="fab fa-facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com"
              ><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="/About">About</a></p>
            <p><a href="/Help">Help</a></p>
            <p><a href="/Contact">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              10th,vivekanadhar street ,Main Road  <br />
              Town hall, CBE.
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-8870754365<br></br>
              +91-0486534566</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">SimpleLearn@gmail.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 simpleLearn.
          </footer>
        </div>
      </div>
    </>
  )
}
