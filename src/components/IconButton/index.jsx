import { Container } from './styles';

export function IconButton({ icon: Icon, size, $style, ...rest }) {
  return (
    <Container $style={$style} {...rest}>
      {Icon && <Icon size={size} />}
    </Container>
  );
}
