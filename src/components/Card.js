import React from 'react';
import { TouchableHighlight, View, Text, Image, Dimensions } from 'react-native';

const Card = props =>
	<TouchableHighlight onPress={props.onPress}>
		<View>
			<Image
				style={styles.image}
				source={{ uri: props.images[0].url }}
			/>
			<View style={styles.titleContainer}>
				<Text style={styles.text}>
					{props.title}
				</Text>
			</View>
		</View>
	</TouchableHighlight>;

const styles = {
	image: {
		width: Dimensions.get('window').width,
		height: 200
	},
	titleContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	text: {
		fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
	}
};

export default Card;