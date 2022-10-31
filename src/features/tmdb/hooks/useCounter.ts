import { useState } from 'react';

export const useCounter = (initiValue = 1) => {

  const [counter, setCounter] = useState(initiValue);

  const addValueToCounter = (value: number) => {
    setCounter((prevState) => Math.max(prevState + value, initiValue))
    return;
  }

  const resetCounter = () => {
    console.log('entra en el counter')
    setCounter(initiValue);
  }

  return {
    counter,
    setCounter,
    addValueToCounter,
    resetCounter,
  }
}