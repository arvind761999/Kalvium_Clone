import React, { useEffect, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, createOrder, newregister } from "../../redux/action/RegisterAction"; // Import newregister action creator

const Register = () => {
  const navigate = useNavigate();
  const {register, error } = useSelector((state) => state.newRegister); // Remove newregister from useSelector since it's not used here
  const dispatch = useDispatch();
  const alert = useAlert();

  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [state, setState] = useState('');
  const [totalprice, setTotalPrice] = useState(999); // Set totalprice to 999

  const proceed_to_payment = (e) => {
    e.preventDefault();
    console.log(firstname, lastName, email, state, grade, totalprice);
    const myForm = new FormData();
    myForm.append('firstname', firstname);
    myForm.append('lastname', lastName);
    myForm.append('email', email);
    myForm.append('state', state);
    myForm.append('grade', grade);
    myForm.append('totalprice', totalprice);
    dispatch(createOrder(myForm));
    const data ={
      firstname,
      lastName,
      email,
      state,
      grade,
      totalprice
    }
    sessionStorage.setItem('orderInfo',JSON.stringify(data))
    navigate('/payment')
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    
  }, [dispatch, alert, error]);

  const [isInputTriggered, setIsInputTriggered] = useState(false);

  const handleGetOtp = (e) => {
    e.preventDefault();
    setIsInputTriggered(true);
  };

  return (
    <div>
      <form onSubmit={proceed_to_payment}>
        <div className="an-info-grid">
          <div className="an-firstname an-field">
            <label htmlFor="first-name">First Name</label>
            <input className="an-input" type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} name="first-name" placeholder="First name"/>
          </div>
          <div className="an-lastname an-field">
            <label htmlFor="last-name">Last Name</label>
            <input className="an-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="last-name" placeholder="Last name"/>
          </div>
          <div className="an-email an-field">
            <label htmlFor="email">Email</label>
            <input className="an-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email"/>
          </div>
          <div className="an-yop an-field">
            <label htmlFor="year of passing">12th year of passing</label>
            <input className="an-input" type="text" value={grade} onChange={(e) => setGrade(e.target.value)} name="year-of-passing" placeholder="Year"/>
          </div>
          <div className="an-state an-field">
            <label htmlFor="state">State</label>
            <input className="an-input" type="text" value={state} onChange={(e) => setState(e.target.value)} name="state" placeholder="State"/>
          </div>
        </div>
        <button className="button bg-success mt-4 " role="button" type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Register;
