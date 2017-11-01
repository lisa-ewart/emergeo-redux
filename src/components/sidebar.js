import React, {Component} from 'react';


import {
  AppRegistry,
  Text, View, StyleSheet, Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Icon, Button, } from 'native-base';

import Auth from '../firebase/auth';
import Profile from './profile';
import MapSearch from './map';


class SideBar extends React.Component {
  static navigationOptions = {
    title: 'Emergeo',
  };



  render() {

    const { navigate } = this.props.navigation;
    const SimpleApp = StackNavigator({
  // Home: { screen: SideBar }, 
  Sign: { screen: Auth },
  Prof: { screen: Profile},
  Map: { screen: MapSearch},
})
    
    return (
      <View>
        <Text style={styles.btntext}>Get the screens out of the drawer!</Text>

        <Button full light>
        <Icon name='create' />
        <Text onPress={() => navigate('Sign')}>Sign Up!</Text>
        </Button>  

        <Button full light>
        <Icon name='person' />
        <Text onPress={() => navigate('Prof')}>My Profile</Text>
        </Button> 

         <Button full light>
        <Icon name='search' />
        <Text onPress={() => navigate('Map')}>Search for providers</Text>
        </Button> 

      </View>
    );
  }
}






class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Map',
  };
  render() {
    return (
      <View>
        <Text>Search the map.</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Page',
  };
  render() {
    return (
      <View>
        <Text>View your profile</Text>
      </View>
    );
  }
}


class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View>
        <Text>Sign Up!</Text>
      </View>
    );
  }
}

class SignOut extends React.Component {
  static navigationOptions = {
    title: 'Sign Out',
  };
  render() {
    return (
      <View>
        <Text>Sign Out</Text>
      </View>
    );
  }
}







const styles = StyleSheet.create({
btntext:{
color: 'green',
textAlign: 'left',
},

})






