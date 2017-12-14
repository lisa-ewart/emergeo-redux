import React, {Component} from 'react';
import {Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import {database} from '../firebase';
import Button from './Button';


class ProfileName extends Component{
    state = {
        firstName: "",
        lastName: ""
    }

    render(){
        console.log(this.props)

        const {
            textContainer, 
            profileNameText,
            mainContainer,
            inputContainer,
            input
            } = styles
        return (
            <View style={mainContainer}>
                <View style={textContainer}>
                    <Text style={profileNameText}>
                        Please Tell Me Your Name
                    </Text>
                </View>
                <KeyboardAvoidingView behavior={'padding'} style={inputContainer}>
                    <TextInput
                        autoCapitalize={'words'}
                        autoFocus
                        placeholder={'First Name'}
                        style={input}
                        onChangeText={firstName => this.setState({firstName})}
                        value={this.state.firstName}
                    />
                    <TextInput
                        autoCapitalize={'words'}
                        placeholder={'Last Name'}
                        style={input}
                        onChangeText={lastName => this.setState({lastName})}
                        value={this.state.lastName}
                    /> 
                    <Button onPress={() => this.createName()}>
                        Continue
                    </Button>
                </KeyboardAvoidingView>  
                
            
            </View>
        )
    }

createName(){
    const {firstName, lastName} = this.state;
    const uid = this.props.screenProps.currentUser;
    const {navigate} = this.props.navigation;

    database.ref('Users/' + uid).child('UserName').set({
        firstName: firstName,
        lastName: lastName
    })
    .then(()=> navigate('CreateProfileBio'))
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
        marginBottom: 20,
        padding: 5,
        fontSize: 23,
        alignItems: 'center',
        justifyContent: 'center'

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



export default ProfileName;