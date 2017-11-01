import React from 'react';
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



const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  LogIn: {screen: SignIn},
  Join: {screen: SignUp},
  CreateProfile: {screen: ChooseProfileSetup},
  ProfileImage: {screen: ProfileImageSelector}
})

export default class App extends React.Component {



  render() {


    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <SimpleApp/>
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
