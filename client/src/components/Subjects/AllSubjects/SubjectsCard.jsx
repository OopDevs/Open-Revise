import React from 'react'
import Subject from './Subject'
import subjects from "./Subjects"
import "./AllSubjects.css"

function SubjectsCard() {
  console.log(subjects);
  return (
    <section className="AllSubjects-section">
      <div className="AllSubjects-container">
        <div className="AllSubjects-wrapper">

          <div className="Allsubjects">
            {subjects.map((subject) => {
              return <Subject ket={subject.id} {...subject} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubjectsCard
