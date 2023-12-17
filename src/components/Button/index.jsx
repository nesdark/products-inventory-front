import { Container } from './styles';

export function Button({ title, icon: Icon, quantity, height, ...rest }) {
  return (
    <Container
      {...rest}
      className={Icon ? 'responsiveHide' : '' + height ? 'height' : ''}
    >
      <span>0</span>
      {Icon && <Icon size={32} />}
      <div>{title}</div>
    </Container>
  );
}
