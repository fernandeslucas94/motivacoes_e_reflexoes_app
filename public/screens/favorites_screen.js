import React from 'react';

import { TouchableOpacity, ScrollView } from 'react-native';

import {
    TitleContainer,
    Title,
    PageArea,
    Container,
    BottomMenu,
    BottomMenuImage
} from '../../src/styles/default';

import {
    PageDescription,
    ItemsContainer,
    Item,
    ItemText
    
} from '../../src/styles/favorites_styles';

const Favorites = ({ navigation }) => {
  return (
    <PageArea>

        <TitleContainer>
            <Title>Favoritos</Title>
        </TitleContainer>

      <Container>

        <PageDescription>
            Aqui você irá encontrar, organizado por seções, tudo aquilo que lhe despertou interesse!
        </PageDescription>

        <ItemsContainer>

            <TouchableOpacity>
                <Item style={{backgroundColor: '#E7DD41'}}>
                    <ItemText style={{color: '#454545'}}>Mensagens Motivacionais</ItemText>
                </Item>
            </TouchableOpacity>

            <TouchableOpacity>
                <Item style={{backgroundColor: '#683DE4'}}>
                    <ItemText style={{color: '#EFEFEF'}}>Reflexões</ItemText>
                </Item>
            </TouchableOpacity>

            <TouchableOpacity>
                <Item style={{backgroundColor: '#2DA8DE'}}>
                    <ItemText style={{color: '#EFEFEF'}}>Mensagens Bíblicas</ItemText>
                </Item>
            </TouchableOpacity>

            <TouchableOpacity>
                <Item style={{backgroundColor: '#8801EC'}}>
                    <ItemText style={{color: '#EFEFEF'}}>Meditações (Em Breve)</ItemText>
                </Item>
            </TouchableOpacity>

        </ItemsContainer>

      </Container>

      <BottomMenu>

        <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
            <BottomMenuImage 
                source={require('../../assets/images/home-icon.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <BottomMenuImage 
                source={require('../../assets/images/list.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('About')}>
            <BottomMenuImage 
                source={require('../../assets/images/menu-icon.png')}
            />
        </TouchableOpacity>

        </BottomMenu>
    </PageArea>
  )
}

export default Favorites;