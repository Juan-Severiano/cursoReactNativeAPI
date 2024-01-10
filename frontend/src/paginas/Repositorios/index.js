import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import api from '../../services/api';
import InfoRepositorio from '../InfoRepositorio';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        api.get('Juan-Severiano/repos').then(response => setRepo(response.data))
    })

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios</Text>
            <FlatList 
                data={repo}
                contentContainerStyle={{ paddingHorizontal: 50, marginBottom: 100 }}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <InfoRepositorio item={item} />}
            />
        </View>
    );
}
