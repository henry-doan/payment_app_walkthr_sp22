import { useState, useEffect } from 'react'; 
import { Spinner, Container, Button } from 'react-bootstrap'; 
import braintree from 'braintree-web-drop-in'; 
import BraintreeDropin from 'braintree-dropin-react'; 
import BraintreeSubmitButton from './BraintreeSubmitButton'; 
import axios from 'axios';
import { Navigate } from 'react-router-dom'; 

const BraintreeDrop = ({ dispatch, amount }) => {
  const [loaded, setLoad] = useState(false)
  const [token, setToken] = useState('') 
  const [redirect, setRedirect] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect( () => { 
    axios.get('/api/braintree_token') 
      .then( res => { 
        const { data: token } = res; 
        setToken(token)
        setLoad(true) 
      }) 
      .catch( res => {
        console.log('Error Setting Up Payments. Try Again!') 
      });
  }, [] ) 

  const handlePaymentMethod = (payload) => { 
    axios.post('/api/payment', { amount, ...payload }) 
      .then(res => { 
        const { data: transactionId } = res; 
        setRedirect(true)
        setTransactionId(transactionId)
      }) 
      .catch(res => { 
        console.log('Error Posting Payment. Try Again!') 
        window.location.reload(); 
    });
  } 

  return (
    <>
     { redirect ?
       <Navigate to={{ pathname: '/payment_success', state: { amount, transactionId } }}/>
       :
       <>
       { loaded ?
         <Container>
           <BraintreeDropin
             braintree={braintree}
             authorizationToken={token}
             handlePaymentMethod={handlePaymentMethod}
             renderSubmitButton={BraintreeSubmitButton}
           />
         </Container>
         :
         <Container>
           <Button variant="primary" disabled>
             <Spinner
               as="span"
               animation="grow"
               size="sm"
               role="status"
               aria-hidden="true"
             />
             Payment Experience. Please Wait...
           </Button>
         </Container>
       }
    </>
    }
  </>
  ) 
}

export default BraintreeDrop;