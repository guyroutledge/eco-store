import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const theme = {
	brand: 'red',
	black: '#393939',
	grey: '#3a3a3a',
	lightGrey: '#e1e1e1',
	offWhite: '#ededed',
	maxWidth: '1000px',
	shadow: '0 12px 24px 0 rgba( 0, 0, 0, 0.09 )',
	spacing: '2rem'
};

injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2') format( 'woff2' );
		font-weight: normal;
		font-style: normal;
	}
	html {
		box-sizing:border-box;
		font-size:10px;
		font-family:'radnika_next';
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding:0;
		margin:0;
		font-size:1.5rem;
		line-height: 2;
	}
	a {
		color: ${ theme.black };
		text-decoration:none;
		transition:0.3s;

		&:hover {
			color: ${ theme.brand };
		}
	}
`;

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