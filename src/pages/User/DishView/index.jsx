import { BsChevronLeft } from 'react-icons/bs';

import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import { useState, useEffect } from 'react';

import { Container, Main, Info, Ingredients } from './styles';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TextButton } from '../../../components/TextButton';
import { CartOptions } from '../../../components/CartOptions';

export function DishView() {
  const [data, setData] = useState(null);

  const params = useParams();
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <Main>
          <Link to="/">
            <TextButton icon={BsChevronLeft} size={32} title="voltar" />
          </Link>
          <div>
            <Info>
              <div>
                <h2>{data.product.title}</h2>
                <p>
                  Precio de costo: <span>{data.product.costPrice}</span>
                </p>
                <p>
                  Precio de venta: <span>{data.product.salePrice}</span>
                </p>
              </div>
              <CartOptions productData={data.product} />
            </Info>
          </div>
        </Main>
      )}
      <Footer />
    </Container>
  );
}
