import { Container } from './styles';

export function LabelInput({
  icon: Icon,
  label,
  outline = false,
  gray = false,
  ...rest
}) {
  return (
    <Container className={outline ? 'outline' : '' + gray ? 'gray' : ''}>
      {label}
      <input {...rest} />
    </Container>
  );
}
