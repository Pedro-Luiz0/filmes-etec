import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../../../src/components/Header/index.js';
import Search from '../../../src/components/Search/index.js';
import Banner from '../../../src/components/Banner/index.js';
import Filmes from '../../../data/filmes.js';
import { FlatList } from 'react-native-web';
import CardMovies from '../../../src/components/CardMovies/index.js';


export default function Home() {
  return (
    <View style={styles.container}>
      
    <Header></Header>
    <Search></Search>
    <Banner></Banner>
    
    <View style = {{width:'90%', height: '100%'}}>
      <FlatList 
      horizontal = {true}
      showsVerticalScrollIndicator= {false}
      data={Filmes}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => (

         <CardMovies
          titulo={item.nome}
          imagem={item.imagem}
          nota={item.nota}
         />

         
    
      )}
      
      
      />
    </View>
    
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
      minHeight: '100vh',
      backgroundColor: '#c20000',
      alignItems: 'center',
    },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        height:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }

});