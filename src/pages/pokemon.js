import React, { Component } from "react";
import api from "../services/api";
import {
  Container,
  Header,
  Avatarperfil,
  Nameperfil,
  BioPerfil,
  DetalhesPoke,
} from "../styles";

export default class Pokemon extends Component {
  state = {
    captureRate: null,
  };

  async componentDidMount() {
    const { pokemon } = this.props.route.params;

    try {
      // Faz uma requisição para obter a taxa de captura
      const response = await api.get(pokemon.speciesUrl);
      this.setState({ captureRate: response.data.capture_rate });
    } catch (error) {
      console.error("Erro ao buscar taxa de captura:", error);
    }
  }

  render() {
    const { pokemon } = this.props.route.params;
    const { captureRate } = this.state;

    return (
      <Container>
        <DetalhesPoke>
          <Avatarperfil source={{ uri: pokemon.sprite }} />
          <Nameperfil>{pokemon.name.toUpperCase()}</Nameperfil>
          <BioPerfil>HP: {pokemon.hp}</BioPerfil>
          <BioPerfil>Ataque: {pokemon.attack}</BioPerfil>
          <BioPerfil>Defesa: {pokemon.defense}</BioPerfil>
          <BioPerfil>
            Taxa de Captura: {captureRate !== null ? captureRate : "Carregando..."}%
          </BioPerfil>
        </DetalhesPoke>
      </Container>
    );
  }
}
