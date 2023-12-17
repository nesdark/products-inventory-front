import { Container } from './styles';

export function DishesSection({ title, children: Children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {Children}
    </Container>
  );
}
