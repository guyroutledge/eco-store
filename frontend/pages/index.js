import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/sell">
				<a>Sell stuff</a>
			</Link>
		</div>
	)
}

export default Home
