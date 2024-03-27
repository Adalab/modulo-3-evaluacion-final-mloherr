import { Link } from 'react-router-dom';
function CharacterDetail({ characterDetailData }) {
  return (
    <section>
      <div>
        <Link to={'/'}>Volver a Inicio</Link>
      </div>
      <div>
        <figure>
          <img
            src={characterDetailData.picture}
            alt={characterDetailData.name}
          />
        </figure>
        <div>
          <h4>{characterDetailData.name}</h4>
          <p>Status: {characterDetailData.status}</p>
          <p>Species: {characterDetailData.species}</p>
          <p>Origin: {characterDetailData.origin}</p>
          <p>Episodes: {characterDetailData.episodes}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
