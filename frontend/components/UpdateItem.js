import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'

import formatMoney from '../lib/formatMoney'

import Form from '../components/styles/Form'
import ErrorMessage from '../components/ErrorMessage'

import React, { Component } from 'react'

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY( $id: ID! ){
		item( where: { id: $id } ){
			id
			title
			description
			price
		}
	}
`;
export const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$id: ID!
		$title: String
		$description: String
		$price: Int
	){
		updateItem(
			id: $id
			title: $title
			description: $description
			price: $price
		){
			id
			title
			description
			price
		}
	}
`;

class UpdateItem extends Component {
	state = { }

	handleChange = e => {
		const { name, type, value } = e.target;
		this.setState({
			[name]: type === 'number' ? parseFloat( value ) : value
		})
	}
	updateItem = ( e, updateItemMutation ) => {
		e.preventDefault();
		updateItemMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		})
	}

	render() {

		return (
			<Query query={ SINGLE_ITEM_QUERY } variables={{ id: this.props.id }}>
				{( {data, loading} ) => {
					if ( loading ) return <p>Loading...</p>
					if ( ! data.item ) return <p>No item found for ID: { this.props.id }</p>

					const { title, description, image, price } = data.item;

					return (
						<Mutation mutation={ UPDATE_ITEM_MUTATION } variables={ this.state }>
							{ ( updateItem, { loading, error } ) => (

								<Form onSubmit={ e => this.updateItem( e, updateItem ) }>
									<h2>Sell an Item</h2>
									<ErrorMessage error={ error } />
									<fieldset disabled={ loading } aria-busy={ loading }>
										<label htmlFor="title">
											Title
											<input type="text" id="title" name="title" defaultValue={ title } placeholder="Product title" onChange={ this.handleChange } required />
										</label>
										<label htmlFor="price">
											Price
											<input type="number" id="price" name="price" defaultValue={ price } placeholder="Price" onChange={ this.handleChange } required />
										</label>
										<label htmlFor="description">
											Description
											<textarea id="description" name="description" defaultValue={ description } placeholder="Enter a description" onChange={ this.handleChange } required />
										</label>
									</fieldset>
									<button type="submit">Save Changes</button>
								</Form>

							)}
						</Mutation>
					)
				}}
			</Query>
		)
	}
}

export default UpdateItem