import React, {Component} from 'react';
import {View, TouchableHighlight, Text,} from 'react-native';


const Button =({onPress, children}) =>{
	return(
		<TouchableHighlight style={styles.signin} onPress={onPress}>
			<Text style={styles.btnText}>{children}</Text>
		</TouchableHighlight>
		)
}

const styles = {
	    signin:{
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
    btnText:{
    	color:'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
}


export default Button;