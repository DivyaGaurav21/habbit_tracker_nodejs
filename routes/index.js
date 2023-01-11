const express = require('express');

const router = express.Router();

// check whether router is loaded  or not

router.get('/', (req, res) => {
    res.render('home', {
        title : 'Habbit Tracker App'
    });
})


module.exports = router;