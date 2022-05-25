import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
`;

export const ContainerEmpty = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 20 + '%'};
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

export const WarningText = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 20 + '%'};
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

export const ListLinks = styled.FlatList`
    
`;