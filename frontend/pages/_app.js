import App, { Container } from 'next/app'
import Page from '../components/layout/Page'

class MyApp extends App {
	render() {
		const { Component } = this.props;

		return (
			<Container>
				<Page>
					<Component />
				</Page>
			</Container>
		)
	}
}

export default MyApp