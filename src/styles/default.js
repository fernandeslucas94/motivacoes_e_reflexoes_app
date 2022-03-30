import styled from 'styled-components/native';

export {
    TitleContainer,
    Title,
    PageArea,
    Container,
    BottomMenu,
    BottomMenuImage
}

const TitleContainer = styled.View`
    width: 100%;
    height: 10%;

    justify-content: center;

    background-color: #DEDEDE;

    width: 100%;
`;

const Title = styled.Text`
    color: #000;

    margin-left: 3%;

    font-family: 'Lato-Bold';
    font-size: 21px;

    text-transform: uppercase;
`;

const Container = styled.View`
    height: 100%;
    width: 95%;

    align-items: center;
`;

const PageArea = styled.SafeAreaView`
    flex: 1;
    align-items: center;

    background-color: #ECECEC;
`;

const BottomMenu = styled.View`
    background-color: #F5F5F5;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 8%;

    flex-direction: row
    align-items: center;
    justify-content: space-around;
`;

const BottomMenuImage = styled.Image`
    height: 30px;
    width: 30px;
`;