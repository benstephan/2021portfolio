import React from 'react';
import Hero from '../Components/Hero/Hero';
import AboutIntro from '../Components/AboutContent/AboutIntro/AboutIntro';
import AboutTimeline from '../Components/AboutContent/AboutTimeline/AboutTimeline';
import Services from '../Components/Services/Services'

export default function About() {
    return (
        <>
        <Hero
        title="About"
        desc="I am passionate about all things creative. Front-end development is my strong suit but my experience and portfolio include graphic design, branding, back-end web development, and many other areas of creativity. "
      />
      <AboutIntro />
      <AboutTimeline />
      <Services />
      </>
    )
}
