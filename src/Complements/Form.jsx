import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super(); // Va a heredar de component

    this.state = {//Con React siempre trabajamos con eventos,escucha ciertas "cosas que pasan" 
      name: "",
      img: "#",
      type: "",
    };
  }
  
  
  //await--> hace esperar las promesas
  fetchApi = async () => {//Fetch hace peticiones y respuestas de manera asíncrona y funciona con "promesas"
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.name}` //Busca datos en la url
    );
    let data = await res.json();  //Los datos se guardan en "data" en forma de Objeto (JASON)

    console.log(data);
    this.setState({
      img: data.sprites.front_default,
      type: data.types[0].type.name
    });
  };

  // componentDidMount(){ //Montaje de componente a penas este existe
  //   this.fetchApi();
  //}

  

  handleName = (event) => {//handleName, por cada vez que cambie el evento, se debe ejecutar el código, en general son los "hadle´s"
    let minus = (event.target.value).toLowerCase();
    this.setState({ 
      name: minus
    }); //Esta forma ya está predeterminada.
  };
  

  handleSubmit = (event) => {
    let name = this.state.name;
    console.log(name);

    this.fetchApi();
    event.preventDefault();//Prevenir el comportamiento por defecto (limpiar la consola o datos)
  };

  render() {
    if (this.state.img === "#") {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <label className="form-label text-black"></label>

                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Nombre de pokemon"
                    className="form-control"
                    onChange={this.handleName} //onChange: permite ejecutarse cada vez que "handleName" cierto valor
                  />

                  <button type="submit" className="btn  btn-search">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <label className="form-label text-black"></label>

                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Nombre de pokemon"
                    className="form-control"
                    onChange={this.handleName} //onChange: permite ejecutarse cada vez que "handleName" cierto valor
                  />

                  <button type="submit" className="btn  btn-search">Buscar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card-onepok">
              <h3 className="card-text-in">{this.state.name}</h3>
              <img src={this.state.img} alt="pokemon" className="img-pok" />
              <h3 className="card-text-in">{this.state.type}</h3>
            </div>
            <button
              onClick={() => {
                this.setState({ img: "#" });
              }}
              className="btn btn-primary"
            >
              Nueva búsqueda
            </button>
          </div>
        </div>
      );}
  }
}

