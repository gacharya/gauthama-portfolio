import React from 'react';
import { Title } from '../components/header/';
import { ModalImageGrid } from '../components/galleries/';
import * as art from '../images/art/americanvedas';

const AmericanVedasPage = () => (
  <main>
    <Title />
    <ModalImageGrid images={art}/>
  </main>
);

export default AmericanVedasPage;
