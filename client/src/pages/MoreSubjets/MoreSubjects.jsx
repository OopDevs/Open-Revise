import React from 'react'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import SubjectsCard from '../../components/Subjects/AllSubjects/SubjectsCard'
import Hero from '../../components/Hero/AllSubjectsHero/Hero'
function MoreSubjects() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <SubjectsCard />
      <Footer />
    </>
  )
}

export default MoreSubjects
