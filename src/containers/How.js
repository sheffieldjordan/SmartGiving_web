import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { ParallaxProvider } from 'react-scroll-parallax';

import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="../how_it_works/carolyn.png" />
    </Parallax>
);


class Howitworks extends Component {
	
	render() {
    	return (

	    	<div><NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>How it works</h1>
				</Toolbar>
			</AppBar>

			<ParallaxProvider>
                <App />
            </ParallaxProvider>

			</div>
    	);
  }
}



export default Howitworks;