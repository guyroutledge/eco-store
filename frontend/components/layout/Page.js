import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
	red: 'red',
	black: '#393939',
	grey: '#3a3a3a',
	lightGrey: '#e1e1e1',
	offWhite: '#ededed',
	maxWidth: '1000px',
	shadow: '0 12px 24px 0 rgba( 0, 0, 0, 0.09 )',
	spacing: '2rem'
};

const StyledPage = styled.div`
	background: white;
	color: ${ props => props.theme.black };
`;
const Wrapper = styled.div`
	max-width: ${ props => props.theme.maxWidth };
	margin: 0 auto;
	padding: ${ props => props.theme.spacing };
`;

const Page = props => {
	return (
		<ThemeProvider theme={ theme }>
			<StyledPage>
				<Meta />
				<Header />
				<main className="page">
					<Wrapper>
						{ props.children }
					</Wrapper>
				</main>
			</StyledPage>
		</ThemeProvider>
	)
}

export default Page