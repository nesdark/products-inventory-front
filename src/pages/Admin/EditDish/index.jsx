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
  const [costPrice, setCostPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [addQuantity, setAddQuantity] = useState(0);

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
      quantity: Number(quantity) + Number(addQuantity),
    });

    alert('Producto actualizado con éxito!');
    navigate('/');
  }

  async function handleDeleteProduct(e) {
    e.preventDefault();

    if (!window.confirm('Estas seguro que deseas eliminar el producto?')) {
      return;
    }

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
          <section id="editView">
            <h3>Actualizar producto</h3>
            <Edit>
              <div className="flex-item">
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
                  <select
                    id="category"
                    onChange={handleCategory}
                    value={category}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Bujias">Bujias</option>
                    <option value="Tren delantero">Tren delantero</option>
                    <option value="Terminal">Terminal</option>
                    <option value="Rotula">Rotula</option>
                    <option value="GEMELOS BARRA ESTABILIZADORA">
                      GEMELOS BARRA ESTABILIZADORA
                    </option>
                    <option value="BUJE PEQUENO TIJERA DELANTERA">
                      BUJE PEQUEÑO TIJERA DELANTERA
                    </option>
                    <option value="BUJE GRANDE TIJERA ">
                      BUJE GRANDE TIJERA{' '}
                    </option>
                    <option value="GOMAS U O GOMAS SECTOR">
                      GOMAS U O GOMAS SECTOR
                    </option>
                    <option value="BASE AMORTIGUADOR DELANTERA">
                      BASE AMORTIGUADOR DELANTERA
                    </option>
                    <option value="RODAMIENTO DELANTERO">
                      RODAMIENTO DELANTERO
                    </option>
                    <option value="BOCINA DELANTERAS">BOCINA DELANTERAS</option>
                    <option value="MOZO TRASERO - RODAMIENTO TRASERO">
                      MOZO TRASERO - RODAMIENTO TRASERO
                    </option>
                    <option value="RODAMIENTO BASE AMORTIGUADOR">
                      RODAMIENTO BASE AMORTIGUADOR
                    </option>
                    <option value="GOMA BARRA ESTABILIZADORA DELANTERA">
                      GOMA BARRA ESTABILIZADORA DELANTERA
                    </option>
                    <option value="TIJERA - BRAZOS OSCILANTES - DELANTERO">
                      TIJERA - BRAZOS OSCILANTES - DELANTERO
                    </option>
                    <option value="PUNTAS DE TRIPOIDE">
                      PUNTAS DE TRIPOIDE
                    </option>
                    <option value="COPA CAJA">COPA CAJA</option>
                    <option value="TRICETA">TRICETA</option>
                    <option value="SOPORTES MOTOR Y CAJA">
                      SOPORTES MOTOR Y CAJA
                    </option>
                    <option value="MUNON">MUNON</option>
                  </select>
                </label>
              </div>
              <div className="flex-item">
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
                <LabelInput
                  type="number"
                  label="Adicionar Cantidad"
                  placeholder="Ex.: 10"
                  gray
                  className="quantity"
                  onChange={(e) => setAddQuantity(e.target.value)}
                />
              </div>

              <div className="options">
                <button type="button" onClick={(e) => handleDeleteProduct(e)}>
                  Excluir prato
                </button>
                <button type="submit" onClick={(e) => handleUpdateProduct(e)}>
                  Salvar alterações
                </button>
              </div>
            </Edit>
          </section>
        </Main>
      )}

      <Footer />
    </Container>
  );
}
