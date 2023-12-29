import { api } from '../../services/api.js';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { IconButton } from '../IconButton/index.jsx';

export function Products({ search }) {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  let timeoutRunning = false;

  useEffect(() => {
    async function fetchProductsBySearch() {
      const response = await api.get(`/products?title=${search}`);
      setProducts(response.data);
    }

    async function fetchProducts() {
      const response = await api.get(`/products?returnAll=true`);
      setProducts(response.data);
    }

    if (search.trim() == '') {
      fetchProducts();
    } else {
      fetchProductsBySearch();
    }
  }, [search]);

  async function handleDeleteProduct(e) {
    e.preventDefault();

    if (!window.confirm('Estas seguro que deseas eliminar el producto?')) {
      return;
    }

    if (!timeoutRunning) {
      setTimeout(() => {
        timeoutRunning = false;
      }, 5000);
      timeoutRunning = true;
    }

    let confirmation = () => {
      return window.confirm('Estas seguro que deseas eliminar el producto?');
    };

    if (!timeoutRunning) {
      if (confirmation) {
        return;
      }
    }

    // await api.delete(`/products/${params.id}`);

    alert('Producto excluído con éxito!');
    navigate('/');
  }

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Precio de costo</th>
            <th>Precio de venta</th>
            <th>Categoria</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td onClick={() => handleDetails(product.id)}>
                  {product.title}
                </td>
                <td onClick={() => handleDetails(product.id)}>
                  $ {product.costPrice}
                </td>
                <td onClick={() => handleDetails(product.id)}>
                  $ {product.salePrice}
                </td>
                <td onClick={() => handleDetails(product.id)}>
                  {product.category}
                </td>
                <td onClick={() => handleDetails(product.id)}>
                  {product.quantity}
                </td>
                <td onClick={() => handleDetails(product.id)}>06/12/2023</td>
                <td>
                  <IconButton
                    icon={FaRegTrashCan}
                    size={24}
                    $style="#8d0314"
                    onClick={handleDeleteProduct}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
