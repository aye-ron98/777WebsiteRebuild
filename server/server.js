const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const crypto = require('crypto');
const axios = require('axios');


// variable app references the express module
const app = express();

/* Middleware
    Allows cross-origin resource sharing, REQUIRED
    Allows the express to make requests to external server
*/
app.use(cors({
    origin: [
        'http://localhost:3000', // url of the react app
        `https://login.microsoftonline.com/${process.env.TENENT_ID}/oauth2/v2.0/token`, // auth token endpoint
        'https://graph.microsoft.com' // ms graph api endpoint
    ],
    methods: ['POST', 'GET'], // methods allowed - may add more I am limiting for secuirty
    allowedHeaders: ['Content-Type', 'Authorization'], // headers allowed - may add more I am limiting for secuirty
    credentials: true // allows cookies to be sent from the react app to the express server -> configure in header on client side!
}));


/*
    Middleware
    Create a new session for user, and store the session id in a cookie
    Purpose here is to store the auth token to later access ms graph api
*/
app.use(
    session({
        secret: crypto.randomBytes(20).toString('hex'), // secret key used to encrypt session data
        resave: false, // forces the session to be saved back to the session store
        saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store
    })
)


/* Api post request to get access token
       param tokenEndpoint: api endpoint to get access token
       param body: body params
       param headers: request headers

       these params are for reference, they are hard coded in this example
       await axois.post(tokenEndpoint, body, {headers} );
*/
app.post('/getAccessToken', async (req, res) => {
    try {

        // request headers
        const headers = {
            'Host': 'login.microsoftonline.com',
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        // body params
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        const scope = 'https://graph.microsoft.com/.default';
        const tokenEndpoint = `https://login.microsoftonline.com/${process.env.TENENT_ID}/oauth2/v2.0/token`;
        const username = process.env.USER_NAME; // must be a specific user
        const password = process.env.PASSWORD; // must be a specific user


        const response = await axios.post(tokenEndpoint, {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            scope: scope,
            username: username,
            password: password,
        }, { headers });

        const accessToken = response.data.access_token;
        
        // store the access token in the session
        req.session.accessToken = accessToken;
        console.log('Access Token:', req.session.accessToken);

        // send a 200 code and return the access token
        res.status(200).json({message: "success"});
    } catch (error) {
        console.error(error);

        // send a 500 code and return an error message
        res.status(500).json({ error: 'Failed to obtain access token' });
    }
});

/*
    Api get request to get calendar events
    param endpoint: api endpoint to get calendar events
    param headers: request headers
    no body requred for get request to msgraph api

    ensure that ms graph api is given permission to read calendar events
    set permissions at https://portal.azure.com/ -> Azure Active Directory -> (for ne api) App Registrations -> {api name} -> API Permissions
*/

app.get('/getCalendarEvents', async (req, res) => {
    try {

        const endpoint = `https://graph.microsoft.com/v1.0/users/${process.env.USER_NAME}/calendar/events`; // must refernce specifi user

        // request headers
        const headers = {
            'Authorization': `Bearer ${req.session.accessToken}`, // access token stored in session
        }

        const response = await axios.get(endpoint, { headers });

        const events = response.data;

        res.status(200).json({ events });


    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to obtain calendar events' });
}
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});




/* Start the server
         param port: port number

         if there is an error, log the error via catch statement
*/
try {
    app.listen(5000, () => {
        console.log('Server listening on port 5000');
    });
} catch (error) {
    console.error(error);
}
