import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { ParallaxProvider, Parallax } from 'react-skrollr';
import { Background } from 'react-parallax';
import { Parallax as ParallaxB } from 'react-parallax';

import '../how_it_works/css/style.css';
import mountains_bkg1 from '../how_it_works/images/mountains_bkg1.svg';
import city_bkg2 from '../how_it_works/images/city_bkg2.svg';
import back from '../how_it_works/images/back.png';

class Howitworks extends Component {
// @Natasha write your code here
  render() {
    return (


	    	<div><NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>How it works</h1>
				</Toolbar>
			</AppBar>
			<ParallaxB       
				blur={0}
				bgImage={require('../how_it_works/images/back.png')}
				bgImageAlt='background'
				strength={300}>	    	
				<ParallaxProvider>

					{/* Scene 1 */}
					
					<Parallax data={{'data-0': 'opacity: 1; position:fixed; left:45%;','data-1': 'opacity: 0;'}}>
						<div>Scroll to see the story</div>
					</Parallax>



						<Parallax data={{'data-10': 'opacity: 1; position:fixed; top:50vh;','data-500': 'opacity: 0; top:-50vh;'}}>
							<div className='carolyn'></div>
						</Parallax>

						<Parallax data={{'data-10': 'opacity: 1; position:fixed; left:10%; top:40vh;','data-500': 'opacity: 0; top:-50%;'}}>
							<h2>Meet Carolyn</h2>
						</Parallax>

						<Parallax data={{'data-3': 'opacity: 0;', 'data-20': 'opacity: 1; position:fixed; left:10%; top:60vh; width:20%;','data-500': 'opacity: 0; top:-50%;'}}>
							<div><h3>She runs a free childcare for refugee families in the outskirts of Bogota, Colombia.</h3><div><h3>Currently, it accounts for 185 kids.</h3></div></div>
						</Parallax>

						<Parallax data={{'data-35': 'opacity: 0;', 'data-50': 'opacity: 1; position:fixed; left:50%; top:60vh;','data-500': 'opacity: 0; top:-50vh;'}}>
							<div className='kids'></div>
						</Parallax>

						<Parallax data={{'data-35': 'opacity: 0; width: 25%;', 'data-50': 'opacity: 1; position:fixed; left:50%; top:40vh;','data-500': 'opacity: 0; top:-50%;'}}>               
							<div><h3> Every day, her pupils are in need of nutritious and safe food, clean water, clothing, textbooks, and toys</h3></div>
						</Parallax>			
	
					{/*Scene-2*/}	

						<Parallax data={{'data-500': 'opacity: 0;', 'data-600': 'opacity: 1; position:fixed; top:60vh; left:30%;', 'data-700': 'opacity: 1; position:fixed; top:60vh; left:30%;','data-1500': 'opacity: 0; top:-40vh;'}}>
							<div className='donna'></div>
						</Parallax>

						<Parallax data={{'data-500': 'opacity: 0;','data-600': 'opacity: 1; position:fixed; left:10%; top:40vh;', 'data-1500': 'opacity: 0; top:-50vh;'}}>
							<h2>Meet Donna</h2>
						</Parallax> 

						<Parallax data={{'data-700': 'opacity: 0;', 'data-800': 'opacity: 1; position:fixed; left:10%; top:45vh; width: 20%;','data-1500': 'opacity: 0; top:-50vh;'}}>
							<div><h3>She works in New York City and wants to make an in-kind - non-monetary - donation to Carolyn's charity...</h3></div>
						</Parallax>

						<Parallax data={{'data-800': 'opacity: 0;','data-900': 'opacity: 1; position:fixed; left:10%; top:60vh; width: 20%;','data-1500': 'opacity: 0; top:-50vh;'}}>
							<div><h3>...so, that it would be as easy as shopping online, and as traceable as a local delivery</h3></div>
						</Parallax> 

						<Parallax data={{'data-800': 'opacity: 1; position: fixed; right:-10%; top:60vh;', 'data-900': 'opacity: 1; right:50%; top:60vh;','data-1500': 'opacity: 0; top:-50vh;'}}>
						<div className='delivery'></div>
						</Parallax>

					{/*	Scene-3	*/}		


						<Parallax data={{'data-1000': 'opacity: 0;', 'data-1500': 'opacity: 1; position:fixed; top:40vh; left:40%;','data-1800': 'opacity: 0; top:-50vh;'}}>
							<div><h1>Introducing SmartGiving</h1></div>
						</Parallax>

						<Parallax data={{'data-1600': 'opacity: 0;','data-1700': 'opacity: 1; position:fixed; left:40%; top:50vh; width:20%;','data-1900': 'opacity: 0; top:-50vh;'}}>
							<div><h2>A blockchain-based bidding platform where anyone can help a small charity directly by paying for its purchase.</h2></div> 
						</Parallax> 

						<Parallax data={{'data-1650': 'opacity: 0; top:80vh;','data-1750': 'opacity: 1; position:fixed; left:40%; top:55vh; width:20%;','data-1950': 'opacity: 0; top:-50vh;'}}>
							<div><h2>With SmartGiving, a pool of local merchants bid to fulfil the order for the minimal price.</h2></div>
						</Parallax> 


					{/*	Scene-4	*/}

						<Parallax data={{'data-1900': 'opacity: 0;','data-1950': 'opacity: 1; position:fixed; left:40%; top:60vh;', 'data-2600': 'opacity: 1; position:fixed; left:40%; top:60vh;','data-3500': 'opacity: 0.5; top:-50vh;'}}>
							<div className='triangle'></div>
						</Parallax>

						<Parallax data={{'data-2000': 'opacity:0;', 'data-2200': 'opacity: 1; position:fixed; top:40vh;', 'data-2600': 'opacity: 1; position:fixed; top:40vh;','data-3500': 'opacity: 0.5; top:-50vh;'}}>
							<div className='carolyn'></div>
						</Parallax>

						<Parallax data={{'data-2100': 'opacity:0;', 'data-2300': 'opacity: 1; position:fixed; top:70vh; left:20%; width:10%;', 'data-2600': 'opacity: 1; position:fixed; top:70vh; left:20%; width:10%;','data-3500': 'opacity: 0.5; top:-50vh;'}}>
							<div>Carolyn places a request for 20 textbooks</div>
						</Parallax>

						<Parallax data={{'data-2400': 'opacity:0;', 'data-2600': 'opacity: 1; position:fixed; top:40vh; left:57%;','data-3500': 'opacity: 0.5; top:-50vh;'}}>
							<div className='donna'></div>
						</Parallax>

						<Parallax data={{'data-2400': 'opacity:0;', 'data-2600': 'opacity: 1; position:fixed; top:70vh; left:67%; width:10%;','data-3500': 'opacity: 0.5; top:-50vh;'}}>
							<div>Donna pledges a $200 donation to meet this need</div>
						</Parallax>

						<Parallax data={{'data-2200': 'opacity:0;', 'data-2700': 'opacity: 0; position: fixed; right:-10%; top:60vh;', 'data-2900': 'opacity: 1; right:58%; top:50vh;','data-3500': 'opacity: 0; top:-50vh;'}}>
						<div className='delivery'></div>
						</Parallax>

						<Parallax data={{'data-2200': 'opacity:0;', 'data-2700': 'opacity: 0; position: fixed; right:-10%; top:70vh; width:12%;', 'data-2900': 'opacity: 1; right:60%; top:60vh;','data-3500': 'opacity: 0; top:-50vh;'}}>
						<div> <i>Mercado Colombia</i> bids $180 and wins the contract to deliver 20 textbooks to Carolyn </div>
						</Parallax>

					{/*	Scene-5	*/}


						<Parallax data={{'data-3300': 'opacity: 0;','data-3400': 'opacity: 1; position:fixed; left:40%; top:40vh;', 'data-3700': 'opacity: 1; position:fixed; left:40%; top:30vh;','data-4100': 'opacity: 0.5; top:-50vh;'}}>
							<div className='kids'></div>
						</Parallax>

						<Parallax data={{'data-3300': 'opacity:0;', 'data-3400': 'opacity: 1; position:fixed; left:40%; top:30vh;', 'data-3700': 'opacity: 1; position:fixed; left:40%; top:28vh;','data-4100': 'opacity: 0.5; top:-50vh;'}}>
							<div className='caps'></div>
						</Parallax>

						<Parallax data={{'data-3300': 'opacity:0;', 'data-3400': 'opacity: 1; position:fixed; left:45%; top:70vh;', 'data-3700': 'opacity: 1; position:fixed; left:45%; top:40vh;','data-4100': 'opacity: 0.5; top:-50vh;'}}>
							<div className='textbooks'></div>
						</Parallax>



					{/*	Scene-6	*/}


						<Parallax data={{'data-4000': 'opacity: 0;', 'data-4100': 'opacity: 1; position:fixed; top:40vh; left:40%; width: 20%;','data-4200': 'opacity: 0; top:-50vh;'}}>
							<div><h2>Smart Contract gets executed, and all its details get recorded into Ethereum blockchain, <mark>an immutable distributed ledger
                </mark></h2></div>
						</Parallax>

						<Parallax data={{'data-4100': 'opacity: 0;','data-4200': 'opacity: 1; position:fixed; left:40%; top:60vh; width:20%;','data-4300': 'opacity: 0; top:-50vh;'}}>
							<div><h2>it allows for <mark>transparency</mark>, <mark>traceability</mark>, <mark>and security </mark></h2></div> 
						</Parallax> 

						<Parallax data={{'data-4200': 'opacity: 0;','data-4400': 'opacity: 1; position:fixed; left:45%; top:55vh; width:20%;','data-4550': 'opacity: 0; top:-50vh;'}}>
							<div><h2>but wait...</h2></div>
						</Parallax> 

						<Parallax data={{'data-4400': 'opacity: 0;', 'data-4500': 'opacity: 1; position:fixed; left:40%; top:60vh;','data-4600': 'opacity: 0; top:-50vh;'}}>
							<div><h1>what about the $20?</h1></div>
						</Parallax>

						<Parallax data={{'data-4500': 'opacity: 0;', 'data-4600': 'opacity: 1; position:fixed; left:38%; top:60vh;','data-4700': 'opacity: 0; top:-50vh;'}}>
							<div><h2>Seriously, $200 - $180 = $20</h2></div>
						</Parallax>


					{/*	Scene-7, final */}


						<Parallax data={{'data-4700': 'opacity: 0;', 'data-4800': 'opacity: 1; position:fixed; top:40vh; left:30%;','data-5000': 'opacity: 0; top:-50vh;'}}>
							<div className='donna'></div>
						</Parallax>

						<Parallax data={{'data-4700': 'opacity: 0;', 'data-4800': 'opacity: 1; position:fixed; top:50vh; left:40%; width: 20%;','data-5000': 'opacity: 0; top:-50vh;'}}>
							<div><h3>Good eye! Donna received her change of $20 once the contract was executed.</h3></div>
						</Parallax>

						<Parallax data={{'data-4800': 'opacity: 0;', 'data-4850': 'opacity: 1; position:fixed; top:50vh; left:40%; width: 20%;','data-5000': 'opacity: 0; top:-50vh;'}}>
							<div><h3>And she is already considering pledging this money toward another request.</h3></div>
						</Parallax>

						<Parallax data={{'data-4900': 'opacity: 0;', 'data-5000': 'opacity: 1; position:fixed; top:50vh; left:45%;'}}>
							<div><h1>The End</h1></div>
						</Parallax>

					
				</ParallaxProvider>
				<div style={{ height: '4500px' }} />
				</ParallaxB>
			</div>
    );
  }



}


export default Howitworks;

