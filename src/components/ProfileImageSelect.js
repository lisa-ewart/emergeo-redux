import React from 'react';
import { Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import firebase from 'firebase';

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

    console.log("this is my result" + result)
    // console.log("my base64 is " + result.base64)

    if (!result.cancelled) {
      this.setState({ image: result.uri, b64: result.base64 });

     



    }
  };

   


  uploadImagetoStorage(){

    const data64 = this.state.b64
    const url = "data:image/jpg;base64," + data64;

    fetch(url)
    .then( res => res.blob())
    .then(blob => {
      const fd = new FormData()
      fd.append('image', blob, 'filename')

      console.log(blob)
    })

 
  
    // storageRef.child('ProfileImage').put(file)

  }
}