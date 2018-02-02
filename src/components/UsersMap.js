import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const usersMap = props => {
  let userLocationMarker = null;

  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation} image={require('./car.png')}/>;
  }
  const usersMarkers = props.usersPlaces.map(userPlace => (
    <MapView.Marker coordinate={userPlace} key={userPlace.id} />
  ));
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: .045,
          longitudeDelta: .045
        }}
        region={props.userLocation}
        style={styles.map}
      >
        {userLocationMarker}
        {usersMarkers}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 500,
    marginTop: 20
  },
  map: {
    width: "100%",
    height: "100%"
  },
  userpin: {
    color:"green"
  }
});

export default usersMap;
