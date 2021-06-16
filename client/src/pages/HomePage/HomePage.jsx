import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SubjectsCard from '../../components/Subjects/HomeSubjects/SubjectsCard'
import Search from '../../components/Search/Search'
import Hero from '../../components/Hero/Homehero/Hero'

function HomePage() {
	return (
		<>
			<NavBar />
			<Hero />
			<Search />
			<SubjectsCard />
			<Footer />
		</>
	)
}

export default HomePage
