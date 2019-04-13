import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text, Thumbnail, Left, Right } from 'native-base'
import ProgressBarAnimated from 'react-native-progress-bar-animated';


export default class Achievements extends React.Component {
    render() {
        return (
            <Card style={{marginLeft:20, marginRight:20, marginTop: 15}}>
                <CardItem>
                    <Body>
                        <Text h1>
                        Latest Achievements    
                        </Text>
                    </Body>
                </CardItem>
                <CardItem cardBody> 
                    <Image source={{uri: 'https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Accenture/next-gen-6/post-and-parcel-infographic/animated/Accenture-Badge.gifla=en-GB'}} style={{ flex: 1,
    width: 130,
    height: 130,
    resizeMode: 'contain', margin: 15}}/>
                </CardItem>
                <CardItem>
                <ProgressBarAnimated
            value={100}
            width={75}
          />
          <ProgressBarAnimated
            value={80}
            width={75}
          />
          <ProgressBarAnimated
            value={0}
            width={75}
          />
          <ProgressBarAnimated
            value={0}
            width={75}
          />
                </CardItem>
            </Card>
        )
    }
}