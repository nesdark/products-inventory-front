import { useState } from 'react';

import { api } from '../../../services/api.js';

import { BsChevronLeft, BsUpload } from 'react-icons/bs';

import { Container, Main, Edit } from './styles.js';

import { Header } from '../../../components/Header/index.jsx';
import { Footer } from '../../../components/Footer/index.jsx';
import { TextButton } from '../../../components/TextButton/index.jsx';
import { LabelInput } from '../../../components/LabelInput/index.jsx';
import { useNavigate, Link } from 'react-router-dom';

export function CreateDish() {
  const [title, setTitle] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const navigate = useNavigate();

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function setDefaultSalePriceValue(percent) {
    const defaultPricePercentage = (percent * costPrice) / 100;

    const defaultPrice = parseInt(costPrice) + defaultPricePercentage;

    return defaultPrice;
  }

  async function handleNewProduct(e) {
    e.preventDefault();

    if (!title) {
      return alert('Escribe el nombre del producto.');
    }

    if (category == '') {
      return alert('Por favor llena el campo de categoria');
    }

    if (!costPrice) {
      return alert('Por favor llena el campo de precio de costo!');
    }

    if (salePrice == '') {
      return alert('Por favor llena el campo de precio de venta!');
      // setSalePrice(setDefaultSalePriceValue(30));
    }

    if (!quantity) {
      return alert('Por favor llena el campo de cantidad!');
      // setSalePrice(setDefaultSalePriceValue(30));
    }

    await api.post('/products/create', {
      title,
      costPrice,
      salePrice,
      category,
      quantity,
    });

    alert('Prato criada com sucesso!');
    navigate('/');
  }

  return (
    <Container>
      <Header admin />

      <Main>
        <Link to="/">
          <TextButton icon={BsChevronLeft} size={32} title="voltar" />
        </Link>
        <h2>Adicionar prato</h2>
        <Edit>
          <LabelInput
            type="text"
            label="Nome"
            placeholder="Ex.: Bomba Pila Gasolina"
            gray
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            Categoria
            <select id="category" onChange={handleCategory}>
              <option value="">Selecione uma opção</option>
              <option value="Bujias">Bujias</option>
              <option value="Termometro">Termometro</option>
              <option value="Kit de Sutura">Kit de Sutura</option>
            </select>
          </label>
          <LabelInput
            type="number"
            label="Precio de Costo"
            placeholder="$ 00,00"
            gray
            className="price"
            onChange={(e) => setCostPrice(e.target.value)}
          />

          <LabelInput
            type="number"
            label="Precio de Venta"
            placeholder={!salePrice ? '$ 00,00' : `$ salePrice`}
            gray
            className="price"
            onChange={(e) => setSalePrice(e.target.value)}
          />

          <LabelInput
            type="number"
            label="Cantidad"
            placeholder="Ex.: 10"
            gray
            className="price"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <Link to="/">
            <button type="submit" onClick={handleNewProduct}>
              Salvar alterações
            </button>
          </Link>
        </Edit>
      </Main>

      <Footer />
    </Container>
  );
}
