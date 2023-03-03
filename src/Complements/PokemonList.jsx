import React, { Component } from "react";
import axios from "axios";
import PokemonFilter from "./PokemonFilter"; // Importamos el componente PokemonFilter

class PokemonList extends Component {
  state = {
    pokemons: [],
    filteredPokemons: [], // Agregamos un nuevo estado para almacenar los pokemones filtrados
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((res) => {
        const pokemons = res.data.results;
        const pokemonDataRequests = pokemons.map((pokemon) =>
          axios.get(pokemon.url)
        );
        Promise.all(pokemonDataRequests)
          .then((responses) => {
            const pokemonData = responses.map((res) => res.data);
            this.setState({
              pokemons: pokemonData,
              filteredPokemons: pokemonData,
            }); // Actualizamos ambos estados con los datos de todos los pokemones
          })
          
      })
}

  // Agregamos una nueva función para manejar el filtro de pokemones
  handleFilter = (element) => {
    const filteredPokemons = this.state.pokemons.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name === element)
    );
    this.setState({ filteredPokemons }); // Actualizamos el estado de los pokemones filtrados
  };

  render() {
    return (
      <div>
        <div className="tag">
          <h1 className="tagline">Gotta Catch ' Em All</h1>
        </div>
        <PokemonFilter onFilter={this.handleFilter} />
        <div className="pokemon-list row justify-content-center ">
          {this.state.filteredPokemons.map(
            (
              pokemon // Renderizamos los pokemones filtrados en lugar de los pokemones sin filtrar
            ) => (
              <div
                className="card m-2 pokemon-card" style={{ width: "18rem" }} key={pokemon.name}>
                
                <div className="id">#{pokemon.id} </div>
                <div className="pokemon-name">{pokemon.name}</div>
                <img className="img-pok" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="types">{pokemon.types[0].type.name} </div>                 

              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default PokemonList;
