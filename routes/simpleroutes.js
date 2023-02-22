const express = require('express');
const router = express.Router();
const controller =
    require('../controller/SimpleBlogController');



router.post('/create' , controller.createApi)



module.exports = router;