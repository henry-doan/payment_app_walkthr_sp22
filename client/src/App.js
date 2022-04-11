import Home from './components/shared/Home';
import PaymentSuccess from './components/shared/PaymentSuccess';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/payment_success' element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;