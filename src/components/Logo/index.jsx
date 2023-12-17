import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Logo({ admin = false }) {
  return (
    <Container>
      <div>
        <img src="./logo.jpg" alt="" />
        <Link to="/">
          <span>JBC-Inventory</span>
        </Link>
      </div>
      {admin ? <span>admin</span> : ''}
    </Container>
  );
}
