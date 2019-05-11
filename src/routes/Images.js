import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Gallery from 'react-native-image-gallery';

class Images extends Component {

  constructor (props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Gallery'),
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff'
    };
  };

  get galleryCount () {
    const { index } = this.state;
    const { images } = this.props;
    return (
      <View style={{ ...styles.helperContainer, top: 0 }}>
        <Text style={{ ...styles.helperText, textAlign: 'right',  paddingRight: '10%' }}>
          { index + 1 } / { images.length }
        </Text>
      </View>
    );
  }

  get caption () {
    const { index } = this.state;
    const { images } = this.props;
    return (
      <View style={{ ...styles.helperContainer, bottom: 0 }}>
        <Text style={{ ...styles.helperText, textAlign: 'center' }}>
          { (images[index] && images[index].caption) || '' }
        </Text>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Gallery
          style={styles.gallery}
          onPageSelected={(index) => this.setState({ index })}
          images={this.props.images.map(({ url, caption}) => (
            { source: { uri: url }, caption }
          ))}
        />
        { this.galleryCount }
        { this.caption }
      </View>           
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  gallery: {
    flex: 1,
    backgroundColor: 'black'
  },
  helperContainer: {
    height: 65,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center'
  },
  helperText: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic'
  }
}

const mapStateToProps = ({ images: { images } }) => ({
  images
})

export default connect(mapStateToProps)(Images);