import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TitleContainer, Title, PageArea, Container, BottomMenu, BottomMenuImage } from '../../src/styles/default';
import { PageDescription, TextSection, AboutUsText } from '../../src/styles/about_styles';

const about = ({ navigation }) => {
  return (
    <PageArea>

        <TitleContainer>
            <Title>Sobre Nós</Title>
        </TitleContainer>

      <Container>

        <PageDescription>
            Conheça um pouco sobre nosso trabalho
        </PageDescription>

        <TextSection>
            <AboutUsText>
                Nós, como muitas outras pessoas, temos nossos momentos onde precisamos parar um pouco, refletir, meditar acerca de diversas questões do dia a dia, e pensando nisto, desenvolvemos este aplicativo com o intuito de podar ajudar outras pessoas que também possam estar passando por momentos como este!

                {'\n'} {'\n'}

                Desta forma, com nosso trabalho, queremos ajudar a você, para que também possa se beneficiar com reflexões, mensagens positivas, trechos bíblicos e também meditações, trazendo assim, paz, tranquilidade e outros benefícios para o seu dia a dia!
            </AboutUsText>
        </TextSection>

      </Container>

        <BottomMenu>

            <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
                <BottomMenuImage 
                    source={require('../../assets/images/home-icon.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigation.navigate('Favoritos')}>
                <BottomMenuImage 
                    source={require('../../assets/images/list.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <BottomMenuImage 
                    source={require('../../assets/images/menu-icon.png')}
                />
            </TouchableOpacity>

        </BottomMenu>
    </PageArea>
  )
}

export default about;