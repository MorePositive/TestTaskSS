import React from 'react';
import { Redirect } from 'react-router-dom';

import CarouselBox from '../gallery/gallery'

const GalleryPage = ({isLoggedIn}) => {

  if(isLoggedIn) {
    return (
      <CarouselBox/>
    )
  }
  return <Redirect to="/login"/>
};

export default GalleryPage;