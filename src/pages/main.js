import React, { Component } from "react";
import { Keyboard, ActivityIndicator, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  Type,
  ContainerCards,
} from "../styles";

export default class Main extends Component {
  state = {
    newPokemon: "",
    pokemons: [],
    loading: false,
  };

  async componentDidMount() {
    const pokemons = await AsyncStorage.getItem("pokemons");
    if (pokemons) {
      this.setState({ pokemons: JSON.parse(pokemons) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { pokemons } = this.state;
    if (prevState.pokemons !== pokemons) {
      AsyncStorage.setItem("pokemons", JSON.stringify(pokemons));
    }
  }

  handleAddPokemon = async () => {
    try {
      const { pokemons, newPokemon } = this.state;
      this.setState({ loading: true });
      const response = await api.get(`/pokemon/${newPokemon.toLowerCase()}`);
      if (pokemons.some(p => p.name.toLowerCase() === newPokemon.toLowerCase())) {
        alert("Pokémon já adicionado!");
        this.setState({ loading: false });
        return;
      }
      const data = {
        name: response.data.name,
        id: response.data.id,
        sprite: response.data.sprites.front_default,
        types: response.data.types.map((t) => t.type.name).join(", "),
        hp: response.data.stats.find((s) => s.stat.name === "hp").base_stat,
        attack: response.data.stats.find((s) => s.stat.name === "attack").base_stat,
        defense: response.data.stats.find((s) => s.stat.name === "defense").base_stat,
        speciesUrl: response.data.species.url, // Pegamos o link para buscar a taxa de captura
      };

      this.setState({
        pokemons: [...pokemons, data],
        newPokemon: "",
        loading: false,
      });
      Keyboard.dismiss();
    } catch (error) {
      alert("Pokémon não encontrado! Verifique se o nome está correto.");
      this.setState({ loading: false });
    }
  };

  render() {
    const { pokemons, newPokemon, loading } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Pokémon"
            value={newPokemon}
            onChangeText={(text) => this.setState({ newPokemon: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddPokemon}
          />
          <SubmitButton loading={loading} onPress={this.handleAddPokemon}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List
          showsVerticalScrollIndicator={false}
          data={pokemons}
          keyExtractor={(pokemon) => String(pokemon.id)}
          renderItem={({ item }) => (
            <User>
              <ContainerCards>
              <TouchableOpacity
                onPress={() => navigation.navigate("Pokemon", { pokemon: item })}
              >
                <Avatar source={{ uri: item.sprite }} />
                <Name>{item.name}</Name>
                <Bio>ID: {item.id}</Bio>
                <Type>{item.types}</Type>
              </TouchableOpacity>
          
              <ProfileButton
                onPress={() => {
                  this.setState({
                    pokemons: this.state.pokemons.filter(
                      (pokemon) => pokemon.id !== item.id
                    ),
                  });
                }}
                style={{ backgroundColor: "#D63D29" }}
              >
              <ProfileButtonText>Remover</ProfileButtonText>
              </ProfileButton>
              </ContainerCards>
            </User>
          )}
        />
      </Container>
    );
  }
}