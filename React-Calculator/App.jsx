import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <Container>
      <h1 className="mt-3">Calculator </h1>
      <Calculator />
    </Container>
  );
}

export default App;
