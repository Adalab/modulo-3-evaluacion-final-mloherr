import CharacterCard from './CharacterCard';

function CharacterList({ charactersData }) {
  return (
    <section>
      <ul>
        {charactersData.map((character) => {
          return <CharacterCard key={character.id} characterData={character} />;
        })}
      </ul>
    </section>
  );
}

export default CharacterList;
