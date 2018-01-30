import React, { Component } from 'react';
import { View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import {connect} from 'react-redux';
import {services} from '../reducers';
import {getServices} from '../actions/getServicesAction';



class ServiceSelector extends Component {
  state = { selected: [] }

  componentWillMount(){
    this.props.getServices();


  }
 
  onSelectionsChange = (selected) => {
    // selectedFruits is array of { label, value }
    this.setState({ selected })
  }
 
  render() {

    const serviceList = this.props.services;

    return (
      <View>
        <SelectMultiple
          items={serviceList}
          selectedItems={this.state.selected}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}

const mapStateToProps=({services})=>({services});

export default connect(mapStateToProps, {getServices})(ServiceSelector);
