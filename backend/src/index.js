require( 'dotenv' ).config({ path: '.env' });

const createServer = require( './createServer' );
const db = require( './db' );

const server = createServer();

// TODO use Express middleware for cookies (JWT) and current to populate user

server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL
		}
	},
	server => {
		console.log(`Server is running on http://localhost:${ server.port }`);
	}
);