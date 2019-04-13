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
                        <Text style={{fontSize: 20, marginRight: 40, marginTop: 20}}>
                        Current progress    
                        </Text>
                    </Body>
                </CardItem>
                <CardItem cardBody> 
                    <Image source={{uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/gift-icon.png'}} style={{ flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain', margin: 5}}/>
                </CardItem>
                <CardItem>
                    <Text>
                        4 full meals away from a free meal!
                        </Text>
                </CardItem>
                <CardItem>
                <ProgressBarAnimated
            value={100}
            width={26}
          />
          <ProgressBarAnimated
            value={100}
            width={26}
          />
           
          <ProgressBarAnimated
            value={100}
            width={26}
          />
           
          <ProgressBarAnimated
            value={100}
            width={26}
          />
          
          <ProgressBarAnimated
            value={100}
            width={26}
          />
          
          <ProgressBarAnimated
            value={100}
            width={26}
          />
          <ProgressBarAnimated
            value={0}
            width={26}
          />
          <ProgressBarAnimated
            value={0}
            width={26}
          />
          <ProgressBarAnimated
            value={0}
            width={26}
          />
          <ProgressBarAnimated
            value={0}
            width={26}
          />
                </CardItem>
            </Card>
        )
    }
}
