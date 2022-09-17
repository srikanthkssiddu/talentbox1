const express = require('express')
const Courses = require('../models/courseModel');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        
        const courses = await Courses.find({})
        res.send(courses)
    }
    catch (err){
        console.log(err.message);
    }
});

module.exports = router;