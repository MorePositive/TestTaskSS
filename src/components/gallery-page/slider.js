import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pexels0 from '../gallery-page/images/pexels-0.jpeg'
import Pexels1 from '../gallery-page/images/pexels-1.jpeg'
import Pexels2 from '../gallery-page/images/pexels-2.jpeg'
import Pexels3 from '../gallery-page/images/pexels-3.jpeg'
import Pexels6 from '../gallery-page/images/pexels-6.jpeg'
import Pexels7 from '../gallery-page/images/pexels-7.jpeg'
import Pexels8 from '../gallery-page/images/pexels-8.jpeg'
import Pexels9 from '../gallery-page/images/pexels-9.jpeg'
import Pexels10 from '../gallery-page/images/pexels-10.jpeg'

export default class CarouselBox extends Component {

  render() {
    return (
      <Carousel className="container">
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels0 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels1 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels2 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels3 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels6 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels7 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels8 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels9 }
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail"
            src={ Pexels10 }
            alt="slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  };
};