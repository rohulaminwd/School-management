import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({payProduct}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardErr, setCardErr] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [tranjectionId, seTtranjectionId] = useState("");

    const {price, _id, name, email, productName} = payProduct;
    console.log(price)

    useEffect(() => {
        
        fetch("https://arcane-journey-12889.herokuapp.com/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => {
              if(data?.clientSecret){
                setClientSecret(data.clientSecret)
              }
          });
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }

        const card = elements?.getElement(CardElement);
        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

        setCardErr(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // confirm payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email,
                },
              },
            },
        );

        if(intentError){
            setCardErr(intentError?.message)
            setProcessing(false);
        }else{
            setCardErr('');
            seTtranjectionId(paymentIntent.id)
            setSuccess('Congrats..! Your payment is successfully completed')

            // patch send  data server
            const payment = {
              order: _id,
              name: name,
              price: price,
              transactionId: paymentIntent.id,
              productName: productName
            }

            fetch(`https://arcane-journey-12889.herokuapp.com/order/${_id}`, {
              method: "PATCH",
              headers: { 
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(payment),
            }).then(res => res.json())
            .then(data => {
              setProcessing(false)
              console.log(data)
            })

        }
        
    } 
    if(processing){
      <Loading />
    }

    return (
        <div>
            <h1>CheckoutForm</h1>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button className='btn btn-secondary btn-xs my-3 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay now
                </button>
            </form>
            { cardErr && <p className='text-red-500'>{cardErr}</p>}
            { success && <div className='text-green-500'>
                  <p>{success}</p>
                  <p className='text-blue-900 font-bold'>{tranjectionId}</p>
              </div>
            }
        </div>
    );
};

export default CheckoutForm;