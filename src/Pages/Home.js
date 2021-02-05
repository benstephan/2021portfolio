import React from "react";
import Hero from "../Components/Hero/Hero";
import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts";
import Services from '../Components/Services/Services'

export default function Home() {
  return (
    <>
      <Hero
        title="An Appetite for Creativity"
        desc="Hi, I am Ben Stephan. A fully rounded creative professional from the always sunny Philadelphia. I specialze in front-end web development but my skills include everything from graphic design to full-stack LAMP and MERN development."
      />
      <FeaturedPosts />
      <Services />
    </>
  );
}
