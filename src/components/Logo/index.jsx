import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Logo({ admin = false }) {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src="../../public/logo.png" alt="logo autopartes" />
          {admin ? <span>admin</span> : ''}
        </Link>
      </div>
    </Container>
  );
}
