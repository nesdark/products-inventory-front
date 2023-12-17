import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function Products({ search }) {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr onClick={() => handleDetails(product.id)}>
                <td>{product.title}</td>
                <td>$ {product.costPrice}</td>
                <td>$ {product.salePrice}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>06/12/2023</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
