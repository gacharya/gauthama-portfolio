import React from 'react';
import { PageProps } from 'gatsby';
import { Title } from '../components/header/';
import { headshot } from '../images/about'
import '../components/style.css'

const BlogPage = () => (
  <main>
    <Title />
    <div className="aboutSection">
    <img src={headshot} />
    <p>i am a visual artist & technologist,
      <br/>
      <br/> i seek to explore the boundaries of religion, cultural identity, and neurotechnology.
      <br/>
      <br/>
      <br/> i believe
      <br/>
      <br/> substance is an emergent property of design.
      <br/>
      <br/> spirituality is a mechanism to explore the expanse of our minds.
      <br/>
      <br/> reduction is synonymous with creation. 
    </p>
    </div>
  </main>
);

export default BlogPage;
