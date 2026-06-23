import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style.js';


export default function Banner(){
    return (
        <>
         <Text style={styles.textBanner}> Em cartaz </Text>
        
            <Image source={require('../../../assets/images.webp')} style={styles.imageBanner}/>
            </>
    )
}

