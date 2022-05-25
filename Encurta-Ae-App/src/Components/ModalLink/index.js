import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';
import {
    ContainerModal,
    Container,
    Header,
    LinkArea,
    LongUrl,
    ShortLinkArea,
    ShortLinkUrl,
    Title
} from './styles';

import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export default function ModalLink({ onClose, data }) {

    const [copy, setCopy] = useState(false);

    const copyLink = async () => {
        Clipboard.setStringAsync(data.link);
        setCopy(true);
        // alert('Link copiado com sucesso');
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Ei, acesse esse Link gerado pelo Encurta Ae: ${data.link}`
            });

            if (result.action == Share.sharedAction) {
                if (result.activityType) {
                    console.log('ActivityType');
                }
                else {
                    console.log("Compartilhado com sucesso");
                }
            }
            else if (result.action === Share.dismissedAction) {
                console.log("Modal Fechado!");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <ContainerModal>
            <TouchableWithoutFeedback onPress={() => onClose()}>
                {/* Como o Container tem flex 1 e a view tambem tem flex 1 --> cada um ocupa metade da tela */}
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Feather
                            name='x'
                            color="#212743"
                            size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShare()}>
                        <Feather
                            name='share'
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>
                </Header>

                <LinkArea>

                    <Title>Link Encurtado</Title>
                    <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

                    {/* activeOpacity --> tira o efeito de clique do TouchableOpacity */}
                    <ShortLinkArea activeOpacity={1} onPress={copyLink}>
                        {/* numberOfLines --> nao deixa que o texto tenha mais de uma Linha --> fica com reticencias(...) */}
                        <ShortLinkUrl numberOfLines={1}>
                            {data.link}
                        </ShortLinkUrl>
                        <TouchableOpacity onPress={copyLink}>
                            {copy ?
                                <Feather
                                    name='check-square'
                                    color="#fff"
                                    size={30}
                                /> :
                                <Feather
                                    name='copy'
                                    color="#fff"
                                    size={30}
                                />}

                        </TouchableOpacity>
                    </ShortLinkArea>

                </LinkArea>
            </Container>
        </ContainerModal>
    );
}