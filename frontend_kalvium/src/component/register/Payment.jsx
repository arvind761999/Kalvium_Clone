import React from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { CardCvcElement, CardExpiryElement, CardNumberElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
// import { createOrder } from '../../redux/action/RegisterAction';
import axios from 'axios'
import '../register/payment.css'

const options = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

function Payment() {
  const {order} = useSelector((state) => state.newRegister);
  console.log(order)
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  console.log(orderInfo)
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const paymentData = {
    amount: Math.round(orderInfo.totalprice *100),
    currency: 'INR',
    description: 'user resgistration'
  };
  console.log(paymentData)
  
  const orderDetail = {
    order,
    totalPrice: orderInfo.totalprice,
  };
  console.log(orderDetail)

  const submitHandler = async (e) => {
    e.preventDefault();
    document.querySelector("#pay_btn").disabled = true;

    try {
      const { data } = await axios.post("/payment/process", paymentData);
      console.log(data)
      const client_secret = data.client_secret;
      console.log(client_secret)
      console.log(orderInfo.email)

      if (!stripe || !elements) return;
     
      let result = await stripe.confirmCardPayment(client_secret, {  
        payment_method: {
          card: elements.getElement(CardNumberElement),
          
          
          }
      });
      console.log(result)
      // console.log(stripe.confirmCardPayment)

     
      if (result.error) {
        alert.error("payment failed",result.error.message);
        document.querySelector('#pay_btn').disabled = false;
      } else {
        console.log("success")
        if (result.paymentIntent.status === "succeeded") {
          // order.paymentInfo = {
          //   id: result.paymentIntent.id,
          //   status: result.paymentIntent.status,
          // };
          console.log(result.paymentIntent.status)
          // dispatch(createOrder(order))
          // navigate('/order/success')
          navigate('/successfully')
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
      console.log(result.paymentIntent.id)
    } catch (error) {
      // console.log(error)
      document.querySelector("#pay_btn").disabled = false;
      alert.error(error.message);
    }
  };

  return (
    <div className="row wrapper mt-5 pt-5 ps-5">
      <div className="col-12 col-lg-6">
        <form className="shadow-lg">
          <h1 className="mb-4">Card Info</h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <CardNumberElement
              type="text"
              id="card_num_field"
              className="form-control"
              options={options}
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <CardExpiryElement
              type="text"
              id="card_exp_field"
              className="form-control"
              options={options}
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <CardCvcElement
              type="text"
              id="card_cvc_field"
              className="form-control"
              options={options}
            />
          </div>

          <button
            id="pay_btn"
            type="submit"
            onClick={submitHandler}
            className="btn btn-block py-3"
          >
           Pay {`- ${orderInfo && orderInfo.totalprice}`}
          </button>
        </form>
      </div>
    </div>
  );
}

// const PaymentWrapper = () => (
//   <Elements stripe={stripePromise}>
//     <Payment />
//   </Elements>
// );

export default Payment;




