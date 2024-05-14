import "./App.css";
import UniversityJalandhar from "./component/demo/UniversityJalandhar";
import Home from "./component/demo/Home";
import Header from "./component/demo/layout/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/demo/layout/Footer";
import Program1 from "./component/demo/Program1";
import About from "./component/demo/About";
import Faq from "./component/demo/Faq";
import Login from "./component/demo/Login_Register";
import HireFromUs from "./Screen/HireFromUs";
import JoinUS from "./component/Hero/JoinUS";
import WorkIntegration from "./component/WorkIntegration/WorkIntegration";
import LearnMoreAboutHero from "./component/Hero/LearnMoreAboutHero";
import JoinView from "./component/Hero/JoinView";
import Forbidden from "./component/forbidden/Forbidden";
import NeedHelp from "./component/needhelp/NeedHelp";
import Enquire from "./component/EnquireNow/Enquire";
import ReadMore from "./component/readmore/ReadMore";
import LoginVerify from "./component/login/LoginVerify";
import Success from "./component/successfully/Success";
import FormComplete from "./component/Form/FormComplete";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Apply from "./component/Hero/Apply";
import Reviews from "./Screen/Reviews/Review";
import  Payment  from "./component/register/Payment.jsx";

function App() {
  const dispatch = useDispatch();

  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const  {data}  = await axios.get("/stripeapiKey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error('Error fetching Stripe API key:', error);
      // Handle the error, such as setting a default API key or displaying an error message
    }
  }
  console.log(stripeApiKey);

  useEffect(() => {
    getStripeApiKey()
  }, [dispatch]);
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program1 />} />
        <Route path="/campusJalandhar" element={<UniversityJalandhar />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/verify" element={<LoginVerify/>} />
        <Route path="/hirefromus" element={<HireFromUs/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/joinus" element={<JoinUS/>} />
        <Route path="/forbidden" element={<Forbidden/>} />
        <Route path="/work-integration" element={<WorkIntegration/>} />
        <Route path="/heros" element={<LearnMoreAboutHero/>} />
        <Route path="/needhelp" element={<NeedHelp/>} />
        <Route path="/enquire" element={<Enquire/>} />
        <Route path="/readmore" element={<ReadMore/>} />
        <Route path="/form" element={<FormComplete/>} />
        <Route path="/joinus/view/:id" element={<JoinView/>} />
        <Route path="/joinus/view/:id/apply/:id" element={<Apply/>} />
        <Route path="/successfully" element={<Success/>} />

        {
         stripeApiKey && (
          <Route
            path="/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
          )
        }
      </Routes>
      <Footer/>
      <Enquire/>
    </>
  );
}

export default App;
