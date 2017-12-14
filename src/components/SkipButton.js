import React, {Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';




const SkipButton = ({onPress, children}) =>{

    return(
        <View>
            <TouchableHighlight  onPress= {onPress}>
                <Text> {children}</Text>
            </TouchableHighlight>
        </View>
    )
}


