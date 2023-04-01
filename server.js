#!/usr/bin/env node
import minimist from 'minimist';
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
var argv = minimist(process.argv.slice(2));
var HTTP_PORT = 5000;
if(argv['port'] != undefined) {
    HTTP_PORT = argv['port'];
}

import { rps, rpsls } from "./lib/rpsls.js"

import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"200 OK"});
	res.status(200);
});

// READ (HTTP method GET) at root endpoint /app/rps
app.get("/app/rps", (req, res, next) => {
    res.json(rps());
	res.status(200);
});

// READ (HTTP method GET) at root endpoint /app/rpsls
app.get("/app/rpsls", (req, res, next) => {
    res.json(rpsls());
	res.status(200);
});

// READ (HTTP method GET) at root endpoint /app/rps
app.get("/app/rps/play", (req, res, next) => {
    res.json(rps(req.query.shot));
	res.status(200);
});


// READ (HTTP method GET) at root endpoint /app/rpsls
app.get("/app/rpsls/play", (req, res, next) => {
    res.json(rpsls(req.query.shot));
	res.status(200);
});


// Default response for any other request
app.use(function(req, res){
	res.json({"message":"404 NOT FOUND"});
    res.status(404);
});
