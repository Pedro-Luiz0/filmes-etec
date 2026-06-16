import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header/index.js';
import Search from './src/components/Search/index.js';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
    <Header></Header>
    

    {/*INICIO DA BARRA DE PESQUISA*/}
    <Search></Search>
          {/* Inicio do banner */}
    
    <Text style={styles.textBanner}> Em cartaz </Text>

    <Image source={require('./assets/images.webp')} style={styles.imageBanner}/>
    <Image source={require('./assets/o diabo veste prada 2.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/Backrooms_(filme).webp')} style={styles.imageBanner}/>
    <Image source={require('./assets/authentic games.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/Interstellar_Filme.png')} style={styles.imageBanner}/>
    <Image source={require('./assets/rambo.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/Sonic_the_Hedgehog_2019.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/demon slayer.webp')} style={styles.imageBanner}/>
    <Image source={require('./assets/whiplast.jpg')} style={styles.imageBanner}/>
    <Image source={require('./assets/o gambito da rainha.jpg')} style={styles.imageBanner}/>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  // HEADER
   viewHeader:{
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between'
  },
  textHeader: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  imageBanner:{
    width: "70%",
    height: "40%",
    marginTop: 15,
    borderRadius: 10,
  },
  textBanner: {
    color: 'white',
    width: '90%',
    fontSize: 30,
    marginTop:20,
    fontWeight:'bold',
  }
});