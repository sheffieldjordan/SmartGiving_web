import React, { Component } from 'react';

import { ParallaxProvider, Parallax } from 'react-skrollr';
import { Background } from 'react-parallax';

import '../how_it_works/css/style.css';
import mountains_bkg1 from '../how_it_works/images/mountains_bkg1.svg';
import city_bkg from '../how_it_works/images/city_bkg.svg';

class Howitworks extends Component {
// @Natasha write your code here
  render() {
    return (

			<ParallaxProvider>
				{/* Scene 1 */}
				<Parallax data={{'data-start': 'left: 40%; opacity: 1;','data-top-top': 'opacity: 0;'}}>
					<div>Scroll to see the story</div>
				</Parallax>

				<Parallax data={{'data-start': 'opacity: 1;','data-1000': 'opacity: 0;'}}>
				<Background> <img src={mountains_bkg1} alt="mountains"/>

					<Parallax data={{'data-10': 'opacity: 1; position:fixed; top:30%;','data-500': 'opacity: 0; top:-50%;'}}>
						<div className='carolyn'></div>
					</Parallax>

					<Parallax data={{'data-10': 'opacity: 1; position:fixed; left:10%; top:30%;','data-500': 'opacity: 0; top:-50%;'}}>
						<p>Meet Carolyn</p>
					</Parallax>

					<Parallax data={{'data-3': 'opacity: 0;', 'data-20': 'opacity: 1; position:fixed; left:10%; top:60%; width:20%;','data-500': 'opacity: 0; top:-50%;'}}>
						<div>She runs a free childcare for refugee families in the outskirts of Bogota, Colombia. <div>Currently, it accounts for 185 kids.</div></div>
					</Parallax>

					<Parallax data={{'data-35': 'opacity: 0;', 'data-50': 'opacity: 1; position:fixed; left:50%; top:50%;','data-500': 'opacity: 0; top:-50%;'}}>
						<div className='kids'></div>
					</Parallax>

					<Parallax data={{'data-35': 'opacity: 0; width: 25%;', 'data-50': 'opacity: 1; position:fixed; left:50%; top:30%;','data-500': 'opacity: 0; top:-50%;'}}>               
						<div> Every day, her pupils are in need of nutritious and safe food, clean water, clothing, textbooks, and toys</div>
					</Parallax>			
				</Background>
				</Parallax>

				{/*	Scene-2	*/}		

				<Parallax data={{'data-1000': 'opacity: 1;','data-2000': 'opacity: 0;'}}>
				<Background className='scene-2'> <img src={city_bkg} alt="city"/>

					<Parallax data={{'data-500': 'opacity: 0;', 'data-800': 'opacity: 1; position:fixed; top:30%;','data-1500': 'opacity: 0; top:-50%;'}}>
						<div className='donna'></div>
					</Parallax>

					<Parallax data={{'data-500': 'opacity: 0;','data-800': 'opacity: 1; position:fixed; left:10%; top:30%;','data-1500': 'opacity: 0; top:-50%;'}}>
						<p>Meet Donna</p>
					</Parallax> 

					<Parallax data={{'data-500': 'opacity: 0;', 'data-900': 'opacity: 1; position:fixed; left:10%; top:45%; width: 20%;','data-1500': 'opacity: 0; top:-50%;'}}>
						<div> She works in New York City and wants to make an in-kind - non-monetary - donation to Carolyn's charity...</div>
					</Parallax>

					<Parallax data={{'data-500': 'opacity: 0;','data-900': 'opacity: 1; position:fixed; left:10%; top:60%; width: 20%;','data-1500': 'opacity: 0; top:-50%;'}}>
						<div>...so, that it would be as easy as shopping online, and as traceable as a local delivery</div>
					</Parallax> 

					<Parallax data={{'data-500': 'opacity: 1; position: fixed; right:-10%; top:60%;', 'data-900': 'opacity: 1; right:50%; top:40%;','data-1500': 'opacity: 0; top:-50%;'}}>
					<div className='delivery'></div>
					</Parallax>

				</Background>
				</Parallax>

			</ParallaxProvider>

    );
  }



}


export default Howitworks;

