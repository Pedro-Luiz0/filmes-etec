import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './styles.js'

export default function CardMovies({titulo,nota,imagem}){

    return(
        <TouchableOpacity style={styles.containerJogos} >
        
        <Image style={styles.images} source={{uri:imagem}}></Image>
        <Text style={styles.titulo}>{titulo} </Text>

        <Text style={style.textNota}> {nota} </Text>
        
        </TouchableOpacity>
    )
}