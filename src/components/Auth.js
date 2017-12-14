import Firebase from 'firebase';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Card, } from 'native-base';
import Spinner from './Spinner';



import Button from '../components/Button';



// const config = {
//     apiKey: "AIzaSyC0eVfyQE_wiC-mZ_bfpJdjlax_xJ8Tv_E",
//     authDomain: "emergeo-4496e.firebaseapp.com",
//     databaseURL: "https://emergeo-4496e.firebaseio.com",
//     projectId: "emergeo-4496e",
//     storageBucket: "emergeo-4496e.appspot.com",
//     messagingSenderId: "613936575014"
// };

// Firebase.initializeApp(config);


export class SignUp extends Component{

    state = {
        email:'',
        password:'',
    };

    handleUserEmail(text){
        this.setState({
            email: text
        })
    }

    handleUserPassword(text){
        this.setState({
            password: text
        })
    }


    render(){
        // const {navigate} = this.props.navigation;
            
        return(
            <View style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Email</Label>
                                <Input onChangeText={(text)=> this.handleUserEmail(text)} />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input onChangeText={(text)=>this.handleUserPassword(text)} />
                            </Item>
                        </Form>
                    </Card>
                        <Button onPress={()=>this.createUser()}>
                            Sign Up
                        </Button>
                </Content>
            </View>
        )
    }
    //THIS FUNCTION WILL CREATE A USER ACCOUNT AND SIGN THEM IN
     createUser() {
        // const { navigate } = this.props.navigation;    
        const email = this.state.email
        const password = this.state.password
        console.log('i was pressed!');
        //VERIFY IF EMAIL IS VALID
        if(email.length < 4) {
            alert('Please enter a valid email address');
        }
        //VERIFY IF PASSWORD LENGTH IS VALID
        if(password.length < 4){
            alert('Please enter password');
        }
        //FIREBASE FUNCTION TO CREATE A NEW USER AND SIGN THEM IN
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(Firebase.auth().onAuthStateChanged( user => {

            console.log(user)
        }))
        .catch( function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            //CHECKS IF PASSWORD IS TOO WEAK AND ALERTS USER
            if(errorCode === 'auth/weak-password'){
                alert('Password is too weak!')
            }else{
                alert(errorMessage)
            }
            
            console.log(error);
        });
    }
}









export class SignIn extends Component{

    state = {
        email:'',
        password:'',
        loading: false
    };


    render(){
         
        return(
            <View style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Email</Label>
                                <Input 
                                onChangeText={email => this.setState({ email })} 
                                value={this.state.email}
                                />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input
                                secureTextEntry 
                                onChangeText={password =>this.setState({ password })} 
                                value={this.state.password}
                                />
                            </Item>
                        </Form>
                    </Card>
                      {this.renderButton()}
                </Content>
            </View>
        )
    }

renderButton(){
   switch(this.props.screenProps.loggedIn){
       case true:
            return (
                <Button onPress={()=>this.signOut()}>
                    Sign Out
                </Button>
            );
        case false:
            return (
                <Button onPress={()=>this.toggleSignIn()}>
                    Sign In
                </Button>
            );
        default:
            return <Spinner/>
   }
}

signOut(){
    // this.setState({this.props.currentUser: null});

    Firebase.auth().signOut()
}


//THIS FUNCTION WILL HANDLE USER SIGN IN AND SIGN OUT
    toggleSignIn(){
   
      const {email, password} = this.state;

      this.setState({ loading: true });

        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(error =>{
                alert(error.message)
                alert(error.code)
            })
        }

    onLoginSuccess(){
        const {navigate} = this.props.navigation

        this.setState({
            email: '',
            password: '',
            loading: false
        });

        navigate('CreateProfileName');

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,


    },
    content:{
        alignContent:'center',
        justifyContent:'center',
    },

    card: {
        alignContent:'center',
        justifyContent:'center',
        borderRadius: 5,
        borderColor:'black',
       backgroundColor:'#9DBFC8',
    },

    btntext:{
        color:'#9DBFC8',
    },
});


