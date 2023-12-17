import { Container, Fruits } from './styles';
import { breakpoints } from '../../pages/styles/breakpoints';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

export function Card({ $type, title, $value }) {
  return (
    <Container $type={$type}>
      <div>
        <span>{title}</span>
        {$type == 'income' ? (
          <FaRegArrowAltCircleUp size={24} style={{ color: '#49AA26' }} />
        ) : $type == 'expense' ? (
          <FaRegArrowAltCircleDown size={24} style={{ color: '#E92929' }} />
        ) : (
          <MdAttachMoney size={24} style={{ color: '#FFFFFF' }} />
        )}
      </div>
      <h2>$ {$value}</h2>
    </Container>
  );
}
