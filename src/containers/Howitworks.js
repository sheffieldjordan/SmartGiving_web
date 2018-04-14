import React, { Component } from 'react';


import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';



import { ParallaxProvider, Parallax } from 'react-skrollr';
import { Parallax as ParallaxB } from 'react-parallax';

import '../how_it_works/css/style.css';






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
				bgWidth='auto'
				strength={100}>
				

					{/* Scene 1 */}
					
				<React.Fragment>


					<Parallax data={{'data-start': 'opacity: 1; position:absolute; left:45%; top:10vh;','data-top-top': 'opacity: 0;'}}>
						<div>Scroll to see the story</div>
					</Parallax>


					<Parallax data={{'data-top': 'opacity: 1; position:absolute; left:35%; top:80vh;','data-top-bottom': 'opacity: 0; transform:translateY(-50vh);'}}>
						<div className='carolyn'></div>
					</Parallax>

					<Parallax data={{'data-center-center': 'opacity: 1; position:absolute; left:10%; top:30vh;','data-top-bottom': 'opacity: 0; transform:translateY(-10vh);'}}>
						<h2>Meet Aida</h2>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; top:190vh;', 'data-center-center': 'opacity: 1; position:absolute; left:10%; top:40vh; width:20%;','data-top-bottom': 'opacity: 0; transform:translateY(-10vh);'}}>
						<div><h3>She runs a free childcare for refugee families in the outskirts of Bogota, Colombia.</h3><div><h3>Currently, it accounts for 185 kids.</h3></div></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; top:250vh', 'data-center-center': 'opacity: 1; position:absolute; left:50%; top:95vh;','data-top-bottom': 'opacity: 0; transform:translateY(-50vh);'}}>
						<div className='kids'></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; width: 20%; top:200vh', 'data-center-top': 'opacity: 1; position:absolute; left:10%; top:65vh;','data-top-bottom': 'opacity: 0; transform:translateY(-10vh);'}}>               
						<div><h3> Every day, her pupils are in need of nutritious and safe food, clean water, clothing, textbooks, and toys.</h3></div>
					</Parallax>			

				{/*Scene-2*/}	

					<Parallax data={{'data-90p': 'opacity: 1; position:absolute; top:180vh; left:35%;', 'data-top-bottom': 'opacity: 0; transform:translateY(-50vh);'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-90p': 'opacity: 1; position:absolute; left:10%; top:130vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-10vh);'}}>
						<h2>Meet Donna</h2>
					</Parallax> 

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; top:230vh;', 'data-110p': 'opacity: 1;  left:10%; top:165vh; width: 20%;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h3>She works in New York City and wants to Donate goods to Aida's charity...</h3></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:10%; top: 220vh','data-120p': 'opacity: 1; top:180vh; width: 20%;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h3>...so, that it would be as easy as shopping online, and as traceable as a local delivery</h3></div>
					</Parallax> 

					<Parallax data={{'data-110p': 'opacity: 1; position: absolute; right:-10%; top:177vh;', 'data-120p': 'opacity: 1; right:50%; top:177vh;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div className='delivery'></div>
					</Parallax>

				{/*	Scene-3	*/}		


					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:39%; width: 22%; text-align:justify; top: 300vh;','data-180p': 'opacity: 1; top:220vh;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h1>Introducing SmartGiving</h1></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:36%; top: 370vh; width:28%; text-align:justify;', 'data-190p': 'opacity: 1; transform:translateY(-160vh);','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h2>A blockchain-based online <mark>marketplace</mark> where anyone can help a small charity directly by paying their check.</h2></div> 
					</Parallax> 

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:36%; top: 360vh;  width:28%; text-align:justify;', 'data-200p': 'opacity: 1;  transform:translateY(-130vh);','data-top-bottom': 'opacity: 0; transform:translateY(-20vh);'}}>
						<div><h2>So a donor always knows what her money buys.</h2></div>
					</Parallax> 

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:36%; top: 380vh;  width:28%; text-align:justify;', 'data-210p': 'opacity: 1;  transform:translateY(-140vh);','data-top-bottom': 'opacity: 0; transform:translateY(-20vh);'}}>
						<div><h2>And the price is always reasonable thanks to multiple offers from merchants.</h2></div>
					</Parallax> 


				{/*	Scene-4	*/}

					<Parallax data={{'data-230p': 'opacity: 1; position: absolute; left: 42%; top: 300vh;', 'data-270p': '330vh', 'data-330p': 'top:330vh;', 'data-top-bottom': 'opacity: 0;'}}>
						<div className='triangle'></div>
					</Parallax>

					<Parallax data={{'data-240p': 'opacity: 1; position: absolute; right:110%; top:320vh;', 'data-250p': 'opacity: 1; right:60%; top:310vh;', 'data-330p': 'top: 350vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div className='carolyn'></div>
					</Parallax>

					<Parallax data={{'data-230p': 'opacity:0; position:absolute; left:15%; width:10%; top: 325vh;', 'data-260p': 'opacity:1;', 'data-330p': 'top:360vh;', 'data-top-bottom': 'opacity: 0;  transform:translateY(-30vh);'}}>
						<div><h3>Aida places a request for 20 textbooks</h3></div>
					</Parallax>

					<Parallax data={{'data-255p': 'opacity:1; position: absolute; right:-10%; top:315vh;', 'data-265p': 'opacity: 1; right:36%;', 'data-330p': 'top: 350vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-260p': 'opacity:0; position: absolute; left: 75%; top: 330vh;  width:10%;', 'data-275p': 'opacity: 1;', 'data-330p': 'top:360vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h3>Donna pledges a $200 donation to meet this need</h3></div>
					</Parallax>

					<Parallax data={{'data-270p': 'opacity:1; position: absolute; right:-10%; top:340vh;', 'data-290p': 'opacity: 1; right:80%; top:350vh;', 'data-330p': 'opacity: 0; top: 360vh; right: 120%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-284p': 'opacity:0; position: absolute; right:53.5%; top: 333vh;', 'data-285p': 'opacity:1;', 'data-287p': 'opacity:0.5; top: 308vh;', 'data-295p': 'opacity:0;'}}>
					<div className='coin200'></div>
					</Parallax>

					<Parallax data={{'data-275p': 'opacity:1; position: absolute; right:-10%; top:341vh;', 'data-295p': 'opacity: 1; right:70%; top:351vh;', 'data-330p': 'opacity: 0; top: 360vh; right: 120%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-291p': 'opacity:0; position: absolute; right:53.5%; top: 333vh;', 'data-292p': 'opacity:1;', 'data-295p': 'opacity:0.5; top: 308vh;', 'data-301p': 'opacity:0; top: 307vh;'}}>
					<div className='coin190'></div>
					</Parallax>

					<Parallax data={{'data-280p': 'opacity:1; position: absolute; right:-10%; top:342vh;', 'data-300p': 'opacity: 1; right:60%; top:352vh;', 'data-330p': 'opacity: 0; top: 360vh; right: 120%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-298p': 'opacity:0; position: absolute; right:53.5%; top: 333vh;', 'data-299p': 'opacity:1;', 'data-301p': 'opacity:0.7; top: 312vh;'}}>
					<div className='coin180'></div>
					</Parallax>


					<Parallax data={{'data-260p': 'opacity:0; position:absolute; width: 20%; left: 40%; top: 400vh;', 'data-265p': 'opacity: 1;  top:395vh;', 'data-330p': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div><h3> A pull of merchants offer their bids </h3></div>
					</Parallax>

					<Parallax data={{'data-295p': 'opacity: 0; position: absolute; right:-10%; top:380vh;', 'data-305p': 'opacity: 1; right:58%; top:385vh;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div className='delivery'></div>
					</Parallax>

					<Parallax data={{'data-300p': 'opacity:0; position:absolute; width: 20%; left: 40%; top: 405vh;', 'data-310p': 'opacity: 1;  top:410vh;', 'data-330p': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div><h3> <i>Mercado Colombia</i> bids $180 and wins the contract to deliver 20 textbooks to Aida </h3></div>
					</Parallax>	

					{/*


					Scene-5	*/}


					<Parallax data={{'data-3300': 'opacity: 0;','data-3400': 'opacity: 1; position:fixed; left:40%; top:40vh;', 'data-3700': 'opacity: 1; position:fixed; left:40%; top:30vh;', 'data-3900': 'opacity: 1; position:fixed; left:40%; top:25vh;','data-4100': 'opacity: 0.5; top:-50vh;'}}>
						<div className='kids'></div>
					</Parallax>

					<Parallax data={{'data-3300': 'opacity:0;', 'data-3400': 'opacity: 1; position:fixed; left:40%; top:30vh;', 'data-3700': 'opacity: 1; position:fixed; left:40%; top:28vh;', 'data-3900': 'opacity: 1; position:fixed; left:40%; top:22vh;','data-4100': 'opacity: 0.5; top:-50vh;'}}>
						<div className='caps'></div>
					</Parallax>

					<Parallax data={{'data-3300': 'opacity:0;', 'data-3400': 'opacity: 1; position:fixed; left:45%; top:70vh;', 'data-3700': 'opacity: 1; position:fixed; left:45%; top:40vh;', 'data-3900': 'opacity: 1; position:fixed; left:45%; top:39vh;','data-4100': 'opacity: 0.5; top:-40vh;'}}>
						<div className='textbooks'></div>
					</Parallax>



					{/*	Scene-6	*/}


					<Parallax data={{'data-4000': 'opacity: 0;', 'data-4100': 'opacity: 1; position:fixed; top:40vh; left:40%; width: 20%;','data-4200': 'opacity: 0; top:-50vh;'}}>
						<div><h2>Smart Contract gets executed, and all its details get recorded into Ethereum blockchain, <mark>an immutable distributed ledger</mark></h2></div>
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

				</React.Fragment>
				<div style={{ height: '5600px' }} />
			</ParallaxB>
			</div>
    );
  }
}




export default Howitworks;




