import React, { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View, Image, StyleSheet, Modal, SafeAreaView } from 'react-native';
import { styles } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

function Main({ navigation }) {

	const [news, setNews] = useState([
		{ name: 'Gooogle', announce: 'gulugulu!', full: 'что-то про гугол, хз', key: '1', img: require('../assets/img/google-art.jpg') },
		{ name: 'Appple', announce: 'яблочно', full: 'iOS stuff', key: '2', img: require('../assets/img/apple-logo.jpeg') },
		{ name: 'Windos', announce: 'nokia rulz!', full: 'winda phones', key: '3', img: require('../assets/img/windows.jpg') },
	])

	const [modalWindow, setModalWindow] = useState(false)

	const addArticle = (article) => {
		setNews(list => {
			article.key = Math.random().toString()
			return [
				article,
				...list
			]
		})
		setModalWindow(false)
	}

	return (
		<View style={styles.main}>
			<Modal visible={modalWindow}>
				<View style={styles.main} >
					<Ionicons name="close" size={35} color='red' style={styles.closeBtn} onPress={() => setModalWindow(false)} />
					<Text style={styles.title}>Форма добавления статей</Text>
					<Form addArticle={addArticle} />
				</View>
			</Modal>
			<Ionicons name="add-circle" size={35} color='red' onPress={() => setModalWindow(true)} />
			<Text style={[styles.title, stylez.header]}>Главная страница</Text>
			<FlatList data={news} renderItem={({ item }) => (
				<TouchableOpacity style={stylez.item} onPress={() => navigation.navigate('FullInfo', item)}>
					<Image style={item.img ? stylez.img : {}} source={item.img} />
					<Text style={stylez.title}>{item.name}</Text>
					<Text style={stylez.announce}>{item.announce}</Text>
				</TouchableOpacity>
			)} />
		</View>
	)
}

const stylez = StyleSheet.create({
	header: {
		marginBottom: 30,
		textAlign: 'center'
	},
	item: {
		width: '100%',
		marginBottom: 30
	},
	title: {
		fontFamily: 'MstBold',
		textAlign: 'center',
		fontSize: 22,
		marginTop: 20,
		color: '#474747'
	},
	announce: {
		fontFamily: 'MstLight',
		textAlign: 'center',
		fontSize: 18,
		marginTop: 5,
		color: '#474747'
	},
	img: {
		width: '100%',
		height: 200
	}
})

export default Main