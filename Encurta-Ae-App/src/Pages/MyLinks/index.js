import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Container,
    Title,
    ListLinks,
    ContainerEmpty,
    WarningText
} from './styles';

// components
import StatusBarPage from '../../Components/StatusBarPage';
import Menu from '../../Components/Menu';
import ContainerLink from '../../Components/ContainerLink';
import ModalLink from '../../Components/ModalLink';

import { useIsFocused } from '@react-navigation/native';
import { getLinkSave, deleteLink } from '../../utils/storeLinks';

export default function MyLinks() {

    const isFocused = useIsFocused();

    const [links, setLinks] = useState({});
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setModalVisible(false);
        async function getLinks() {
            const result = await getLinkSave('Encurta-Ae');
            setLinks(result);
            setLoading(false);
        }
        getLinks();


    }, [isFocused])

    function handleItem(item) {
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(links, id);
        setLinks(result);
    }

    return (
        <Container >
            <LinearGradient
                colors={['#132752', '#132750']}
                style={{ flex: 1, justifyContent: 'center' }}
            >
                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#132752"
                />

                <Menu />
                <Title>Meus Links</Title>

                {loading && (
                    <ContainerEmpty>
                        <ActivityIndicator size={25} color='#fff' />
                    </ContainerEmpty>
                )}

                {!loading && links.length === 0 && (
                    <ContainerEmpty>
                        <WarningText>Você ainda nao possui nenhum link! 😞 </WarningText>
                    </ContainerEmpty>
                )}
                <ListLinks
                    data={links}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ContainerLink data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />

                <Modal visible={modalVisible} transparent animationType='slide'>
                    <ModalLink data={data} onClose={() => setModalVisible(false)} />
                </Modal>

            </LinearGradient>
        </Container >

    );
}