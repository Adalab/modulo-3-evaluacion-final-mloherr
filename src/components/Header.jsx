import logotipe from '../images/RickAndMortyLogotipe.png';
import '../scss/components/Header.scss';
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Rick and Morty: Character Finder</h1>
      <figure className="header__logotipe">
        <img src={logotipe} alt="Logotipe from show Rick and Morty" />
      </figure>
    </header>
  );
}

export default Header;
