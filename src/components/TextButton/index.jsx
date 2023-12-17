import { Container } from './styles.js';

export function TextButton({ title, icon: Icon, size, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={size} />}
      {title}
    </Container>
  );
}
