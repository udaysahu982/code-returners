import React, { useState } from 'react'

const COURSEAPI ="http://localhost:8080/api/courses/viewCourse"

const ViewCourse = () => {

  const [course,setCourse] = useState();
  return (
    <div>
      View course
    </div>
  )
}

export default ViewCourse
