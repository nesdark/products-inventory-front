import { useRef } from 'react';
import { useAuth } from '../../hooks/auth';

import { BsSearch } from 'react-icons/bs';
import { FaCartPlus, FaGear } from 'react-icons/fa6';
import { GoSignOut } from 'react-icons/go';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Menu } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { TextButton } from '../TextButton';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export function Header({ admin = false, search }) {
  const { signOut } = useAuth();

  const header = useRef();

  const MenuControls = {
    open() {
      header.current.classList.add('menu-active');
    },
    close() {
      header.current.classList.remove('menu-active');
    },
  };

  return (
    <Container ref={header} className={admin ? 'admin' : ''}>
      <IconButton
        icon={FiMenu}
        size={32}
        className="open-menu"
        onClick={MenuControls.open}
      />
      <IconButton
        icon={AiOutlineClose}
        size={32}
        className="close-menu"
        onClick={MenuControls.close}
      />

      <h2>Menu</h2>

      {admin ? <Logo admin /> : <Logo />}

      <Input
        type="search"
        icon={BsSearch}
        placeholder="Busca por piezas y categorias"
        search={search}
      />

      {/* <Link to="/shopping-cart">
        <IconButton icon={FaCartPlus} size="32" />
      </Link> */}

      {admin ? (
        <Link to="/dish/create">
          <Button
            icon={FaGear}
            iconSize={24}
            title="Nuevo produto"
            quantity={0}
            height
          />
        </Link>
      ) : (
        ''
      )}

      <Link to="/">
        <IconButton icon={GoSignOut} size="32" onClick={signOut} />
      </Link>
    </Container>
  );
}
