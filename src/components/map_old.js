import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    // BackgroundImage
} from 'react-native';

import { StackNavigator } from 'react-navigation';
// import SideBar from './sidebar';
import MapView from 'react-native-maps';
// Import data
// import { serviceProviders } from './data';
// import Callout from './Callout';
// import TouchableButton from './touchableBtn';


// 
const styles = StyleSheet.create({
  container: {
    flex: 1,                            // Take up the whole screen
    justifyContent: 'flex-end',         // Arrange button at the bottom
    alignItems: 'center',
    width:425,               // Center button horizontally
    backgroundColor: 'grey',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 470,
    width: '100%',
    
  },
  buttonContainer: {
    marginVertical: 20,
    height: 100,
    backgroundColor: 'grey',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(102, 195, 219, 0.8)',
    borderRadius: 10,
    padding: 12,
    margin: 2,
    width: 270,
  },
  heading:{

  },
  searchmenu:{
    textAlign:'center',
    color:'white',
  },
  
});




export default class MapRender extends Component {

  state = {
    // Show only service providers based on button 
   
    services:'',
    menuheading:'Choose Service',

  
  }

  render() {
    return (


      <View style={styles.container}>
        {/* Map*/}
        <MapView
          style={styles.map}
          // Position on Manhattan, New York
          initialRegion={{
            latitude: 40.77096,
            longitude: -73.97702,
            latitudeDelta: 0.0491,
            longitudeDelta: 0.0375,
          }}
        >
          {/* Loop through serviceProviders and add pins on the map */}
          {serviceProviders.map((serviceProvider, index) =>
            // If showElectriciansOnly is true, but the electrician: false  - do not show it

           serviceProvider.serviceCode !== this.state.services || <MapView.Marker
              coordinate={{
                latitude: serviceProvider.coordinate[0],
                longitude: serviceProvider.coordinate[1],
              }}

              // Callout offset
              calloutOffset={{ x: -8, y: 28 }}
              // pinColor is set to value in data

              pinColor={serviceProvider.pincolor}

              key={index}
              >
               {/* Callout */}
              <MapView.Callout tooltip style={styles.callout}>
                <Callout
                  name={serviceProvider.name}
                  image={serviceProvider.image}
                  license={serviceProvider.license}
                  rating={serviceProvider.rating}

                />
              </MapView.Callout>



           </MapView.Marker>

          )}



        </MapView>
        {/* Button */}
        <View style={styles.buttonContainer}>
        <Text style={styles.searchmenu}>{this.state.menuheading} {this.state.services}</Text>
        <ScrollView>
         
          <TouchableOpacity
            style={styles.button}

            onPress={() => this.setState({
               services: 'E',
               menuheading: 'Available '
            })}
          >
            <Text>{'Electricians near me'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({
              services: 'P',
              menuheading: 'Available '
            })}
          >
            <Text>{'Plumbers near me'}</Text>
          </TouchableOpacity>


           <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({
              services: 'H',
              menuheading: 'Available '
            })}
          >
            <Text>{'HVAC near me'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}

            onPress={() => this.setState({
               services: 'R',
               menuheading: 'Available '
            })}
          >
            <Text>{'Realtors near me'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({
              services: 'M',
              menuheading: 'Available '
            })}
          >
            <Text>{'Movers near me'}</Text>
          </TouchableOpacity>


           <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({
              services: 'D',
              menuheading: 'Available '
            })}
          >
            <Text>{'Dog Walkers near me'}</Text>
          </TouchableOpacity>
          </ScrollView>



        </View>
      </View>



      )
  }
}

