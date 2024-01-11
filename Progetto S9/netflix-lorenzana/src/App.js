import './App.css';
import MyFooter from './components/footer';
import HarryPotterG from './components/harrypottergalleria';
import MyNavbar from './components/navbar';
import LordG from './components/lordoftherings';
import StarWarsG from './components/starwars';
import TVShowsHeader from './components/tvshowsheader';

function App() {
  return (
    <>
      <MyNavbar/>
      <TVShowsHeader/>
      <HarryPotterG/>
      <LordG/>
      <StarWarsG/>
      <MyFooter/>
    </>
  );
}

export default App;
