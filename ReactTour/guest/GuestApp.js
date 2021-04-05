import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home.js"
import About from "../About.js"
import SignupForm from "../Signup.js"
import LoginForm from "./Login.js"
import Tours from "../Tours.js"
import TourList from "../Tours.json"


class GuestApp extends React.Component {
		constructor(props) {
        super(props);
        this.state = {updateUser: props.updateUser, display:props.display}; 
    }
	//guest menu bar event handling
	loginHandler(event){
		this.setState({display:"login"});
	}
	
	guestAboutHandler(event){
		this.setState({display:"guestAbout"});
	}
	guestHomeHandler(event){
		this.setState({display:"guestHome"});
	}
	guestToursHandler(event){
		this.setState({display:"guestTours"});
	}
	signupHandler(event){
		this.setState({display:"signUp"});
	}
	
	render(){	
		//guest menu bar
		let guestMenuBar=<nav> <ul className="Menu" ><li>
			<a className="nav-link" onClick={this.guestHomeHandler.bind(this)}>Home</a></li>
			<li><a className="nav-link" onClick={this.guestToursHandler.bind(this)}>Tours</a></li><li>
			<a className="nav-link" onClick={this.loginHandler.bind(this)}>Log in</a></li><li>
			<a className="nav-link" onClick={this.signupHandler.bind(this)}>Sign up</a></li><li >
			<a className="nav-link" onClick={this.guestAboutHandler.bind(this)}>About Us</a></li></ul></nav>;
	
		switch(this.state.display){
			case "guestHome":
						return <div>{guestMenuBar}<Home /></div>;
						break;
			case "guestAbout": 
						return <div>{guestMenuBar}<About /></div>;
						break;
			case "signUp": 
						return <div>{guestMenuBar}<h3> Signup: Not Implemented yet</h3></div>;
						break;
			case "guestTours": 
						let cols=["Name", "Type", "Date"];
						return <div>{guestMenuBar}<Tours tours={TourList} renderedCols={cols} /></div>;
						break;
			case "login": 
						
						return <div>{guestMenuBar}<LoginForm updateUser={this.props.updateUser.bind(this)} /></div>;
						break;
						
			default:    return <div>{guestMenuBar}<Home /></div>;
		}
	}
		
}

export default GuestApp;