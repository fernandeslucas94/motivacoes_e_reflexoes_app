import styled from 'styled-components/native';

export {
    PageDescription,
    ItemsContainer,
    Item,
    ItemText,

};

const PageDescription = styled.Text`
    font-family: 'Lato-Bold';
    font-size: 16px;

    margin-top: 3%;
`;

const ItemsContainer = styled.View`
    margin-top: 15%;

    border: 1px solid darkblue;
    border-radius: 5px;

    width: 100%;
    height: 400px;

    align-items: center;
    justify-content: space-around;

    padding: 10px;
`;

const Item = styled.View`
    width: 370px;
    height: 70px;

    border-radius: 2px;

    justify-content: center;
    align-items: center;
`;

const ItemText = styled.Text`
    font-size: 20px;
    font-family: 'Lato-Bold';
`;