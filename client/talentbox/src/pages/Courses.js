import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [courses, setCourses] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/courses")
    const data = await response.json()
    setCourses(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Wecome to freecodecamp(✒️)</h1>
      <h3>I have no special talents. I am only passionately curious.</h3>
      <h4>-Albert Einstein</h4>
      <div >
      <h2>Courses</h2>
      {courses.length > 0 && (
        courses.map((course) => ( 
            <ol key = { course._id } >
                { course.course_title }, 
                { course.course_duration }
                </ol>
            ))
      )}
      </div>
    </div>
  )
}

export default AsyncAwait
