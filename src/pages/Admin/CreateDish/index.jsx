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

    alert('Producto creado exitosamente!');
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
              <option value="">Seleccione una opción</option>
              <option value="Automático">Automático</option>
              <option value="Amortiguador">Amortiguador</option>
              <option value="Anillos">Anillos</option>
              <option value="Banda de freno trasera">
                Banda de freno trasera
              </option>
              <option value="Bobina encendido">Bobina encendido</option>
              <option value="Bocina delanteras">Bocina delanteras</option>
              <option value="Bomba agua">Bomba agua</option>
              <option value="Bomba de aceite">Bomba de aceite</option>
              <option value="Bombin inferior croche">
                Bombin inferior croche
              </option>
              <option value="Bombin superior croche">
                Bombin superior croche
              </option>
              <option value="Buje grande">Buje grande</option>
              <option value="Buje grande tijera">Buje grande tijera</option>
              <option value="Buje pequeño">Buje pequeño</option>
              <option value="Buje pequeño tijera delantera">
                Buje pequeño tijera delantera
              </option>
              <option value="Cable bujía">Cable bujía</option>
              <option value="Cepillo limpia parabrisas">
                Cepillo limpia parabrisas
              </option>
              <option value="Capsula presión de aceite">
                Capsula presión de aceite
              </option>
              <option value="Carrocería">Carrocería</option>
              <option value="Cilindro de ignición">Cilindro de ignición</option>
              <option value="Collarín">Collarín</option>
              <option value="Concha axial">Concha axial</option>
              <option value="Concha bancada">Concha bancada</option>
              <option value="Concha biela">Concha biela</option>
              <option value="Conectores">Conectores</option>
              <option value="Correas de servicio">Correas de servicio</option>
              <option value="Correas tiempo">Correas tiempo</option>
              <option value="Envase de agua">Envase de agua</option>
              <option value="Envase de dirección">Envase de dirección</option>
              <option value="Estopera bomba aceite">
                Estopera bomba aceite
              </option>
              <option value="Estopera cigüeñal delantera">
                Estopera cigüeñal delantera
              </option>
              <option value="Estopera cigüeñal trasera">
                Estopera cigüeñal trasera
              </option>
              <option value="Estopera copa caja">Estopera copa caja</option>
              <option value="Estopera leva">Estopera leva</option>
              <option value="Estopera rueda delantera">
                Estopera rueda delantera
              </option>
              <option value="Estopera rueda trasera">
                Estopera rueda trasera
              </option>
              <option value="Estopera sello">Estopera sello</option>
              <option value="Estopera sello bujias">
                Estopera sello bujias
              </option>
              <option value="Estopera sello bujias">
                Estopera sello bujias
              </option>
              <option value="Estopera trípoide">Estopera trípoide</option>
              <option value="Filtro aceite">Filtro aceite</option>
              <option value="Filtro aire">Filtro aire</option>
              <option value="Filtro gasolina malla">
                Filtro gasolina malla
              </option>
              <option value="Flotadores">Flotadores</option>
              <option value="Gema pequeña">Gema pequeña</option>
              <option value="Goma barra estabilizadora delantera">
                Goma barra estabilizadora delantera
              </option>
              <option value="Goma copa caja">Goma copa caja</option>
              <option value="Goma trípoide">Goma trípoide</option>
              <option value="Gomas u o gomas sector">
                Gomas u o gomas sector
              </option>
              <option value="Juego de empaque">Juego de empaque</option>
              <option value="Kit cajetín">Kit cajetín</option>
              <option value="Kit carburador">Kit carburador</option>
              <option value="Kit de cadena">Kit de cadena</option>
              <option value="Kit embrague">Kit embrague</option>
              <option value="Kit palanca">Kit palanca</option>
              <option value="Kit de varillaje">Kit de varillaje</option>
              <option value="Manillas">Manillas</option>
              <option value="Microfiltros">Microfiltros</option>
              <option value="Módulos">Módulos</option>
              <option value="Mozo trasero - Rodamiento trasero">
                Mozo trasero - Rodamiento trasero
              </option>
              <option value="Muñon">Muñon</option>
              <option value="Pastilla delantera freno">
                Pastilla delantera freno
              </option>
              <option value="Pastilla freno trasera">
                Pastilla freno trasera
              </option>
              <option value="Pistones">Pistones</option>
              <option value="Polea acanalada">Polea acanalada</option>
              <option value="Polea grande">Polea grande</option>
              <option value="Polea lisa">Polea lisa</option>
              <option value="Polea pequeña">Polea pequeña</option>
              <option value="Puente cardan">Puente cardan</option>
              <option value="Puntas de tripoides">Puntas de tripoides</option>
              <option value="Rodamiento base amortiguador">
                Rodamiento base amortiguador
              </option>
              <option value="Rodamiento delantero">Rodamiento delantero</option>
              <option value="Rotula">Rotula</option>
              <option value="Sensores">Sensores</option>
              <option value="Silicon">Silicon</option>
              <option value="Soportes motor y caja">
                Soportes motor y caja
              </option>
              <option value="Tapa aceite">Tapa aceite</option>
              <option value="Tapa rosca módulo">Tapa rosca módulo</option>
              <option value="Tijera - Brazos oscilantes - Delantero">
                Tijera - Brazos oscilantes - Delantero
              </option>
              <option value="Tren delantero">Tren delantero</option>
              <option value="Tensores">Tensores</option>
              <option value="Termostato">Termostato</option>
              <option value="Terminal">Terminal</option>
              <option value="Triceta">Triceta</option>
              <option value="Válvula admisión">Válvula admisión</option>
              <option value="Válvula escapé">Válvula escapé</option>
              <option value="Válvula PCV">Válvula PCV</option>
              <option value="Válvula vvt-i">Válvula vvt-i</option>
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
