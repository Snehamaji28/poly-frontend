import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import MentorCompanies from '../components/MentorCompanies'
import BlogSection from '../components/BlogSection'
import Hiring from '../components/Hiring'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

function HomePage() {
  return (<>
    <Hero />
    <Services />
    <MentorCompanies />
    <CallToAction />
    <Testimonials />
    {/* <BlogSection /> */}
    <Hiring />
    </>
)
}

export default HomePage