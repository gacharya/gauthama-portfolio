import React from 'react';
import Title from '../components/header/title';
import { ModalImageGrid } from '../components/galleries/';
import * as art from '../images/art/misc'

const MiscPage = () => (
  <main>
    <Title />
    <ModalImageGrid images={art}/>
  </main>
);

export default MiscPage;