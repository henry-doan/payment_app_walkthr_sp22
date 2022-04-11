import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CreditCard } from 'react-bootstrap-icons';
import BriantreeDrop from './BraintreeDrop';

const Home = () => {
  const [amount, setAmount] = useState(150.5);

  return (
    <Container>
      <h1 className="text-center">React Payments</h1>
      <CreditCard size={96}  />
      <br />
      <label>Payment Amount</label>
      <input value={amount} disabled style={{ fontSize: '18px' }} />
      <hr />
      <BriantreeDrop amount={amount} />
    </Container>
  );
}

export default Home;