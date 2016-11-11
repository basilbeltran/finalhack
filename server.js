const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes.js");
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/splitit');

const sessions = require('client-sessions')({
        cookieName: "userSession",  // front-end cookie name, currently pulled from package.json, feel free to change
        secret: 'boats',        // the encryption password : keep this safe
        requestKey: 'session',    // req.session,
        duration: (86400 * 1000) * 7, // one week in milliseconds
        cookie: {
            ephemeral: false,     // when true, cookie expires when browser is closed
            httpOnly: true,       // when true, the cookie is not accesbile via front-end JavaScript
            secure: false         // when true, cookie will only be read when sent over HTTPS
        }
    }); // encrypted cookies!
app.use(sessions);
PORT = process.env.PORT || 8080;

// routes
routes(app);

app.listen(PORT, function(err) { 
	if(err) {
		console.log("server error", err);
		process.exit(1);
	};
	console.log("server is listening to port " + PORT);
});