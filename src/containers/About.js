import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { List, Image, Divider } from 'semantic-ui-react';
import Nat_img from '../images/Nat.png';



class About extends Component {
// @Natasha write your code here
  render() {
    return (

		<div>
			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>About us</h1>
				</Toolbar>
			</AppBar>
			
			<div className="page-container">
				<List>
					<List.Item>
						<Image src={Nat_img} size='small' circular verticalAlign='middle'/>
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/morgansjordan/'>Morgan Jordan</List.Header>
							<List.Description>Last seen watching stars 10 hours ago.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Nat_img} size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/gnicho/'>Gabriel Nicholas</List.Header>
							<List.Description>Last seen watching stars 10 hours ago.</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<Image src={Nat_img}  size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/selberthely/'>Selenne Berthely</List.Header>
							<List.Description>Last seen in South Hall just now.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Nat_img}  size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/lizlee0225/'>Liz (Hyemin) Lee</List.Header>
							<List.Description>Last seen in South Hall just now.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Nat_img}  size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/natalia-timakova/'>Natalia Timakova</List.Header>
							<List.Description>Last seen in South Hall just now.</List.Description>
						</List.Content>
					</List.Item>				
				</List>
			</div>
		</div>
    )
  }
}

export default About;

