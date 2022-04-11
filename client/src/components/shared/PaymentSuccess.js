import { Container } from 'react-bootstrap';
import { Link, Navigate, useParams } from 'react-router-dom';

const PaymentSuccess = () => {
 const params = useParams()

  if(params && params.transactionId)
    return(
      <Container className="text-center">
        <h1>Thank You For Your Purchase!</h1>
        <p>You have been successfully charged: ${params.amount}</p>
        <p>Your Transcation Id is: {params.transactionId}</p>
        <Link to='/'>Start Over</Link>
      </Container>
    )
  else
    return(<Navigate to="/" />);
}

export default PaymentSuccess;