import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Button from './Button'


class ChooseProfileSetup extends Component {
     static navigationOptions = {
    title: 'Welcome to Emergeo!',
  }

render(){
 const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Button onPress={()=> navigate ('ProfileImage')}>
                I Provide a Service
            </Button>
            <Button onPress={()=> alert('pressed 2')}>
                Looking for Service Providers
            </Button>
            
        
        
        </View>
    )
}
}

const styles = {
    container:{
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-around'
    }
}


export default ChooseProfileSetup;