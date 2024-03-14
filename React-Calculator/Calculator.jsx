import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result) || '');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <Wrapper>
      <Screen value={result} />
      <ButtonBox>
        <Button value="7" onClick={() => handleClick('7')} />
        <Button value="8" onClick={() => handleClick('8')} />
        <Button value="9" onClick={() => handleClick('9')} />
        <Button value="/" onClick={() => handleClick('/')} />
        <Button value="4" onClick={() => handleClick('4')} />
        <Button value="5" onClick={() => handleClick('5')} />
        <Button value="6" onClick={() => handleClick('6')} />
        <Button value="*" onClick={() => handleClick('*')} />
        <Button value="1" onClick={() => handleClick('1')} />
        <Button value="2" onClick={() => handleClick('2')} />
        <Button value="3" onClick={() => handleClick('3')} />
        <Button value="-" onClick={() => handleClick('-')} />
        <Button value="C" onClick={() => handleClick('C')} />
        <Button value="0" onClick={() => handleClick('0')} />
        <Button value="=" onClick={() => handleClick('=')} />
        <Button value="+" onClick={() => handleClick('+')} />
      </ButtonBox>
    </Wrapper>
  );
}

export default Calculator;