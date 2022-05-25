import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ContainerLogo = styled.View`
    margin-top: ${Platform.OS === 'ios' ? 25 + 'px' : 10 + 'px'};
`;

export const Logo = styled.Image`
    width: 140px;
`;

export const ContainerContent = styled.View`
    margin-top: ${Platform.OS === 'ios' ? 10 + '%' : 5 + '%'};
`;

export const Title = styled.Text`
    font-size: 35px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const Subtitle = styled.Text`
    font-size: 17px;
    color: #f9f9f9;
    padding-bottom: 10%;
    text-align: center;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    width: 85%;
    border-radius: 8px;
    margin: 15px 0;
    padding: 0 15px;
    height: 50px;
    background-color: rgba(255,255,255,0.16);
`;

export const BoxIcon = styled.View`
    padding: 0 5px;
    margin-right: 5px;
`;

export const Input = styled.TextInput`
    align-items: center;
    justify-content: center;
    font-size: 19px;
    width: 90%;
`;

export const ButtonLink = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 45px;
    margin: 0 15px;
    width: 85%;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export const ButtonLinkText = styled.Text`
    font-size: 18px;
    color: rgba(0,0,0,0.8);
`;

