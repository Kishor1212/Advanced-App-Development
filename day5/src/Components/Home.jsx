import React from 'react'
import img from "../assets/pic4.jpg";
import g from "../assets/pic6.jpg";
import h from "../assets/pic7.jpg";
import work1 from "../assets/work.png";
import'./Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bodyy">
    <div className="header"><marque><h2>AGHARAM SENIOR CARE</h2></marque>
    <div class="topnav">
    <a href="#">Home</a>
    <a href="/about">About Us</a>
    <a href="/job">Jobs</a>
    <a href="/service">Services</a>
    <a href="/contact">Contact</a>
    <a href="/login">Login</a>
    
    


    <img src={img} height="1cm"></img>
    <div className="achievements">
            <div className="work">
                <div className="img1"></div>
                <p className="work-heading">NURSE CARE AT HOME</p>
                <p className="work-text">In Case Your Parents Or Any Elderly Require Constant Attention And Care,We Take No Chances In This Scenario.We Try To Understand Your Parent's Mentality And Match Them With A Convenient HomeStay Nurse Who Works Around The Clock To Care For Them.</p>
            </div>
            <div className="work">
            <div className="img2">
                </div>
                <p className="work-heading">ELDER-CARE SERVICES</p>
                <p className="work-text">We Understand The Need Of Having Someone To Take Care Of Your Parents In Your Absence.At Anvayaa,We Provide Complete Elderly Care At Home.From Daily Care And Leisure Care To Payment Care Emergency Care And More,We Take Care If Them Like A Member Of Our Own family.</p>
            </div>
            <div className="work">
            <div className="img3"></div>
                <p className="work-heading">PHYSIOTHERAPIST</p>
                <p className="work-text">Besides Health And Elderly Care,We Also Provide For Daily Care Services Like Cooking,Domestic Help, Property Management Or Preparing A Customized Diet Plan And Covid Care Services.</p>
            </div>
            </div>
    <div className="achievements">
            <div className="work">
                <div className="img1"></div>
                <p className="work-heading">DIAGNOSTIC</p>
                <p className="work-text">A Team Of Experienced Phlebotomists Who Collect Samples From The Patient's Home.Once A Patient Books A Test,The Phlebotomists Visits As Per The Agreed Time Slot  And Collects The Urine/Blood Sample.Within 48 Hours Of collecting The Sample, We Send Out Accurate Reports To Patients Via Email.</p>
            </div>
            <div className="work">
            <div className="img2">
                </div>
                <p className="work-heading">POST OPERATIVE CARE</p>
                <p className="work-text">After A Surgical Procedure,The Patient Needs Assistance Until He/She Recovers.Elders Take More Time To Recover And More Intense Care For Recovery.Our Team Of Experts Provide The Best Post-Operative Care At Home.</p>
            </div>
            <div className="work">
            <div className="img3"></div>
                <p className="work-heading">OTHER SERVICES</p>
                <p className="work-text">Besides Health And Elderly Care,We Also Provide For Daily Care Services Like Cooking,Domestic Help, Property Management Or Preparing A Customized Diet Plan And Covid Care Services.</p>
            </div>
            </div>
    </div>
    <div className="litreal"><h2>Trained Caregivers</h2>
    <p>&nbsp;</p>
    <p>When your loved ones suffer from a debilitating condition, watching them struggle to perform their daily activities can be a miserable feeling. While you wish to support them in every step of their life, your schedule gives you no space, leaving you feeling helpless.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Sounds Familiar?</p>
    <p>But wait! There is so much that you can do to actually help them.</p>
    <p>&nbsp;</p>
    <p>Caregivers are trained attendants who help patients in their daily activities such as bathing, dressing,eating, and maintaining personal hygiene. They are also trained to assist with mobility, check vital signs, prevent bedsores, avoid falls & injuries and provide foot & nail care (especially for diabetic patients) and much more...</p>
    <div className="particular">
    <img src={g}  alt="caregivers" style={{width:"5cm",height:"5cm",marginLeft:"7cm",marginTop:"-1cm"}}></img>
    <br></br>
    </div>
    <div className="particular1">
    <img src={h} alt="caregivers" style={{width:"5cm",height:"5cm",marginLeft:"7cm",marginTop:"1cm"}}></img>
    </div>
    <h5>Any Questions? Check Out</h5>
    <p>&nbsp;</p>
    <button className="btn3">FAQ</button>
    <p>&nbsp;</p>

    </div>
    <div className="image3">
    <img src={work1} height="1cm"></img>
    </div>
    <div className="footer">
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              We are a home care service for seniors, dedicated to providing compassionate and high-quality care to our clients. Our team of experienced caregivers is committed to helping seniors maintain their independence and dignity while living in the comfort of their own homes.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: Agharam@seniorcare.com</p>
          </div>
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a><br></br>
              <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a><br></br>
              <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
     
    </div> 
    
    
  
</div>
    
    


</div>
    
  );
}

export default Home;