import { FaRegTrashCan } from 'react-icons/fa6';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Main, ShoppingCartTable, Quantity } from './styles';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { IconButton } from '../../components/IconButton';

import { useCart } from '../../hooks/cart';

export function ShoppingCart() {
  const id = 27;
  const total = 1;

  const [cart, setCart] = useState([]);

  function updateQuantity(index, newQuantity) {
    cart[index].quantity = newQuantity;
  }

  useEffect(() => {
    async function cartAccess() {
      const cartAccess = await useCart().cart;
      setCart(cartAccess);
      console.log(cartAccess);
      console.log(cart);
    }
    cartAccess();
  }, []);

  return (
    <Container>
      <SideBar />
      <div>
        <Header admin />
        <Main>
          <h2>Carrito</h2>
          <ShoppingCartTable>
            <thead>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </thead>
            <tbody>
              {cart.map((product, index) => {
                return (
                  <tr>
                    <td className="name">
                      <Link to={`/dish/${id}`}>{product.title}</Link>
                    </td>
                    <td>
                      <div className="prices">
                        $ {product.salePrice}
                        <span className="costPrice">$ {product.costPrice}</span>
                      </div>
                    </td>
                    <Quantity>
                      <div>
                        <label htmlFor="quantity" className="sr-only">
                          Cantidad del producto
                        </label>
                        <input
                          type="number"
                          placeholder={product.quantity}
                          id="quantity"
                        />
                      </div>
                    </Quantity>
                    <td className="subTotal">$ {product.totalSalePrice}</td>
                    <td aria-label="Remove {} from shopping cart">
                      <IconButton
                        icon={FaRegTrashCan}
                        size={24}
                        $style="rgb(255 59 83)"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </ShoppingCartTable>
          <p>Total: $ {total}</p>
        </Main>
      </div>
    </Container>
  );
}
