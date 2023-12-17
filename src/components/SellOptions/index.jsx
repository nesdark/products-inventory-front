import { useState } from 'react';

import { api } from '../../services/api.js';

import { Container, Quantity } from './styles.js';
import { Button } from '../Button/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';

export function SellOptions(breakpoint = false) {
  const [quantity, setQuantity] = useState(0);

  const params = useParams();

  const navigate = useNavigate();

  function addQuantity(quantityToAdd) {
    const newQuantity = quantity + quantityToAdd;
    setQuantity(newQuantity);
  }

  function removeQuantity(quantityToRemove) {
    const newQuantity = quantity > 0 ? quantity - quantityToRemove : quantity;
    setQuantity(newQuantity);
  }

  async function handleSell(e) {
    e.preventDefault();

    if (quantity == 0) {
      return alert(
        'Por favor seleciona un valor diferente de cero para vender'
      );
    }

    await api
      .put(`/products/sell/${params.id}?quantity=${quantity}`, {
        quantity,
      })
      .then(() => {
        alert('Producto actualizado con éxito!');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert('No fue posible vender');
        }
      });
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
      <Button title="Vender" onClick={handleSell} />
    </Container>
  );
}
