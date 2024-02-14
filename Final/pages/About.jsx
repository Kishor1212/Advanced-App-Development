import React from 'react'
import "../assets/css/About.css"
import Navbar from '../components/Navbar'
import pic1 from "../assets/images/pic7.jpg"
import pic2 from "../assets/images/caring.jpg"
import pic3 from "../assets/images/about3.jpg"
export default function About() {
    
  return (
    <div>
    <Navbar/>
    <div className='about-container1'>
    <div className='about-sub-container1'>
    <h1> &nbsp;The Mission</h1>
    <p>
    &nbsp;"The mission of our home care service for seniors is to enhance the quality of life for elderly individuals by providing personalized and compassionate care in the comfort of their own homes. We are dedicated to promoting independence, dignity, and well-being through our professional services. Our goal is to ensure that each senior we serve receives the support they need to live comfortably and safely, while also fostering meaningful connections and enriching their daily lives. At our core, we strive to be a trusted partner in senior care, offering reliable assistance and support that empowers both seniors and their families."
    </p>
    
    <img src={pic1}/>
    </div>
    </div>
    <div className='about-container2'>
    <div className='about-sub-container2'>
    <h1>
      About Us!
    </h1>
    <p>
    "At Harmony Home Care, our mission is simple yet profound: to provide seniors with the highest quality of personalized care, allowing them to age gracefully in the familiarity and comfort of their own homes. We believe in upholding each individual's dignity, independence, and overall well-being as our utmost priority.
    </p>
    <img src={pic2}/>
    </div>
    <p>Through our compassionate team of caregivers, we strive to create an environment where seniors feel valued, respected, and supported in every aspect of their daily lives. Whether it's assistance with activities of daily living, medication management, or simply providing companionship and emotional support, we are dedicated to meeting the unique needs and preferences of each senior we serve.
</p>
<nbsp/>
<nbsp/>
<nbsp/>
<p>
Our commitment extends beyond just meeting physical needs; we aim to cultivate meaningful relationships and enriching experiences that promote a sense of purpose and fulfillment for our seniors. With Harmony Home Care, families can have peace of mind knowing that their loved ones are receiving exceptional care that is tailored to their individual needs, allowing them to thrive and enjoy a fulfilling quality of life in the comfort of home."
    </p>
    </div>
    <div className="image-container">
    
    </div>
    <div class="mfooter" style={{marginTop:"-0.5cm"}}>
        <div class="heading">
          <h2>BIO<sup></sup></h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="#">App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">DevOps</a></p>
            <p><a href="#">Web designing</a></p>
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
    </div>
  )
}
