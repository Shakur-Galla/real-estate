import React from 'react'
import Journey from '../components/Journey'
import Values from '../components/Values'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

const About = () => {
  return (
    <>
        <Journey/>
        <Values />
        <Achievements />
        <Experience />
        <Team />
        <Testimonials/>
        <CallToAction/>
    </>
  )
}

export default About