import React from 'react';
import { PageProps } from 'gatsby';
import Title from '../components/header/title';
import { Blog } from '../components/blog/';

const BlogPage: React.FC<PageProps> = () => (
  <main>
    <Title />
    <Blog />
  </main>
);

export default BlogPage;
