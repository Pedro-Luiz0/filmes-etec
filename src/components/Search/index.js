import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style.js';

export default function Search(){
    return (
        <View style={styles.containerSearch}>
          <TextInput
          placeholder='Digite o filme que deseja buscar'
          style={styles.inputSearch}
          ></TextInput>
          <TouchableOpacity>
          <Feather name="search" size={24} color="black"/>
          </TouchableOpacity>
        </View>
    )
}

export {Search};