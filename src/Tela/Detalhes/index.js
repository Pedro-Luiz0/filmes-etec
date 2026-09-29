import { useRoute } from '@react-navigation/native'
import {View,Text} from 'react-native'
import styles from '../../components/Header/style';

export default function Detalhes(){

    const route = useRoute();

    return(
        <View>
            <Text> DETALHES PAGES </Text>
            <Image
                source={route.params.imagem}
                style={{ width: 200, height: 300 }}> </Image>

            <Text>{route.params.titulo}</Text>
            <Text>{route.params.nota}</Text>
        </View>
    )
}