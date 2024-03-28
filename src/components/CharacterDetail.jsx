import '../scss/components/CharacterDetail.scss';
import { Link } from 'react-router-dom';
function CharacterDetail({ characterDetailData }) {
  return (
    <section className="sectionDetailData">
      <div className="sectionDetailData__returnHome">
        <Link to={'/'}>Volver a Inicio</Link>
      </div>
      <div className="sectionDetailData__containerData">
        <figure className="sectionDetailData__containerData--image">
          <img
            src={characterDetailData?.picture}
            alt={characterDetailData?.name}
          />
        </figure>
        <div className="sectionDetailData__containerData--info">
          <h4>{characterDetailData?.name}</h4>
          <p>
            Status:{' '}
            {characterDetailData?.status === 'Alive' ? 'Alive: 💃' : 'Dead: ☠️'}
          </p>
          <p>Species: {characterDetailData?.species}</p>
          <p>Origin: {characterDetailData?.origin}</p>
          <p>Episodes: {characterDetailData?.episodes}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
