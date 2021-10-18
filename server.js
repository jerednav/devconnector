//brings in express
const express = require('express') 
const connectDB = require('./config/db')
//initialize app variable with express
const app = express() ;
const path = require('path');

//Connect Database
connectDB();

//Init Middleware, allows us to get data in req.body
app.use(express.json());

//Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000 //looks for environment variable called PORT to use for Heroku, if not, it will go to 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //listen on a PORT