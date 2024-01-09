import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';

import { Container, Main } from './styles';

export function Changelog() {
  return (
    <Container>
      <SideBar />
      <div>
        <Header />
        <Main>
          <h2>Changelog</h2>
          <p>Nuevas actualizaciones y mejoras del inventario de JBC.</p>
          <ul>
            <li className="30/12/2023">
              <div>
                <h3>Nuevo interfaz, Barra lateral y mas...</h3>
                <span>30/12/2023</span>
              </div>
              <p>
                Las últimas modificaciones y mejoras para hacer tu experiencia
                aún mejor. Aquí tienes las novedades:
                <ol>
                  <li>
                    Cambios Visuales:
                    <li>
                      Ha sido renovado los elementos visuales para una interfaz
                      más agradable e intuitiva.
                    </li>
                    <li>
                      Se agregó 'Eside', una característica que ofrece un
                      accesso a las futuras funcionalidades.
                    </li>
                  </li>
                  <li>
                    Nuevas Visualizaciones de Eside:
                    <li>
                      Ver Actualizaciones: Explora las últimas novedades de un
                      vistazo.
                    </li>
                    <li>
                      Histórico: Sumérgete en la historia de las ventas diárias,
                      mensales y anuales.
                    </li>
                    <li>
                      Cierre Diario: Registra el cierre diario para poder ver
                      mas informaciones en el histórico.
                    </li>
                    <li>
                      Crear Categoría: Poderás crear y apagar categorías
                      fácilmente.
                    </li>
                  </li>
                  <li>
                    Eliminar Producto desde la Página Principal: Presentamos un
                    práctico botón 'Eliminar' para productos directamente desde
                    la página principal. Simplificamos tus tareas de gestión de
                    productos.
                  </li>
                  <li>
                    Traducciones al Español: La plataforma ahora está disponible
                    en español
                  </li>
                </ol>
              </p>
            </li>
          </ul>
        </Main>
      </div>
    </Container>
  );
}
