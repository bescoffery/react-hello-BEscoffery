import React from "react";
import Profile from "./profile"; 
import Soccer from "./Soccer";

const name = "Britney";
const team1 = "Manchester"
const team2 ="Real Madrid"
const team3 = "Chelsea"

const myArray = ["names", "ronaldo", "messi"]

const Home = () =>{
	return(
		<div>
			{myArray.map(
				(name)=> {
					return(
						<div>
							{name}
						</div>
					)
				}
			)}
			<h1>Hi, {name}</h1>
			<h2>Who is the better team?</h2>
			<div class="Soccer">
				<Soccer 
				team1Prop = {team1} 
				team2Prop = {team2} 
				team3Prop = {team3}/>

			</div>
		</div>
	)
}

export default Home