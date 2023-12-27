import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { api } from '../../../services/api.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Main, DashBoard } from './styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

export function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductsBySearch() {
      const response = await api.get(`/products?search=${search}`);
      setProducts(response.data);
    }

    async function fetchProductsByCategory() {
      const response = await api.get(`/products?returnAll=true`);
      setProducts(response.data);
    }

    if (search.trim() == '') {
      fetchProductsByCategory();
    } else {
      fetchProductsBySearch();
    }
  }, [search]);

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  return (
    <Container>
      <Header search={setSearch} />
      <Main></Main>
      <Footer />
    </Container>
  );
}
