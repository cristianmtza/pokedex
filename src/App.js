import './App.css';
import Form from './Complements/Form';
import Navbar from './Complements/Navbar';
import PokemonList from './Complements/PokemonList'


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        < Form />
        < PokemonList />
      </div>

    </div>
  );
}

export default App;
