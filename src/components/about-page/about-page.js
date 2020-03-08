import React from 'react';
import { Redirect } from 'react-router-dom'

import './about-page.css';

import pexel5 from '../gallery-page/images/pexels-5.jpeg';

const AboutPage = ({isLoggedIn}) => {

    if (isLoggedIn) {
      return (
        <div className="about-page">
          <div className="container d-flex flex-column">
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
            </p>
            <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
            </p>
            <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus culpa quo molestiae voluptatibus quaerat aut maiores ducimus minus. Nostrum, 
              accusamus nisiodit beatae quisquam doloribus minus pariatur voluptates maxime aliquam?
            </p>
            <img className="about-image" src={pexel5} alt="about"/>
          </div>
        </div>
      );
    }
    
    return <Redirect to="/login"/>;
  
};

export default AboutPage;