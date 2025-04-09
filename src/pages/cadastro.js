import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";

export default class CadastrarUsuario extends Component {
  state = {
    nome: "",
    telefone: "",
    cpf: "",
    email: "",
    curso: "",
    password: "",
  };

  handleCadastro = async () => {
    const { nome, telefone, cpf, email, curso, password } = this.state;
    if (!nome || !telefone || !cpf || !email || !curso || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    const user = { nome, telefone, cpf, email, curso, senha: password };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      alert("Usuário cadastrado com sucesso!");
      this.props.navigation.navigate("Login");
    } catch (error) {
      alert("Erro ao salvar os dados. Tente novamente.");
      console.error(error);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.div}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                value={this.state.nome}
                onChangeText={(nome) => this.setState({ nome })}
              />
              <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={this.state.telefone}
                onChangeText={(telefone) => this.setState({ telefone })}
              />

              <TextInput
                style={styles.input}
                placeholder="CPF"
                keyboardType="numeric"
                value={this.state.cpf}
                onChangeText={(cpf) => this.setState({ cpf })}
              />

              <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
              <TextInput
                style={styles.input}
                placeholder="Curso"
                value={this.state.curso}
                onChangeText={(curso) => this.setState({ curso })}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              />
              <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 13,
    marginVertical: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#D63D29",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginVertical: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
