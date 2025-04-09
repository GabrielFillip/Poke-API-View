import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

//
// 🎯 ESTILOS PARA A TELA MAIN
//

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
`;

export const Container2 = styled.View`
  height: 4%;
  width: 100%;
  background-color: #d63d29;
  margin-bottom: 5%;
`;

export const Container3 = styled.View`
  width: 100%;
  height: 30%;
  align-items: flex-start;
  padding-left: 15px;
`;

export const Container4 = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #d63d29;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View``;

export const ContainerCards = styled.View`
  align-items: center;
  margin: 0 20px 30px;
  border: 1px;
  border-radius: 25px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Type = styled.Text`
  font-size: 14px;
  color: #333;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ExtraInfo = styled.View`
  padding: 10px;
  background: #f4f4f4;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 0 0 20px 20px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  z-index: 2;
`;

//
// 🎯 ESTILOS PARA A TELA USER / POKEMON
//

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const PokemonDetailsBox = styled.View`
  align-items: center;
  margin: 0 20px 30px;
  border: 1px;
  border-radius: 25px;
  width: 87%;
  height: auto;
  padding-bottom: 10%;
`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 50px;
`;

export const PokemonName = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const PokemonStatText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: #999;
  margin-top: 10px;
  text-align: center;
`;

//
// 🎯 ESTILOS PARA LISTA DE FAVORITOS OU DETALHES
//

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
