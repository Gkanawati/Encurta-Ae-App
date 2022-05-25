import styled from 'styled-components/native';

export const Container = styled.View``;


export const ContainerButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: rgba(255,255,255,0.22);
    margin: 7px 17px;
    padding: 15px;
    border-radius: 8px;
`;

export const Item = styled.Text`
    color: #fff;
    padding-left: 10px;
    padding-right: 20px;
    font-size: 18px;
`;


export const ActionContainer = styled.TouchableOpacity`
    width: 14%;
    background-color: #ff5555;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin: 7px 8px;

`;