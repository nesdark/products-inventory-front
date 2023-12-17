import { Container } from './styles';

export function IconButton({ icon: Icon, size, ...rest }) {
  return <Container {...rest}>{Icon && <Icon size={size} />}</Container>;
}
