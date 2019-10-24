import Header from './Header'
import Meta from './Meta'
import styled from 'styled-components'

const StyledPage = styled.div`
	background:white;
	color:black;
`;
const Wrapper = styled.div`
	max-width:1200px;
	margin:0 auto;
	padding:2rem;
`;

const Page = props => {
	return (
		<StyledPage>
			<Meta />
			<Header />
			<main className="page">
				<Wrapper>
					{ props.children }
				</Wrapper>
			</main>
		</StyledPage>
	)
}

export default Page