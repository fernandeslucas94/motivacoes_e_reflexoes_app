import styled from 'styled-components/native';


export {
    PageDescription,
    Banner,
    BannerImage,
    BannerText,
    ItemsList,
    ListItem,
    ItemText,
};

const PageDescription = styled.Text`
    font-family: 'Lato-Bold';
    font-size: 18px;

    margin-top: 7%;
`;

const Banner = styled.View`
    width: 100%;
    height: 25%;

    border: 1px solid darkblue;
    border-radius: 4px;

    margin-top: 60px;
`;

const BannerImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const BannerText = styled.Text`
    color: #FFF;

    position: absolute;

    font-family: 'Lato-Regular';
    font-size: 22px;

    bottom: 15px;
    left: 15px;
`;

const ItemsList = styled.View`
    background-color: #eeeeee;

    height: 13%;
    width: 100%;

    margin-top: 15%;

    border-radius: 7px;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const ListItem = styled.View`
    width: 160px;
    height: 80px;

    margin-left: 15px;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
    border: 0.3px solid lightgrey;
`;

const ItemText = styled.Text`
    text-align: center;

    font-family: 'Lato-Bold';
    font-size: 19px;
`;