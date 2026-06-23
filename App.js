import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header/index.js';
import Search from './src/components/Search/index.js';
import Banner from './src/components/Banner/index.js';
import Filmes from './data/filmes.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <Banner></Banner>

      <View style = {{width: '90%'}}>
        <FlatList
        horizontal= {true}
        data={Filmes}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image style={{width:80, height: 100}} source={{uri:item.imagem}}></Image>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}


        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
});