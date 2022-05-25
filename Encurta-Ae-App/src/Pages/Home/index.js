import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Modal,
    ActivityIndicator,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Container,
    ContainerLogo,
    Logo,
    ContainerContent,
    Title,
    Subtitle,
    ContainerInput,
    BoxIcon,
    Input,
    ButtonLink,
    ButtonLinkText
} from './styles';
import { Feather } from '@expo/vector-icons';


// components
import StatusBarPage from '../../Components/StatusBarPage';
import Menu from '../../Components/Menu';
import ModalLink from '../../Components/ModalLink';

// api 
import api from '../../services/api';

import { saveLink } from '../../utils/storeLinks';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

    // usar handle para funcoes que o usuario precisa clicar para rodar
    async function handleShortLink() {
        setLoading(true);
        try {
            const response = await api.post('/shorten',
                {
                    long_url: input
                })

            setData(response.data);
            // console.log(response.data);

            saveLink('Encurta-Ae', response.data);

            Keyboard.dismiss();
            setModalVisible(true);
            setInput('');
            setLoading(false);
        }
        catch {
            Alert.alert(
                "Ops! ",
                `Parece que algo deu errado. Favor insire seu link corretamente! `,
            );
            Keyboard.dismiss();
            setInput('');
            setLoading(false);
        }
        // setModalVisible(true);
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132752"
            />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <LinearGradient
                    colors={['#132752', '#132750']}
                    style={{ flex: 1, justifyContent: 'center' }}
                >
                    <Menu />

                    {/* O KeyboardAvoidingView administra a subida de tela quando o teclado for aberto */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                        enabled
                    >
                        <Container>
                            <ContainerLogo>
                                <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                            </ContainerLogo>

                            <ContainerContent>
                                <Title>Encurta-Ae</Title>
                                <Subtitle>Cole seu Link para encurtar</Subtitle>
                            </ContainerContent>

                            <ContainerInput>
                                <BoxIcon>
                                    <Feather name='link' size={22} color="#fff" />
                                </BoxIcon>
                                <Input
                                    value={input}
                                    onChangeText={(text) => setInput(text)}
                                    placeholder="Cole seu Link aqui..."
                                    placeholderTextColor="rgba(255,255,255,0.8)"
                                    color="#fff"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="url"
                                />
                            </ContainerInput>

                            <ButtonLink
                                onPress={handleShortLink}
                            >
                                {
                                    loading
                                        ?
                                        <ActivityIndicator color="#121212" size={24} />
                                        :
                                        <ButtonLinkText>
                                            Gerar Link
                                        </ButtonLinkText>
                                }

                            </ButtonLink>

                        </Container>
                    </KeyboardAvoidingView>

                    <Modal visible={modalVisible} transparent animationType='slide'>
                        <ModalLink data={data} onClose={() => setModalVisible(false)} />
                    </Modal>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Home;