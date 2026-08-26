import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from './src/components/Header/index.js';
import Search from './src/components/Search/index.js';
import Banner from './src/components/Banner/index.js';
import Filmes from './data/filmes.js';
import { FlatList } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Header />
        <Search />
        <Banner />

        <View style={{width: '90%'}}>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
            keyExtractor={(item) => item.id.toString()}

            renderItem={({ item }) => (
              <TouchableOpacity style={styles.containerFilmes}>

                <Image
                  style={styles.images}
                  source={{ uri: item.imagem }}
                />

                <Text style={styles.titulo}>
                  {item.nome}
                </Text>

                <Text style={styles.textNota}>
                  Nota: {item.nota}
                </Text>

              </TouchableOpacity>
            )}
          />

        </View>

      </View>
    </ScrollView>
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
        heigh:28
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