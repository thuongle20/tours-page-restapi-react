import React from "react";
import ReactDOM from "react-dom";

import moon from "./images/Moon.jpg";
import moon1 from "./images/Moon1.jpg";
// Use in JSX
let moonImage = <img src={moon}/>;
let moonImage1 = <img src={moon1}/>;

function Home(props)  {
    
		
		let flyDiv=<div className="marquee"> <p> Fly The Moon,  the world leading space-tour company</p></div>;
	
		let mMain=<main><h2>Fly The Moon, The next level of adventures </h2> {moonImage}
			<h2> Experience our unique way to explore the Moon </h2> <h2> {moonImage1} </h2>
			<section>Our tour starts in the first week every month. With the latest models of SpaceX spaceship, you will have the most spectacular view of the Moon and experience a safe yet exciting space trip ever.
			</section> 	<section> The moon flight is scheduled to launch after SpaceX flies NASA astronauts to the International Space Station as a part of the Commercial Crew Program. Right now, SpaceX is planning to make an uncrewed flight of its crew-carrying Dragon spacecraft to the space station this year, and its first crewed flights are expected to happen in mid-2018, according to Musk. (However, a recent report suggests that those dates may be pushed back.)
			</section></main>;
	  
       return <div> {flyDiv}{mMain}</div>;
     
  
}

export default Home;