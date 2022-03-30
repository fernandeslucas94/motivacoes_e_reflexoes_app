import styled from 'styled-components/native';

export {
    PageDescription,
    Item,
    ItemsContainer,
    ItemInnerText,
};

const PageDescription = styled.Text`
    font-family: 'Lato-Bold';
    font-size: 16px;

    margin-top: 3%;
`;

const ItemsContainer = styled.View`
    width: 100%;
    height: 60%;

    margin-top: 10%;

    border: 1px solid grey;
    border-radius: 8px;

    align-items: center;
`;

const Item = styled.View`
    width: 350px;
    height: 80px;
    margin-bottom: 35px;

    border-radius: 8px;
    border: 1px solid #E6EA52;

    align-items: center;
    justify-content: center;

    background-color: #683DE4;
`;

const ItemInnerText = styled.Text`
    font-family: 'Lato-Bold';
    font-size: 19px;

    color: #EFEFEF;
`;