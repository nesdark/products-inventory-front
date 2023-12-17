import { Container, FormScreen } from './styles';

import { api } from '../../services/api';

import { Logo } from '../../components/Logo';
import { LabelInput } from '../../components/LabelInput';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

export function SignOn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar');
        }
      });

    navigate('/');
  }

  const app = useRef();

  let outlined;
  window.addEventListener('load', function () {
    outlined = app.current.offsetWidth <= 1024 ? false : true;
  });

  return (
    <Container ref={app}>
      <Logo />
      <FormScreen>
        <h2>Crie sua conta</h2>

        <LabelInput
          label="Nome"
          placeholder="Exemplo: Maria da Silva"
          {...outlined}
          onChange={(e) => setName(e.target.value)}
        />

        <LabelInput
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          {...outlined}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelInput
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          {...outlined}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" title="Criar conta" onClick={handleSignUp} />

        <Link to="/">
          <TextButton type="button" title="Já tenho uma conta" />
        </Link>
      </FormScreen>
    </Container>
  );
}
