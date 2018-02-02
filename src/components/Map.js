import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import FetchLocation from './FetchLocation';
import UsersMap from './UsersMap';

export default class MapSearch extends React.Component {
  state = {
    userLocation: null,
    usersPlaces: []
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035
          }
        });
        fetch("https://geotest-30cea.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      },
      err => console.log(err)
    );
  };

  getUserPlacesHandler = () => {
    fetch("https://geotest-30cea.firebaseio.com/places.json")
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          });
        }
        this.setState({
          usersPlaces: placesArray
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Button title="Get User Places" onPress={this.getUserPlacesHandler} />
        </View>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
          userLocation={this.state.userLocation}
          usersPlaces={this.state.usersPlaces}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  
});