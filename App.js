import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
    <View style={styles.viewHeader}>
    <Feather name="menu" size={24} color="white" />
      
      <Text style={styles.textHeader}> TECFILMES </Text>
      <TouchableOpacity></TouchableOpacity>

    </View>

    {/*INICIO DA BARRA DE PESQUISA*/}
    <View style={styles.containerSearch}>
      <TextInput
      placeholder='Digite o filme que deseja buscar'
      style={styles.inputSearch}
      ></TextInput>
      <TouchableOpacity>
      <Feather name="search" size={24} color="black"/>
      </TouchableOpacity>
    </View>

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
  containerSearch: {
    marginTop: 20,
    width:"90%",
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 8,
    alignItems: 'center'
  },
  inputSearch:{
    height: 40,
    padding: 8,
    width: "100%"
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