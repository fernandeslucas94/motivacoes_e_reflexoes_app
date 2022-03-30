import React from 'react';
import { TouchableOpacity, ScrollView, StatusBar} from 'react-native';
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
    Banner, 
    BannerImage, 
    BannerText, 
    ItemsList, 
    ListItem, 
    ItemText 
} from '../../src/styles/home_styles';

const home_screen = ({ navigation }) => {
  return (
    <PageArea>

        <StatusBar 
            backgroundColor="#DEDEDE"
            barStyle="dark-content"
        />

        <TitleContainer>
            <Title>Motivações e Reflexões</Title>
        </TitleContainer>

      <Container>

        <PageDescription>
            Encontre conteúdos que poderão lhe ser úteis no cotidiano, e se lhe agradar, divulgue para que outras pessoas também possam ser beneficiadas!
        </PageDescription>

        <Banner>
            <BannerImage source={require('../../assets/images/work-harder.jpg')}/>
            <BannerText>
                Mantenha-se motivado (a) e não perca o foco do que é importante para você!
            </BannerText>
        </Banner>

        <ItemsList>
            <ScrollView horizontal>

                <TouchableOpacity onPress={ () => navigation.navigate('Motivacionais')}>
                    <ListItem style={{backgroundColor: '#E6EA52'}}>
                        <ItemText style={{color: '#454545'}}>Mensagens Motivacionais</ItemText>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Reflexoes')}>
                    <ListItem style={{backgroundColor: '#683DE4'}}>
                        <ItemText style={{color: '#EFEFEF'}}>Reflexões</ItemText>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Biblicas')}>
                    <ListItem style={{backgroundColor: '#2DA8DE'}}>
                        <ItemText style={{color: '#EFEFEF'}}>Mensagens Bíblicas</ItemText>
                    </ListItem>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Meditacoes')}>
                    <ListItem style={{backgroundColor: '#8801EC'}}>
                        <ItemText style={{color: '#EFEFEF'}}>Meditações {'\n'}(Em Breve)</ItemText>
                    </ListItem>
                </TouchableOpacity>


            </ScrollView>
        </ItemsList>

      </Container>

        <BottomMenu>

            <TouchableOpacity>
                <BottomMenuImage 
                    source={require('../../assets/images/home-icon.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigation.navigate('Favoritos')}>
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

export default home_screen;