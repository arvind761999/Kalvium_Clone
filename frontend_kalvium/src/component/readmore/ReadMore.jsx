import React from 'react'
import { Link } from 'react-router-dom'
import '../readmore/readmore.css'

function ReadMore() {
  return (
    <>
      <div id="stay-vigilant">
        <div class="stay-navbar">
            <img src="image/Kalvium-Logo-SVG.svg" alt="kalvium-logo" class="logo-of-kalvium" />
        </div>

        <div class="stay-container">
            
            <div class="stay-wrapper">
                <img src="image/str1.png" alt="str1-img" class="str1" />
               <div class="stay-img">
               
                <img src="image/Fraud-Alert-img.webp" alt="fraud-alert-img" class="fraud-alert-img" />
               </div>
               <img src="image/zic-zack-11.png" alt="zic-zack-11-img" class="zic-zack-11" />
               <div class="stay-text-container">
                
                <div class="heading-stay">
                    <h1>Kalvium Students And Parents - Stay Vigilant!</h1>
                </div>

                <div class="recently">
                    <p>Recently, we have observed a rise in fraudulent activities where unauthorized individuals are reaching out to parents/students and demanding money in exchange for admission to our programs.</p>
                </div>

                <div class="here">
                    <p>Here are a few instructions to ensure you stay vigilant in case you come across such individuals:</p>
                </div>

                <div class="kalvium-points">
                   <p> 1. Kalvium does not accept any bank transfers, direct UPI payments, cash transactions, or any other direct/in-person payments for any kind of fees. All transactions happen via the online mode.</p>
                   <p>2. To ensure your payments are safe, while making an online payment, please ensure you check the domain of the payment page. It has to be a kalvium.com domain or subdomain.</p>
                   <p>3. In case you are pursuing or interested in taking up the Kalvium program from any of our partner universities, please ensure that you pay the tuition/hostel/admission fee only to the University in accordance with its guidelines. In this case, Kalvium only collects a seat reservation fee through an online payment mode.</p>
                </div>

                <div class="if-you">
                    <p>If you suspect any fraudulent activity, please reach out to <Link to="" class="srikanth">srikanth@kalvium.com</Link> with the details.</p>
                </div>

                <div class="thank-you">
                    <p>Thank you for your understanding and cooperation.</p>
                </div>
                <img src="image/tri1.png" alt="tri1" class="tri1" />
               </div>
            </div>
        </div>
       </div>


       <div class="stay-vigilant-footer">
        <div class="footer-element">
            &copy; &nbsp; KALVI CAREER EDUCATION PRIVATE LIMITED
        </div>
       </div>

    </>
  )
}

export default ReadMore