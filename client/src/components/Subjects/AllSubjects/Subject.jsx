import { Link } from '@material-ui/core'
import React from 'react'

function Subject(props) {
  return (
    <div className="subject">
      <div className="subject-heading">
        <Link to={`${props.title}`}>
          <i class="fas fa-book"></i>
          {props.title}
        </Link>
      </div>
    </div>
  )
}

export default Subject
