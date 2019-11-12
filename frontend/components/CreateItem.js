import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import formatMoney from '../lib/formatMoney'

import Form from '../components/styles/Form'

import React, { Component } from 'react'

class CreateItem extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		largeImage: '',
		price: 0
	}

	handleChange = e => {
		const { name, type, value } = e.target;
		this.setState({
			[name]: type === 'number' ? parseFloat( value ) : value
		})
	}
	handleSubmit = e => {
		e.preventDefault();
	}

	render() {
		const { title, description, image, largeImage, price } = this.state;
		const { handleChange } = this;

		return (
			<Form onSubmit={ this.handleSubmit }>
				<h2>Sell an Item</h2>
				<fieldset>
					<label htmlFor="title">
						Title
						<input type="text" id="title" name="title" value={ title } placeholder="Product title" onChange={ this.handleChange } required />
					</label>
					<label htmlFor="price">
						Price
						<input type="number" id="price" name="price" value={ price } placeholder="Price" onChange={ this.handleChange } required />
					</label>
					<label htmlFor="description">
						Description
						<textarea id="description" name="description" value={ description } placeholder="Enter a description" onChange={ this.handleChange } required />
					</label>
				</fieldset>
				<button type="submit"></button>
			</Form>
		)
	}
}

export default CreateItem