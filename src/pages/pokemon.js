// Importações principais do React e de bibliotecas auxiliares
import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

// Importa o serviço de requisições HTTP
import api from "../services/api";

// Importa os estilos utilizados nesta tela
import {
  Container,
  PokemonImage,
  PokemonName,
  PokemonStatText,
  PokemonDetailsBox,
  Container2,
  Container4,
} from "../styles";

// Componente de classe que exibe os detalhes de um Pokémon
export default class Pokemon extends Component {
  state = {
    captureRate: null, // Armazena a taxa de captura do Pokémon
  };

  // Executa assim que o componente for montado
  async componentDidMount() {
    const { pokemon } = this.props.route.params; // Recebe os dados do Pokémon via navegação

    try {
      // Faz uma requisição à URL da espécie do Pokémon para obter a taxa de captura
      const response = await api.get(pokemon.speciesUrl);
      this.setState({ captureRate: response.data.capture_rate });
    } catch (error) {
      console.error("Erro ao buscar taxa de captura:", error);
    }
  }

  render() {
    const { pokemon } = this.props.route.params; // Dados principais do Pokémon
    const { captureRate } = this.state; // Estado local da taxa de captura

    return (
      <Container>
        {/* Bloco principal com os detalhes do Pokémon */}
        <PokemonDetailsBox>
          {/* Nome e HP do Pokémon no topo */}
          <Container4>
            <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
            <PokemonStatText>{pokemon.hp} HP</PokemonStatText>
          </Container4>

          {/* Imagem do Pokémon */}
          <PokemonImage source={{ uri: pokemon.sprite }} />

          {/* Atributos de ataque e defesa */}
          <PokemonStatText>Ataque: {pokemon.attack}</PokemonStatText>
          <PokemonStatText>Defesa: {pokemon.defense}</PokemonStatText>

          {/* Exibe a taxa de captura ou um indicador de carregamento */}
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
