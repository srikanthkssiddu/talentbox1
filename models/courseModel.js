const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    course_title: {
        type: String,
        required: true
    },
    course_duration: {
        type: String,
        required: true
   }
});

module.exports = mongoose.model('Courses', courseSchema)