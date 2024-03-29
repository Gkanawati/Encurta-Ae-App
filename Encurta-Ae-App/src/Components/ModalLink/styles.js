import styled from 'styled-components/native';

export const ContainerModal = styled.View`
    flex: 1;
    height: 40%;

`;

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 15px;
`;

export const LinkArea = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 33px;
    font-weight: bold;
    color: #181852;
`;

export const LongUrl = styled.Text`
    font-size: 18px;
    color: #A7A7A7;
    margin-bottom: 30px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
    height: 45px;
    width: 100%;
    background-color: #172742;
    border-radius: 7px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

export const ShortLinkUrl = styled.Text`
    width: 90%;
    color: #fff;
    font-size: 17px;
`;

