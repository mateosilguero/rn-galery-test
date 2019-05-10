import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
//import { setUser } from '../actions/User';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    } 

    render(){        
        return (              
          <View>
          </View>                
        )
    }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps) (Home);