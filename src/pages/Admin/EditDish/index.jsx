import { useState, useEffect } from 'react';
import { api } from '../../../services/api.js';

import { BsChevronLeft } from 'react-icons/bs';

import { Container, Main, Edit } from './styles.js';

import { Header } from '../../../components/Header/index.jsx';
import { Footer } from '../../../components/Footer/index.jsx';
import { TextButton } from '../../../components/TextButton/index.jsx';
import { LabelInput } from '../../../components/LabelInput/index.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';

export function EditDish() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const params = useParams();

  const [title, setTitle] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  async function handleUpdateProduct(e) {
    e.preventDefault();

    await api.put(`/products/update/${params.id}`, {
      title,
      salePrice,
      costPrice,
      category,
      quantity,
    });

    alert('Producto actualizado con éxito!');
    navigate('/');
  }

  async function handleDeleteProduct(e) {
    e.preventDefault();

    await api.delete(`/products/${params.id}`);

    alert('Producto excluído con éxito!');
    navigate('/');
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);

      const { title, category, salePrice, costPrice, quantity } =
        response.data.product;
      setTitle(title);
      setCategory(category);
      setSalePrice(salePrice);
      setCostPrice(costPrice);
      setQuantity(quantity);
    }
    fetchProduct();
  }, []);

  return (
    <Container>
      <Header admin />

      {data && (
        <Main>
          <Link to="/">
            <TextButton icon={BsChevronLeft} size={32} title="voltar" />
          </Link>
          <h2>Actualizar producto</h2>
          <Edit>
            <LabelInput
              type="text"
              label="Nome"
              placeholder="Ex.: Bomba Pila Gasolina"
              gray
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label>
              Categoria
              <select id="category" onChange={handleCategory} value={category}>
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
              value={costPrice}
            />

            <LabelInput
              type="number"
              label="Precio de Venta"
              placeholder={!salePrice ? '$ 00,00' : `$ salePrice`}
              gray
              className="price"
              onChange={(e) => setSalePrice(e.target.value)}
              value={salePrice}
            />

            <LabelInput
              type="number"
              label="Cantidad"
              placeholder="Ex.: 10"
              gray
              className="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <div className="options">
              <button type="button" onClick={(e) => handleDeleteProduct(e)}>
                Excluir prato
              </button>
              <button type="submit" onClick={(e) => handleUpdateProduct(e)}>
                Salvar alterações
              </button>
            </div>
          </Edit>
        </Main>
      )}

      <Footer />
    </Container>
  );
}
