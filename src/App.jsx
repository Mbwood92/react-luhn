import React, { useState } from 'react'

const valid = (cardNumber) => {
 const digits = cardNumber.toString().split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubledDigit = digits[i] * 2;
    digits[i] = doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0)

  return sum % 10 === 0
}

function ValidCard () {
  const [cardNumber, setCardNumber] = useState('')
  const [isValid, setIsValid] = useState(null)

  const handleChange = (event) => {
    const value = event.target.value
    setCardNumber(value)
    setIsValid(null)
  };

  function handleValid () {
    const result = valid(cardNumber)
    setIsValid(result)
  }

  return (
    <div>
      <h1>Check if card number is valid</h1>
      <label>
        Enter card number here:
        <input type="text" value={cardNumber} onChange={handleChange} />
      </label>
      <button onClick={handleValid}>Submit</button>
      {isValid !== null && (
        <p>{isValid ? 'card valid' : 'Card invalid'}</p>
      )}
    </div>
  );
};

export default ValidCard

//validCard(1234567890123456); //should be false
//validCard(4408041234567893); //should be true
//validCard(38520000023237); //should be true
//validCard(4222222222222); //should be true