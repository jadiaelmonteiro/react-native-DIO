import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/66559540?s=400&u=bb9b7fae81c92719bbf4828bad8a91e736670200&v=4';
const urlGitHub = 'https://github.com/jadiaelmonteiro';

const App = () => {

  const handlePressGoToGithub = async () => {
    const res = await  Linking.canOpenURL(urlGitHub);
    console.log("Verificando link....");
    if(res){
      console.log("link aprovado.");
      await Linking.openURL(urlGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
      <View style={style.content}>
        <Image
          source={{ uri: imageProfileGitHub }}
          style={style.avatar}
        />
        <Text style={[style.defaultText, style.name]}>Jadiael Monteiro</Text>
        <Text style={[style.defaultText, style.nickName]}>jadiaelmonteiro</Text>
        <Text style={[style.defaultText, style.description]}>Amante da tecnologia! Aprendendo coisas novas todos os dias.
          Estagiário em Desenvolvimento de Software.
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.buttonText]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View >
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandir p tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  defaultText: {
    color: colorFontGitHub
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },
  nickName: {
    fontSize: 20,
    color: colorDarkFontGitHub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});