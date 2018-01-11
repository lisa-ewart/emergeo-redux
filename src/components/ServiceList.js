import React,{ Component} from 'react';
import {ListView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {services} from '../reducers';
import {getServices} from '../actions/getServicesAction';

class ServiceList extends Component {
	componentWillMount(){
		this.props.fetchServices(); 

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.services)
	}

	renderRow(rowData, serviceID){
		return(
			<View>
			<Text>
			{rowData}
			</Text>
			</View>

		)
	}

	render(){
		console.log(this.props)
		return(
			<View>
			<ListView
				dataSource = {this.dataSource}
				renderRow= {this.renderRow}
			/>

			<View>
				<Text>HI</Text>
			</View>
			
			</View>
		)
	}

}

const mapStateToProps = state => {
	return {services: state.services}
};

const mapDispatchToProps = dispatch => {
	return {fetchServices:() => dispatch(getServices())}
};


export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);