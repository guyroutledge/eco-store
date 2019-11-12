import PropTypes from 'prop-types'
import Link from 'next/link'

import formatMoney from '../lib/formatMoney'

import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'

const Item = ({ item }) => {
	const { id, title, price, description, image } = item;
	return (
		<ItemStyles>
			{ item.image && <img src={ image } alt={ title } /> }
			<Title>
				<Link href={{ pathname: '/item', query: { id } }}>
					<a>{ title }</a>
				</Link>
			</Title>
			<PriceTag>{ formatMoney( price ) }</PriceTag>
			<p>{ description }</p>

			<div className="buttonList">
				<Link href={{ pathname: '/update', query: { id } }}>
					<a>Edit</a>
				</Link>
				<button>Add to Cart</button>
				<button>Delete</button>
			</div>
		</ItemStyles>
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
}

export default Item
