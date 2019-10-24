import { Fragment } from 'react'

import Header from './Header'
import Meta from './Meta'

const Page = props => {
	return (
		<Fragment>
			<Meta />
			<Header />
			<main className="page">
				{ props.children }
			</main>
		</Fragment>
	)
}

export default Page