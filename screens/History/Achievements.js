import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base'

export default class Achievements extends React.Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text style={{
                            fontSize: 21,
                            fontWeight: "bold",
                            color: "#ef6136"
                        }}>
                            You have 10,000 Green Points
                        </Text>
                    </Body>
                </CardItem>
                <CardItem cardBody> 
                    <Image source={{uri: 'http://www.liberaldictionary.com/wp-content/uploads/2019/01/achievement-9166.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        )
    }
}