import Link from 'next/link'

const Nav = () => {
	return (
		<nav>
			<Link href="/"><a>Eco Store</a></Link>
			<Link href="/sell"><a>Sell</a></Link>
		</nav>
	)
}

export default Nav
