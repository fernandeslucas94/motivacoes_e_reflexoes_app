import styled from 'styled-components/native';

export {
    PageDescription,
    TextSection,
    AboutUsText,
};

const PageDescription = styled.Text`
    font-family: 'Lato-Bold';
    font-size: 16px;

    margin-top: 3%;
`;

const TextSection = styled.View`
    border: 0.5px solid darkblue;
    border-radius: 3px;

    width: 100%;
    height: 40%;

    margin-top: 12%;
`;

const AboutUsText = styled.Text`
    font-family: 'Lato-Regular';
    font-size: 16px;

    padding: 10px;

    text-align: justify;
`;