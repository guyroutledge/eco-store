import UpdateItem from '../components/CreateItem'

const Sell = ({ query }) => {
	return (
		<div>
			<UpdateItem id={ query.id } />
		</div>
	)
}

export default Sell


