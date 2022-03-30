import React from "react";
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
    Item, 
    ItemsContainer, 
    ItemInnerText,
} from '../../src/styles/motivacionais_styles';

export default function motivacionais({ navigation }) {
    return (
        <PageArea>

            <TitleContainer>
                <Title>Mensagens Motivacionais</Title>
            </TitleContainer>

            <Container>

            <PageDescription>
                Tenha mais motivação no seu dia, e realize tudo o que você tem de bom para realizar!
            </PageDescription>

                <ItemsContainer>

                    <ScrollView>
                        <TouchableOpacity>
                            <Item style={{backgroundColor: '#E7DD41', marginTop: 20}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 1
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 2
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 3
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 4
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 5
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 6
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 7
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 8
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 9
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item style={{backgroundColor: '#E7DD41'}}>
                                <ItemInnerText style={{color: '#454545'}}>
                                    Mensagem 10
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>
                    </ScrollView>

                </ItemsContainer>
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

                <TouchableOpacity onPress={ () => navigation.navigate('About')}>
                    <BottomMenuImage 
                        source={require('../../assets/images/menu-icon.png')}
                    />
                </TouchableOpacity>

            </BottomMenu>
        </PageArea>
    )
}