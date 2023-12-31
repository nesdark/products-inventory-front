import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import { Container, Main, DashBoard } from './styles';
import { Header } from '../../../components/Header';
import { Card } from '../../../components/Card';
import { Products } from '../../../components/Products';

export function Home() {
  const [search, setSearch] = useState('');

  const [costPriceTotal, setCostPriceTotal] = useState(0);
  const [salePriceTotal, setSalePriceTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchPrices() {
      const response = await api.get(`/products?returnAll=true`);
      let costPriceSum = 0;
      let salePriceSum = 0;

      response.data.map((product) => {
        costPriceSum += Number(product.costPrice) * Number(product.quantity);
        salePriceSum += Number(product.salePrice) * Number(product.quantity);
      });

      setCostPriceTotal(costPriceSum.toFixed(2));
      setSalePriceTotal(salePriceSum.toFixed(2));
      setTotalPrice((salePriceTotal - costPriceTotal).toFixed(2));

      // setCostPriceTotal(
      //   Number(costPriceTotal.toFixed(2)).toLocaleString('pt-BR')
      // );
      // setSalePriceTotal(
      //   Number(salePriceTotal.toFixed(2)).toLocaleString('pt-BR')
      // );
      // setTotalPrice(totalPrice.toFixed(2).toLocaleString('pt-BR'));
    }
    fetchPrices();
  });
  return (
    <Container>
      <Header search={setSearch} />
      <Main>
        <Products search={search} />
      </Main>
    </Container>
  );
}
