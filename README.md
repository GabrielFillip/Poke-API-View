# 📱 Pokemon Viewer

Seja bem-vindo(a) ao **Pokemon Viewer**, um aplicativo feito em **React Native** com **Expo**, que utiliza a [PokeAPI](https://pokeapi.co/) para mostrar os pokémons de uma forma prática e interativa! 🧩🔥

## Projeto desenvolvido por:

👨‍💻 Autores
## Desenvolvido por Gabriel Fillip Ribeiro Ferreira e Leonardo Cassio dos Santos

---

## ⚙️ Como utilizar o aplicativo

### Clonando o projeto

Primeiro, você precisa clonar o repositório no seu computador:

```bash
git clone https://github.com/GabrielFillip/Poke-API-View

Abra o projeto no VS Code e no terminal, digite:

npm i

Esse comando irá instalar todas as dependências do projeto.

Após isso, inicie o projeto com:

npx expo start

Um QR Code será exibido no terminal ou no navegador. Agora:

Baixe o app Expo Go no seu celular (disponível na App Store e Google Play) 📱

Abra o Expo Go, clique em “Scan QR Code” e escaneie o QR que apareceu no terminal. ✅

Pronto! Agora o app será carregado no seu celular em tempo real. ⚡

---

👤 Acesso ao app
🔐 Tela de Login
Ao abrir o app, você verá a tela de login, onde pode inserir:

📧 E-mail

🔑 Senha

E clicar no botão "Entrar" para acessar o app, caso já tenha um cadastro.

---

📝 Tela de Cadastro
Se ainda não possui uma conta, clique no botão "Cadastrar".
Você será redirecionado para o formulário de cadastro onde preencherá os seguintes campos:

🧍 Nome

📱 Telefone

🧾 CPF

📧 E-mail

🎓 Curso

🔒 Senha

Após preencher tudo, clique no botão "Cadastrar" para salvar seus dados.

---

🔍 Usando o Pokemon Viewer
Após o login, você terá acesso à funcionalidade principal do app:

➕ Adicionando um Pokémon
Digite o nome de um pokémon no campo de texto (ex: pikachu)

Clique no botão "+" para adicioná-lo à sua lista

Ao fazer isso, um card será exibido com as seguintes informações:

🖼️ Imagem do Pokémon

🏷️ Nome

🆔 ID (direto da PokeAPI)

🔥 Tipo do Pokémon

❌ Um botão para remover o Pokémon

---

📖 Detalhes do Pokémon
Clicando no card, você verá uma tela com mais detalhes, incluindo:

📸 Imagem mais renderizada do Pokémon

⚔️ Ataque

🛡️ Defesa

❤️ HP

🎯 Taxa de captura

No topo desta tela, há um botão “Back” para retornar à lista de pokémons.

---

↩️ Retornar à tela de login
Caso queira sair do app, clique na seta no topo da tela (🔄) para retornar à tela de login.

---

🧪 Tecnologias utilizadas
React Native + Expo

JavaScript

PokeAPI

AsyncStorage (para persistência local de dados)

Validação de formulários

---

📌 Observações importantes
O nome do pokémon precisa ser escrito corretamente para que a API consiga encontrá-lo. ✔️

Você precisa estar na mesma rede Wi-Fi entre o celular e o computador para o Expo funcionar. 📡

Os dados são salvos localmente no dispositivo, não sendo necessário backend.