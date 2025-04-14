
import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import api from "../services/api";

import {
  Container,
  PokemonImage,
  PokemonName,
  PokemonStatText,
  PokemonDetailsBox,
  Container2,
  Container4,
} from "../styles";

export default class Pokemon extends Component {
  state = {
    captureRate: null,
  };

  async componentDidMount() {
    const { pokemon } = this.props.route.params; 

    try {
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
      
        <PokemonDetailsBox>
      
          <Container4>
            <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
            <PokemonStatText>{pokemon.hp} HP</PokemonStatText>
          </Container4>

          <PokemonImage source={{ uri: pokemon.sprite }} />

          <PokemonStatText>Ataque: {pokemon.attack}</PokemonStatText>
          <PokemonStatText>Defesa: {pokemon.defense}</PokemonStatText>

          {captureRate !== null ? (
            <PokemonStatText>Taxa de Captura: {captureRate}%</PokemonStatText>
          ) : (
            <ActivityIndicator size="small" color="#D63D29" />
          )}
        </PokemonDetailsBox>
      </Container>
    );
  }
}
