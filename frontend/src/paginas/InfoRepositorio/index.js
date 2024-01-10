import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';

export default function InfoRepositorio({ item }) {
    const [nome, setNome] = useState('a');
    const [data, setData] = useState('a');

    return (
        <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>{item.name}</Text>
        </View>
    );
}
