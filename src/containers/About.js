import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../components/NavBar';
import { List, Image} from 'semantic-ui-react';
import Nat from '../images/Nat.png';
import Morgan from '../images/Morgan.png';
import Liz from '../images/lizlee.png';



class About extends Component {
// @Natasha write your code here
  render() {
    return (

		<div>
			<NavBar title="About us"/>			
			<div className="page-container">
				<List>
					<List.Item>
						<Image src={Morgan} size='small' circular verticalAlign='middle'/>
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/morgansjordan/'>Morgan Jordan</List.Header>
							<List.Description>Last seen watching stars 10 hours ago.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Nat} size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/gnicho/'>Gabriel Nicholas</List.Header>
							<List.Description>Last seen watching stars 10 hours ago.</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<Image src={Nat}  size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/selberthely/'>Selenne Berthely</List.Header>
							<List.Description>Last seen in South Hall just now.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Liz}  size='small' circular verticalAlign='middle' />
						<List.Content verticalAlign='middle'>
							<List.Header as='a' href='https://www.linkedin.com/in/lizlee0225/'>Liz (Hyemin) Lee</List.Header>
							<List.Description>Last seen in South Hall just now.</List.Description>
						</List.Content>
					</List.Item>

					<List.Item>
						<Image src={Nat}  size='small' circular verticalAlign='middle' />
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

