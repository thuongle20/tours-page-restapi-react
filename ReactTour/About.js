import React from "react";
import ReactDOM from "react-dom";

import moon from "./images/Moon.jpg";
import moon1 from "./images/Moon1.jpg";
// Use in JSX
let moonImage = <img src={moon}/>;
let moonImage1 = <img src={moon1}/>;

function About(props)  {
    
		
		//let flyDiv=<div className="marquee"> <p> Fly The Moon,  the world leading space-tour company</p></div>;
	
		let mMain=<main><br></br><h4>About Moon Tours  </h4><h4>Brought to you by ja9848</h4><h4>Moon Tour webpage is my practice of using React DOM to generate HTML page </h4>
						<h4>The webpage contains multiple components such as login , signup, Tours information, Tours registration</h4>
		</main>;
	  
       return mMain;
     
  
}

export default About;