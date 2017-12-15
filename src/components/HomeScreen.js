import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image,
} from 'react-native';

import {Drawer, Icon, Button} from 'native-base';


class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../../assets/images/chicago.jpg')}
                style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}



class HomeScreen extends Component{


    render(){
        const {navigate} = this.props.navigation;
    
        return(
        <View style={styles.container}>
            <BackgroundImage>
               <Text style={styles.text}><Image source={require('../../assets/images/emergeologo.png')} style={{height: 140,
                    width: 140,marginTop:39, marginLeft:-4, }}>
                   </Image>
                </Text>
                <View>
                   <Button style={styles.btn}>
                        <Text style={styles.whitetext} 
                         onPress={() => navigate ('Join')}
                        >
                        Get Started!
                        </Text>
                    </Button>  
                </View>
                <Text style={styles.text2}>Have an account?</Text>
                    <TouchableHighlight 
                        onPress={() => navigate('LogIn')}
                     >
                    <Text style={styles.text3}>
                        Login here.
                    </Text>
                </TouchableHighlight>
            </BackgroundImage>     
        </View>  
        )
    }
}


const styles = StyleSheet.create({
    drawer:{
        width: 320,
        backgroundColor: 'rgba(0,0,0,0)',
        color:'white',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    
    btn:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius: 5,
        backgroundColor:'#2D5669',
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flex: 1,
        marginTop: 5,
    },
    heading: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 25,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: 400,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor:'rgba(0,0,0,0.6)',
        fontSize: 45,
        fontWeight: 'bold',
        borderWidth: 1, 
        borderColor:'#fff',
        borderRadius: 5,
        padding:5,
        paddingBottom:25,
        paddingRight:30,
        paddingLeft:20,
        marginRight: -15,
       

    },
    whitetext:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        fontSize: 17,
    },
    text3: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    btnText:{
        color:'white',
        fontWeight: 'bold',
    },
    logo: {

    },
    menu:{
        marginLeft: 25,
        marginTop: 25,
    }
});

export default HomeScreen;
