import Link from 'next/link'
import styled from 'styled-components'


import Nav from './Nav'

const Logo = styled.h1`
	position: relative;
	z-index: 2;
	margin: 0;
	transform: skew( -7deg );
	font-size: 4rem;

	a {
		padding: 0.5rem 1rem;
		color:#fff;
		background: ${ props => props.theme.brand };
		text-transform:uppercase;
		text-decoration: none;
	}

	@media ( max-width:1300px ) {
		text-align:center;
	}
`;
const StyledHeader = styled.header`
	.bar {
		border-bottom:10px solid ${ props => props.theme.black };
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;

		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${ props => props.theme.lightGrey };
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<div className="bar">
				<Logo><Link href="/"><a>Eco Shop</a></Link></Logo>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<div>Cart</div>
		</StyledHeader>
	)
}

export default Header