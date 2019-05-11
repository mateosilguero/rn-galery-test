import React, { Component } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAlbums, setImages } from '../actions/Albums';
import Card from '../components/Card';

class Home extends Component {
  static navigationOptions = {
    title: 'Gallery'
  };

  componentDidMount() {
    if(this.props.albums.length === 0) {
      this.props.dispatch(getAlbums());
    }
  }

  render(){
    return (
      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <FlatList
          data={this.props.albums}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) =>
            <Card
              { ...item }
              onPress={() => {
                this.props.dispatch(setImages(item.images));
                this.props.navigation.navigate('Images', {
                  title: item.title
                })
              }}
            />
          }
        />
      </View>                
    )
  }
}

const mapStateToProps = ({ images: { albums } }) => ({
  albums
})

export default connect(mapStateToProps) (Home);