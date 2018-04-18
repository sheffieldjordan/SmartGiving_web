import React, { Component } from 'react';


import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Footer from '../components/Footer';
import ScrollAllWayUp from '../components/ScrollAllWayUp';

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

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; top:200vh; background-size: 61% 61%;', 'data-center-top': 'opacity: 1; left:50%; top:92vh;','data-top-bottom': 'opacity: 0; transform:translateY(-50vh);'}}>
						<div className='kids'></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; width: 20%; top:100vh;', 'data--100-bottom': 'opacity: 1; left:10%; top:70vh;','data-top-bottom': 'opacity: 0; transform:translateY(-10vh);'}}>               
						<div><h3> Every day, her pupils are in need of nutritious and safe food, clean water, clothing, textbooks, and toys.</h3></div>
					</Parallax>			

				{/*Scene-2*/}	

					<Parallax data={{'data-80p': 'opacity: 1; position:absolute; top:180vh; left:35%;', 'data-110p': 'opacity:1;', 'data-top-bottom': 'opacity: 1; transform:translateY(-50vh);'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 1; position:absolute; left:10%;', 'data-110p': 'opacity: 1;  top:140vh;', 'data-top-bottom': 'opacity: 1; transform:translateY(-10vh);'}}>
						<h2>Meet Donna</h2>
					</Parallax> 

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; top:230vh;', 'data-110p': 'opacity: 1;  left:10%; top:175vh; width: 20%;','data-top-bottom': 'opacity: 1; transform:translateY(-30vh);'}}>
						<div><h3>She works in New York City and wants to Donate goods to Aida's charity...</h3></div>
					</Parallax>

					<Parallax data={{'data-bottom-top': 'opacity: 0; position:absolute; left:10%; top: 220vh','data-120p': 'opacity: 1; top:192vh; width: 20%;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h3>...so, that it would be as easy as shopping online, and as traceable as a local delivery</h3></div>
					</Parallax> 

					<Parallax data={{'data-110p': 'opacity: 1; position: absolute; right:-10%; top:177vh;', 'data-120p': 'opacity: 1; right:50%; top:177vh;','data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div className='delivery'></div>
					</Parallax>

				{/*	Scene-3	*/}		


					<Parallax data={{'data-150p': 'opacity: 0; position: absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top: 200vh;','data-170p': 'opacity: 1;','data-top-bottom': 'opacity: 0;'}}>
						<div><h1>Introducing SmartGiving</h1></div>
					</Parallax>

					<Parallax data={{'data-180p': 'opacity: 0; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top: 215vh; width: 40%; text-align:justify;', 'data-190p': 'opacity: 1;','data-top-bottom': 'opacity: 0;'}}>
						<div><h2>A blockchain-based online <mark>marketplace</mark> where anyone can help a small charity directly by paying their check.</h2></div> 
					</Parallax> 

					<Parallax data={{'data-190p': 'opacity: 0; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top: 240vh; width: 40%; text-align:justify;', 'data-200p': 'opacity: 1;' ,'data-top-bottom': 'opacity: 0;'}}>
						<div><h2>So a donor always knows what her money buys.</h2></div>
					</Parallax> 

					<Parallax data={{'data-200p': 'opacity: 0; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top: 250vh; width: 40%; text-align:justify;', 'data-210p': 'opacity: 1;','data-top-bottom': 'opacity: 0;'}}>
						<div><h2>And the price is always reasonable thanks to multiple offers from merchants.</h2></div>
					</Parallax> 


				{/*	Scene-4	*/}

					<Parallax data={{'data-225p': 'opacity: 0; position: absolute; top: 300vh; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-230p': ' opacity: 1; top:290vh;', 'data-330p': 'top:330vh;', 'data-top-bottom': 'opacity: 0;'}}>
						<div className='triangle'></div>
					</Parallax>

					<Parallax data={{'data-240p': 'opacity: 0; position: absolute; left:-10%; top:320vh; width: 20%', 'data-250p': 'opacity: 1; left:25%; top:310vh;', 'data-330p': 'top: 350vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div className='carolyn'></div>
					</Parallax>

					<Parallax data={{'data-245p': 'opacity:0; position:absolute; left:12%; width:10%; top: 325vh;', 'data-260p': 'opacity:1;', 'data-330p': 'top:360vh;', 'data-top-bottom': 'opacity: 0;  transform:translateY(-30vh);'}}>
						<div><h3>Step 1.&ensp;Aida places a request for 20 textbooks</h3></div>
					</Parallax>

					<Parallax data={{'data-255p': 'opacity:1; position: absolute; left:110%; top:315vh; width: 20%', 'data-265p': 'opacity: 1; left:65%;', 'data-330p': 'top: 350vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-260p': 'opacity:0; position: absolute; left: 78%; top: 330vh;  width:10%;', 'data-275p': 'opacity: 1;', 'data-330p': 'top:360vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
						<div><h3>Step 2.&ensp;Donna pledges a $200 donation to meet this need</h3></div>
					</Parallax>

					<Parallax data={{'data-270p': 'opacity:1; position: absolute; right:-50%; top:348vh;', 'data-285p': 'right: 55%;' ,'data-320p': 'top: 365vh; right: 240%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-284p': 'opacity:0; position: absolute; top: 333vh; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-285p': 'opacity:1;', 'data-287p': 'opacity:0.5; top: 308vh;', 'data-295p': 'opacity:0;'}}>
					<div className='coin200'></div>
					</Parallax>

					<Parallax data={{'data-275p': 'opacity:1; position: absolute; right:-40%; top:351vh;', 'data-292p': 'right:55%' , 'data-325p': 'top: 366vh; right: 160%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-291p': 'opacity:0; position: absolute; top: 336vh; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-292p': 'opacity:1;', 'data-295p': 'opacity:0.5; top: 308vh;', 'data-301p': 'opacity:0; top: 307vh;'}}>
					<div className='coin190'></div>
					</Parallax>

					<Parallax data={{'data-280p': 'opacity:1; position: absolute; right:-30%; top:352vh;', 'data-299p': 'right:55%' ,'data-330p': 'top: 367vh; right: 110%;'}}>
					<div className='store'></div>
					</Parallax>

					<Parallax data={{'data-298p': 'opacity:0; position: absolute; top: 339vh; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-299p': 'opacity:1;', 'data-326p': 'opacity:0.7; top: 333vh;'}}>
					<div className='coin180'></div>
					</Parallax>


					<Parallax data={{'data-275p': 'opacity:0; position:absolute; left: 50%; margin-right: -50%; top: 300vh; transform: translateX(-50%);', 'data-285p': 'opacity: 1;  top:295vh;', 'data-320p': 'top:320vh;', 'data-top-bottom': 'opacity: 0;'}}>
					<div><h3>Step 3.&ensp;A pool of merchants offer their bids</h3></div>
					</Parallax>


					<Parallax data={{'data-315p': 'opacity:0; width: 30%; display: flex; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top: 375vh;', 'data-320p': 'opacity: 1;  top:365vh;', 'data-top-bottom': 'opacity: 0; transform:translateY(-30vh);'}}>
					<div>
					<div style={{float:'left', width:'70%', height: '100%', display: 'flex', alignItems: 'center'}}> <h3> Step 4.&ensp;<i>Mercado Colombia</i> bids $180 and wins the right to deliver 20 textbooks to Aida </h3></div>
					<div className='books' style={{float:'right', width:'30%', marginTop: 'auto'}}></div>
					</div>
					</Parallax>	

					{/*	Scene-5	*/}


					<Parallax data={{'data-370p': 'opacity: 1; position:absolute; top: 430vh; left: 50%; margin-right: -50%; transform: translateX(-50%)', 'data-top-bottom': 'opacity: 0,'}}>
						<div className='kids'></div>
					</Parallax>

					<Parallax data={{'data-390p': 'opacity:0; top: 370vh; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%)', 'data-410p': 'opacity:1; top:428vh;' ,'data-top-bottom': 'opacity: 0;'}}>
						<div className='caps'></div>
					</Parallax>

					<Parallax data={{'data-390p': 'opacity:0; position:absolute; top: 465vh; left: 50%; margin-right: -50%; transform: translateX(-50%)', 'data-410p': 'opacity: 1; top: 445vh', 'data-top-bottom': 'opacity: 0'}}>
						<div className='textbooks'></div>
					</Parallax>



					{/*	Scene-6	*/}


					<Parallax data={{'data-460p': 'opacity: 0; width: 40%; text-align:justify; top:510vh; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-470p': 'opacity: 1; top:500vh;','data-530p': 'opacity: 0;'}}>
						<div><h2>Smart Contract gets executed, and all its details get recorded into Ethereum blockchain, <mark>an immutable distributed ledger</mark></h2></div>
					</Parallax>

					<Parallax data={{'data-465p': 'opacity: 0; width: 40%; text-align:justify; top:510vh; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-480p': 'opacity: 1; top:530vh;', 'data-530p': 'opacity: 0; '}}>
						<div><h2>it allows for <mark>transparency</mark>, <mark>traceability</mark>, <mark>and security </mark></h2></div> 
					</Parallax> 

					<Parallax data={{'data-520p': 'opacity: 0; top: 600vh; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-525p': 'opacity: 1; top: 570vh;','data-580p': 'opacity: 0;'}}>
						<div><h2>but wait...</h2></div>
					</Parallax> 

					<Parallax data={{'data-535p': 'opacity: 0; top: 600vh; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%);', 'data-545p': 'opacity: 1; top: 590vh;','data-595p': 'opacity: 0;'}}>
						<div><h1>where did the $20 go?</h1></div>
					</Parallax>


					{/*	Scene-7, final */}


					<Parallax data={{'data-600p': 'opacity: 0;', 'data-610p': 'opacity: 1; position:absolute; top:615vh; left:28%;','data-top-bottom': 'opacity: 0;'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-600p': 'opacity: 0;', 'data-610p': 'opacity: 1; position:absolute; top:625vh; left:48%; width: 28%; text-align:justify;','data-top-bottom': 'opacity: 0;'}}>
						<div><h3>Good eye! Donna received her change of $20 once the contract was executed.</h3></div>
					</Parallax>

					<Parallax data={{'data-610p': 'opacity: 0;', 'data-620p': 'opacity: 1; position:absolute; top:645vh; left:48%; width: 28%; text-align:justify;','data-top-bottom': 'opacity: 0;'}}>
						<div><h3>And she is already considering pledging this money toward another request.</h3></div>
					</Parallax>

					<Parallax data={{'data-650p': 'opacity: 0;', 'data-660p': 'opacity: 1; position:absolute; left: 50%; margin-right: -50%; transform: translateX(-50%); top:700vh;'}}>
						<div><h1>The End</h1></div>
					</Parallax>


				</React.Fragment>

				<div style={{ height: '5600px' }} />
				
				<div className='ScrollAllWayUpStyle'><ScrollAllWayUp /></div>
			</ParallaxB>
			

			<Footer />
			</div>
    );
  }
}




export default Howitworks;




