import styled from 'styled-components/native';

export {
    TitleContainer,
    Title,
    PageArea,
    Container,
    BottomMenu,
    BottomMenuImage
}

const PageArea = styled.SafeAreaView`
    flex: 1;
    align-items: center;

    background-color: #e6e6e6;
`;

const TitleContainer = styled.View`
    width: 100%;
    height: 10%;

    justify-content: center;

    background-color: #DEDEDE;

    margin-top: -8px;
`;

const Title = styled.Text`
    color: #000;

    margin-left: auto;
    margin-right: auto;

    font-family: 'Lato-Bold';
    font-size: 22px;

    text-transform: uppercase;
`;

const Container = styled.View`
    height: 100%;
    width: 95%;

    align-items: center;
`;

const BottomMenu = styled.View`
    background-color: #F5F5F5;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 8%;

    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 0.4px solid grey;

    flex-direction: row
    align-items: center;
    justify-content: space-around;
`;

const BottomMenuImage = styled.Image`
    height: 30px;
    width: 30px;
`;