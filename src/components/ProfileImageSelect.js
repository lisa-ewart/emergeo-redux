import React from 'react';
import { Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { storage } from '../firebase';
// import RNFetchBlob from 'react-native-fetch-blob';

import Button from './Button';

export default class ProfileImageSelector extends React.Component {
  state = {
    image: null,
    b64: null
  };

  renderSaveButton(){
    if(this.state.image != null){
      return (
        <Button onPress={()=>this.uploadImagetoStorage()}>
          Use Photo
        </Button>
      );
    }

  }

  render() {
    let { image } = this.state;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this._pickImage}>
          Please Select an Image
        </Button>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />}
          {this.renderSaveButton()}
      </View>
  
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    console.log(result)

    // console.log("my base64 is " + result.base64)

    if (!result.cancelled) {
      this.setState({ image: result.uri, b64: result.base64 });
      
      }
};


  uploadImagetoStorage(){
    const file = this.state.image
    const bb64 = this.state.b64

    const blob = new Blob([JSON.stringify(file, null, 2)], {type: 'image/jpg'})

    console.log(blob)
  }
  
};
