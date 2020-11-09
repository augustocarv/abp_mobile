import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
const CardComponent = ({ children }) => {
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                Testeaaa
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
export default CardComponent