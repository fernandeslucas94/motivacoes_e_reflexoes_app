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
} from '../../src/styles/meditacoes_styles';

export default function meditacoes({ navigation }) {
    return (
        <PageArea>

            <TitleContainer>
                <Title>Meditações</Title>
            </TitleContainer>

            <Container>
                <PageDescription>
                    Desfrute de momentos de relaxamento e paz com estas meditações!
                </PageDescription>

                <ItemsContainer>

                    <ScrollView>
                        <TouchableOpacity>
                            <Item style={{marginTop: 20}}>
                                <ItemInnerText>
                                    Meditação 1
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Meditação 2
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Item>
                                <ItemInnerText>
                                    Meditação 3
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 4
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 5
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 6
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 7
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 8
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 9
                                </ItemInnerText>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity>    
                            <Item>
                                <ItemInnerText>
                                    Meditação 10
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