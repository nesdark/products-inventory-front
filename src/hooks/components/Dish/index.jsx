import { Container, Favorite } from './styles';
import { BuyOptions } from '../BuyOptions';
import { Link } from 'react-router-dom';

export function Dish({
  imgSource,
  name,
  description,
  price,
  admin = false,
  id,
  handleDetails,
}) {
  return (
    <Container className={admin ? 'admin' : ''}>
      <Favorite>
        {admin ? (
          <Link to={`/dish/update/${id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13.7514 4.81033L21.1896 12.2486M7.99997 25H2.06262C1.7808 25 1.51052 24.888 1.31124 24.6888C1.11196 24.4895 1.00001 24.2192 1.00001 23.9374V18C0.999523 17.8621 1.02626 17.7253 1.07868 17.5977C1.1311 17.4701 1.20818 17.354 1.30551 17.2562L17.2447 1.31701C17.3436 1.21661 17.4614 1.13687 17.5914 1.08245C17.7214 1.02803 17.8609 1 18.0018 1C18.1427 1 18.2822 1.02803 18.4122 1.08245C18.5422 1.13687 18.6601 1.21661 18.7589 1.31701L24.683 7.24107C24.7834 7.33995 24.8631 7.45781 24.9176 7.58779C24.972 7.71777 25 7.85727 25 7.99819C25 8.1391 24.972 8.27861 24.9176 8.40859C24.8631 8.53857 24.7834 8.65642 24.683 8.7553L8.7438 24.6945C8.64599 24.7918 8.52995 24.8689 8.40231 24.9213C8.27467 24.9737 8.13795 25.0005 7.99997 25Z"
                stroke="#E1E1E6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6997 23.4256L23.0754 13.1996C25.3788 10.6747 25.7145 6.54645 23.5384 3.90789C22.9926 3.24297 22.3283 2.70638 21.586 2.33093C20.8437 1.95547 20.0391 1.74903 19.2211 1.72422C18.4032 1.6994 17.5893 1.85674 16.829 2.18661C16.0687 2.51648 15.3781 3.01196 14.7993 3.64278L13.0399 5.57435L11.5236 3.90789C9.2086 1.39558 5.4236 1.02947 3.00443 3.40291C2.39479 3.99814 1.90282 4.7227 1.55859 5.53231C1.21435 6.34192 1.02508 7.21958 1.00233 8.11167C0.979577 9.00376 1.12383 9.89154 1.42627 10.7208C1.72872 11.55 2.183 12.3033 2.76136 12.9345L12.3801 23.4256C12.5557 23.6153 12.7928 23.7217 13.0399 23.7217C13.287 23.7217 13.5241 23.6153 13.6997 23.4256Z"
              stroke="#E1E1E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Favorite>

      <img src={imgSource} alt="Foto do prato" />

      <h3 onClick={() => handleDetails(id)}>{name} &gt;</h3>

      <p>{description}</p>

      <strong id="price">R$ {price}</strong>
      {admin ? '' : <BuyOptions breakpoint />}
    </Container>
  );
}
