import React from 'react';
import PropTypes from 'prop-types';

const PokemonFilter = ({ onFilter }) => {
  return (
    <div className=" container filters">
      <div className="filter-buttons">
        <button
          className="filter-button normal"
          onClick={() => onFilter("normal")}
        >
          Normal
        </button>
        <button className="filter-button fire" onClick={() => onFilter("fire")}>
          Fuego
        </button>
        <button
          className="filter-button water"
          onClick={() => onFilter("water")}
        >
          Agua
        </button>
        <button
          className="filter-button electric"
          onClick={() => onFilter("electric")}
        >
          Eléctrico
        </button>
        <button
          className="filter-button grass"
          onClick={() => onFilter("grass")}
        >
          Hierba
        </button>
        <button className="filter-button ice" onClick={() => onFilter("ice")}>
          Hielo
        </button>
        <button
          className="filter-button fighting"
          onClick={() => onFilter("fighting")}
        >
          Lucha
        </button>
        <button
          className="filter-button poison"
          onClick={() => onFilter("poison")}
        >
          Veneno
        </button>
        <button
          className="filter-button ground"
          onClick={() => onFilter("ground")}
        >
          Tierra
        </button>
        <button
          className="filter-button flying"
          onClick={() => onFilter("flying")}
        >
          Volador
        </button>
        <button
          className="filter-button psychic"
          onClick={() => onFilter("psychic")}
        >
          Psíquico
        </button>
        <button className="filter-button bug" onClick={() => onFilter("bug")}>
          Bicho
        </button>
        <button className="filter-button rock" onClick={() => onFilter("rock")}>
          Roca
        </button>
        <button
          className="filter-button ghost"
          onClick={() => onFilter("ghost")}
        >
          Fantasma
        </button>
        <button
          className="filter-button dragon"
          onClick={() => onFilter("dragon")}
        >
          Dragón
        </button>
        <button className="filter-button dark" onClick={() => onFilter("dark")}>
          Siniestro
        </button>
        <button
          className="filter-button steel"
          onClick={() => onFilter("steel")}
        >
          Acero
        </button>
        <button
          className="filter-button fairy"
          onClick={() => onFilter("fairy")}
        >
          Hada
        </button>

        
      </div>
    </div>
  );
};

PokemonFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default PokemonFilter;

