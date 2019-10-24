import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
	return (
		<header>
			<div className="bar">
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<div>Cart</div>
		</header>
	)
}

export default Header