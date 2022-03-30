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
} from '../../src/styles/bilicas_styles';

export default function biblicas({ navigation }) {
    return (
        <PageArea>

            <TitleContainer>
                <Title>Mensagens Bíblicas</Title>
            </TitleContainer>

            <Container>
                <PageDescription>
                    Nesta seção você poderá encontrar versículos, mensagens bíblicas, que poderão lhe consolar, fortalecer e auxiliar no dia a dia!
                </PageDescription>

                <ItemsContainer>

                    <ScrollView>
                        <TouchableOpacity>
                            <Item style={{marginTop: 20}}>
                                <ItemInnerText>
                                    Mensagem 1
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Mensagem 2
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Mensagem 3
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 4
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 5
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 6
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 7
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 8
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Mensagem 9
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
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