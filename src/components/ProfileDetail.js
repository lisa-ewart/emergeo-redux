import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {getProfile} from '../actions/getProfAction';
import _ from 'lodash';

import {database} from '../firebase';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



class ProfileDetail extends Component {


    componentWillMount(){
        this.props.fetchProf();
     }



 

render(){
    console.log('.......')
    console.log(this.props)
    console.log('........')
    const {
        profileBtnContainer,
        profilePic,
        iconStyle,
        profilePicContainer,
        ratingStyle,
        profileNameDisplay,
        infoTitle,
        infoContainer
        } = styles;
    const {firstName, lastName} = this.props.profile

    return(
        <Card>
            <CardSection>
                <View style={profileBtnContainer}>
                </View>
                <View style={profilePicContainer}>
                    <Image source={require('../../assets/images/emergeoPic.jpg')} style={profilePic}/>
                    <Text style={profileNameDisplay}>Rich.H</Text>
                </View>
                <View style={ratingStyle}>
                    <Text>Rating</Text>
                </View>
            </CardSection>
            <CardSection>
                <View style={infoContainer}>
                    <Text style={infoTitle}>Services</Text>   
                    <Text style={infoTitle}>About me</Text>
                    <Text>somthing</Text>
                    <Text style={infoTitle}>Accepted Payments</Text>
                </View>
            </CardSection>
            <CardSection>
                <View>
                    <Button onPress={() => alert('Hello There')}>
                        Message
                    </Button>
                </View>
            </CardSection>
        </Card>
        )
    }
}




const styles ={
    profileBtnContainer:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        // backgroundColor: '#9DBFC8'
    },
    profilePicContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DBFC8'
    },
    profilePic:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'grey'

        
    },
    profileNameDisplay:{
        fontSize: 20,
        fontWeight: '500',

    },
    ratingStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    iconStyle:{
        padding: 5
    },
    infoContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoTitle:{
        // borderWidth: 1,
        // borderRadius: 2,
        fontSize: 21,
        fontWeight: 'bold',
        padding: 5,
        textDecorationLine: 'underline'

    },
   
}

const mapStateToProps = state => {
    return {profile: state.profile}
};

const mapDispatchToProps = dispatch => {
    return { fetchProf: () => dispatch(getProfile()) }
};



export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);