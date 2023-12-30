import { Container } from './styles';

export function Button({
  title,
  icon: Icon,
  iconSize,
  quantity,
  height,
  ...rest
}) {
  return (
    <Container
      {...rest}
      className={Icon ? 'responsiveHide' : '' + height ? 'height' : ''}
    >
      <span>0</span>
      {Icon && <Icon size={iconSize} />}
      <div>{title}</div>
    </Container>
  );
}
