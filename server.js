const { uuid } = require('uuidv4');
const express = require('express');
const fs = require('fs');

const port = 5000;
const db = new DataBase('./db.json');
const app = express();

app.get('/', (req, res) => {
	console.log("Pew!")
	res.send("Hello there")
})

app.get('/api/data-base', (req, res) => {
	console.log("Someone accessning databse")
// 	res.json(db);
})

app.get('/api/test/clients', (req, res) => {
	console.log("Someone accessing test api")
	res.json([
		{id:1, firstName:"John", lastName:"Doe"},
		{id:2, firstName:"John", lastName:"Doe"},
		{id:3, firstName:"John", lastName:"Doe"}
	]);
})


// easter eggs
const eeRouter = require('./routes/easter-egg.js')
app.use("/easter-egg", eeRouter)

app.listen(port, () => console.log(`Server started at port ${port}`));
