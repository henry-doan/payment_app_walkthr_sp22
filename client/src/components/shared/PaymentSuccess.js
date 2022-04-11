import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const { state } = useLocation()

  const { amount, transactionId } = state

  return(
    <Container className="text-center">
      <h1>Thank You For Your Purchase!</h1>
      <p>You have been successfully charged: ${amount}</p>
      <p>Your Transcation Id is: {transactionId}</p>
      <Link to='/'>Start Over</Link>
    </Container>
  )
}

export default PaymentSuccess;