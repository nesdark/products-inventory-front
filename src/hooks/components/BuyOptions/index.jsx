import { useState } from 'react';

import { Container, Quantity } from './styles.js';
import { Button } from '../Button';
import { breakpoints } from '../../pages/styles/breakpoints.js';
import { Link } from 'react-router-dom';

export function BuyOptions(breakpoint = false) {
  const [quantity, setQuantity] = useState(0);

  function addQuantity(quantityToAdd) {
    const newQuantity = quantity + quantityToAdd;
    setQuantity(newQuantity);
  }

  function removeQuantity(quantityToRemove) {
    const newQuantity = quantity > 0 ? quantity - quantityToRemove : quantity;
    setQuantity(newQuantity);
  }

  return (
    <Container>
      <Quantity>
        <button id="lessQuantity" onClick={() => removeQuantity(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 13C4 12.4477 4.33579 12 4.75 12H21.25C21.6642 12 22 12.4477 22 13C22 13.5523 21.6642 14 21.25 14H4.75C4.33579 14 4 13.5523 4 13Z"
              fill="white"
            />
          </svg>
        </button>

        <p>{quantity}</p>

        <button id="moreQuantity" onClick={() => addQuantity(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 13C4 12.5858 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 12.5858 22 13C22 13.4142 21.6642 13.75 21.25 13.75H4.75C4.33579 13.75 4 13.4142 4 13Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4C13.4142 4 13.75 4.33579 13.75 4.75V21.25C13.75 21.6642 13.4142 22 13 22C12.5858 22 12.25 21.6642 12.25 21.25V4.75C12.25 4.33579 12.5858 4 13 4Z"
              fill="white"
            />
          </svg>
        </button>
      </Quantity>
      <Link to="/">
        <Button title="incluir" />
      </Link>
    </Container>
  );
}
