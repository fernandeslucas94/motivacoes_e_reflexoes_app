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
} from '../../src/styles/reflexoes_styles';

export default function reflexoes({ navigation }) {
    return (
        <PageArea>

            <TitleContainer>
                <Title>Reflexões</Title>
            </TitleContainer>

            <Container>
                <PageDescription>
                    Encontre aqui conteúdos que poderão lhe ser úteis nas mais diversas situações do cotidiano.
                </PageDescription>

                <ItemsContainer>

                    <ScrollView>
                        <TouchableOpacity>
                            <Item style={{marginTop: 20}}>
                                <ItemInnerText>
                                    Reflexão 1
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Reflexão 2
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Reflexão 3
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 4
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 5
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 6
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 7
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 8
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 9
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Reflexão 10
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