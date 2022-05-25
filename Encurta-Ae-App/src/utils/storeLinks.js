import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// buscar os links salvos
export async function getLinkSave(key) {
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

// salvar um link no storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    // Se tiver algum link salvo com esse mesmo id, preciso ignorar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        Alert.alert(
            "Opa!",
            `Esse Link já se encontra na Lista!`,
        );
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('link salvo com sucesso!')
}

// deletar algum link especifico
export async function deleteLink(links, id) {
    let myLinks = links.filter((item) => {
        return (item.id != id)
    })
    await AsyncStorage.setItem('Encurta-Ae', JSON.stringify(myLinks));

    console.log("Link deletado da storage");
    return myLinks;
}