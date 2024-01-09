import { FaRegTrashCan } from 'react-icons/fa6';

import { Link, useNavigate } from 'react-router-dom';

import { Container, Main, ShoppingCartTable } from './styles';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { IconButton } from '../../components/IconButton';

import { useCart } from '../../hooks/cart';
import { Button } from '../../components/Button';

export function ShoppingCart() {
  const { cart, handleSell, removeProduct } = useCart();

  let total = 0;

  const navigate = useNavigate();

  cart.map((product) => {
    total += Number(product.totalSalePrice);
  });

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
                      <Link to={`/dish/${product.id}`}>{product.title}</Link>
                    </td>
                    <td>
                      <div className="prices">
                        $ {product.salePrice}
                        <span className="costPrice">$ {product.costPrice}</span>
                      </div>
                    </td>
                    <td>
                      <div>{product.quantity}</div>
                    </td>
                    <td className="subTotal">$ {product.totalSalePrice}</td>
                    <td aria-label="Remove {} from shopping cart">
                      <IconButton
                        icon={FaRegTrashCan}
                        size={24}
                        $style="rgb(255 59 83)"
                        onClick={() => removeProduct(product.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </ShoppingCartTable>
          <p>Total: $ {total}</p>
          <Button
            onClick={() => {
              handleSell();
              navigate('/');
            }}
            title="Vender"
          ></Button>
        </Main>
      </div>
    </Container>
  );
}
