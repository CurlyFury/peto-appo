import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { styles } from '../styles/style';
import { Formik } from 'formik'

function Form({ addArticle }) {

	return (
		<View>
			<Formik initialValues={{ name: '', announce: '', full: '' }} onSubmit={(values, action) => {
				addArticle(values)
				action.resetForm()
			}}>
				{(props) => (
					<View>
						<TextInput style={stylez.input} value={props.values.name}
							placeholder='Введите название'
							onChangeText={props.handleChange('name')} />
						<TextInput style={stylez.input} value={props.values.announce}
							placeholder='Анонас'
							multiline
							onChangeText={props.handleChange('announce')} />
						<TextInput style={stylez.input} value={props.values.full}
							placeholder='Текст'
							onChangeText={props.handleChange('full')} />

						<Button title='Добавить' onPress={props.handleSubmit} />

					</View>
				)}
			</Formik>
		</View>
	)
}

const stylez = StyleSheet.create({
	input: {
		borderWidth: 1,
		marginTop: 15,
		padding: 10,
		borderColor: 'silver',
		borderRadius: 5
	}
})

export default Form