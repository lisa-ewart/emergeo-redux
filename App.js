import React, {Component} from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {app, auth, database} from './src/firebase';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducers from './src/reducers';


import HomeScreen from './src/components/HomeScreen';
import {SignIn, SignUp} from './src/components/Auth';

// Components being tested
import ChooseProfileSetup from './src/components/ChooseProfileSetup';
import ProfileName from './src/components/ProfileName';
import ProfileImageSelector from './src/components/ProfileImageSelect';
import MiniBio from './src/components/ProfileBio';
import ProfileDetail from './src/components/ProfileDetail';
import ServiceList from './src/components/ServiceList';
import ServiceSelector from './src/components/ServiceSelector';

import FetchLocation from './src/components/FetchLocation';
import UsersMap from './src/components/UsersMap';


const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  LogIn: {screen: SignIn},
  Join: {screen: SignUp},
  CreateProfileName: {screen: ProfileName},
  CreateProfileBio: {screen: MiniBio},
  Profile: {screen: ProfileDetail},
  Services: {screen: ServiceList}

  
});

export default class App extends Component {
  state = { loggedIn: null, currentUser: null }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    }, err => console.log(err));

  }

  componentWillMount(){
    app;

    auth.onAuthStateChanged( user =>{
      if(user){
        this.setState({ loggedIn: true, currentUser: user.uid});
     } else{
        this.setState({loggedIn: false, currentUser: null})
      }
    });


}

  render() {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers)
    
    const {loggedIn, currentUser} = this.state

    // const id = auth.currentUser.uid
    console.log(this.state)



    return (
        <View style={styles.container}>
          <FetchLocation onGetLocation={this.getUserLocationHandler}/>
          <UsersMap />
        </View>
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



//<SimpleApp screenProps={{loggedIn, currentUser}} />
