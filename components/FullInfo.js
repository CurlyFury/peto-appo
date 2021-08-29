import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { styles } from '../styles/style';

function Contacts({ route }) {

	return (
		<View style={styles.main}>
			<Image style={route.params.img ? stylez.img : {}} source={route.params.img} />
			<Text style={[styles.title, stylez.header]}>{route.params.name}</Text>
			<Text style={stylez.full} >{route.params.full}</Text>
		</View>
	)
}

const stylez = StyleSheet.create({
	full: {
		fontFamily: 'MstLight',
		textAlign: 'center',
		fontSize: 18,
		marginTop: 20,
		color: '#474747'
	},
	header: {
		fontSize: 20,
		marginTop: 25
	},
	img: {
		width: '100%',
		height: 200
	}
})

export default Contacts