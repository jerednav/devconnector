//To use express
const express = require('express')
//To use express router
const router = express.Router();


// @ route      POST api/users
// @ desc       Register user
// @ access     Public
router.post('/', (req,res) => {
    //req.body is the object of the data that is sent to route
	//in order for req.body to work, we must initialize middleware
    console.log(req.body);
    res.send ('User route');
});


module.exports = router;