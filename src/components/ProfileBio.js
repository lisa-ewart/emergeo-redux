import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import { database } from '../firebase';
import Button from './Button';


class MiniBio extends Component{
    state = {
        bio: ""
    }

    render(){
        const {
            mainContainer,
            textContainer,
            input,
            inputContainer,
            profileNameText,
            inputView
        } = styles

        return(
            <View style={mainContainer}>
                <View style={textContainer}>
                    <Text style={profileNameText}>Tell us a little about your experience</Text>
                </View>
                <KeyboardAvoidingView behavior={'padding'} style={inputContainer}>
                <View style={inputView}>
                <TextInput
                    style={input} 
                    placeholder={'eg: I have 5 years experence with residential Hvac'}
                    onChangeText={bio => this.setState({ bio })}
                    value={this.state.bio}
                    multiline
                    autoGrow={true}
                    // maxHeight={10}
                    maxLength={140}
                    underlineColorAndroid={'#9DBFC8'}
                />
                </View>
                <Button onPress={()=> this.createUserBio()}>
                    Continue
                </Button>
                </KeyboardAvoidingView>
            </View>

        )
    }



    createUserBio(){
        const miniBio = this.state.bio;
        const uid = this.props.screenProps.currentUser;
        const { navigate } = this.props.navigation;

        database.ref('Users/' + uid).child('UserBio').set({
            miniBio: miniBio
        })
        .then(()=> navigate('Profile'))
    }
}

const styles ={
    mainContainer:{
        flex: 1,

    },
    inputContainer:{
        flex: 2,
        justifyContent: 'center',
        padding: 20,
        

    
    },
    input:{
        marginBottom: 40,
        padding: 10,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    inputView:{
        margin: 5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#2D5669',
        backgroundColor: '#9DBFC8',
        height: 200
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    profileNameText:{
        fontSize: 26,
        fontStyle: 'italic',

    }
}


export default MiniBio;