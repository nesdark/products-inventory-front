import { Container, Fruits } from './styles';
import { breakpoints } from '../../pages/styles/breakpoints';

export function Banner() {
  const banner = window.innerWidth <= 768 ? 'banner-mobile' : 'banner';

  return (
    <Container>
      <Fruits>
        <img src={`src/public/${banner}.png`} alt="Imagem de fruta" />
      </Fruits>
      <div className="text">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
