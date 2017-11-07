import React, {Component} from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/reducers';


import HomeScreen from './src/components/HomeScreen';
import {SignIn, SignUp} from './src/components/Auth';

// Components being tested
import ProfileImageSelector from './src/components/ProfileImageSelect';
import ChooseProfileSetup from './src/components/ChooseProfileSetup';
import ProfileName from './src/components/ProfileName';



const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  LogIn: {screen: SignIn},
  Join: {screen: SignUp},
  CreateProfile: {screen: ChooseProfileSetup},
  ProfileImage: {screen: ProfileImageSelector}
})

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyC0eVfyQE_wiC-mZ_bfpJdjlax_xJ8Tv_E",
    authDomain: "emergeo-4496e.firebaseapp.com",
    databaseURL: "https://emergeo-4496e.firebaseio.com",
    projectId: "emergeo-4496e",
    storageBucket: "emergeo-4496e.appspot.com",
    messagingSenderId: "613936575014"
};

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged( user =>{
      if(user){
        this.setState({ loggedIn: true });
        console.log(user)
      } else {
        this.setState({ loggedIn: false });
      } 
  });
}



  render() {
    const store = createStore(reducers);
  

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <SignIn loggedIn={this.state.loggedIn}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
