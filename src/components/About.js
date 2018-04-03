import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import '../About.css'


const styles = {
    paperContainer: {
        height: 100
    }
};

class About extends Component {
    render() {
      return (
        <ParallaxProvider>
          <Parallax
            data={{
              'data-top-top': 'opacity: 1; transform: translateX(-10%);',
              'data-center-center': 'opacity: 1; left: 0;'
            }}
          >
           	<div><img src={require("../data/about_pics/C.png")} alt="Meet Carolyn"/></div>
          </Parallax>
          
          <Parallax
            data={{
              'data-center-center': 'opacity: 0;',
              'data-top-top': 'opacity: 0;',
              'data-106-top': 'height: 1%; top: -10%; opacity: 0;',
              'data-center': 'height: 100%; top: 0%; opacity: 0.5;'

            }}
          >
            <img src={require("../data/about_pics/children.png")} alt="She runs a shelter for refugee kids in Colombia"/>
          </Parallax>
        </ParallaxProvider>
      );
    }
  }

export default About;


