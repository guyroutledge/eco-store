import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'

import formatMoney from '../lib/formatMoney'

import Form from '../components/styles/Form'
import ErrorMessage from '../components/ErrorMessage'

import React, { Component } from 'react'

export const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	){
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		){
			id
		}
	}
`;

class UpdateItem extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		price: 0
	}


	handleChange = e => {
		const { name, type, value } = e.target;
		this.setState({
			[name]: type === 'number' ? parseFloat( value ) : value
		})
	}

	render() {
		const { title, description, image, price } = this.state;

		return (
			<Mutation mutation={ UPDATE_ITEM_MUTATION } variables={ this.state }>
				{ ( createItem, { loading, error } ) => (

					<Form
						onSubmit={ async e => {
							e.preventDefault();
							const res = await createItem();
							Router.push({
								pathname: '/item',
								query: { id: res.data.createItem.id }
							})
						}}>
						<h2>Sell an Item</h2>
						<ErrorMessage error={ error } />
						<fieldset disabled={ loading } aria-busy={ loading }>
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
						<button type="submit" disabled={ !image }>Submit</button>
					</Form>

				)}
			</Mutation>
		)
	}
}

export default UpdateItem