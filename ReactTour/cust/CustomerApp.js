import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home.js"
import About from "../About.js"
import MyTours from "../MyTours.js"
import GuestApp from "../guest/GuestApp.js"
import Tours from "../Tours.js"
import TourList from "../Tours.json"		
		
		
class CustomerApp extends React.Component {
		constructor(props) {
        super(props);
        this.state = {updateUser: props.updateUser, display:props.display,hasErrors:false}; 
		
    }
	
	//customer menu bar event handling
	customerHomeHandler(event){
		this.setState({display:"customerHome"});
	}
	customerLogoutHandler(event){
		fetch('logout').then(response=>{ let newData={role: "guest", display: "guestHome", user:{}};
										 this.props.updateUser(newData);})
						.catch(() => this.setState({ hasErrors: true }));
	}
	customerAboutHandler(event){
		this.setState({display:"customerAbout"});
	}
	customerInfoHandler(event){
		this.setState({display:"customerMyTours"});
	}
	customerNewTourHandler(event){
		this.setState({display:"customerNewTours"});
	}
	
	
	render() {
	
		let customerMenuBar=<nav> <ul className="Menu" ><li>
			<a className="nav-link" onClick={this.customerHomeHandler.bind(this)}>Home</a></li><li>
			<a className="nav-link" onClick={this.customerNewTourHandler.bind(this)}>New Tours</a></li><li>
			<a className="nav-link" onClick={this.customerInfoHandler.bind(this)}>Your Tours</a></li>
			<li><a className="nav-link" onClick={this.customerLogoutHandler.bind(this)}>Log out</a></li><li>
			<a className="nav-link" onClick={this.customerAboutHandler.bind(this)}>About Us</a></li></ul></nav>;
			
		switch(this.state.display){
			case "customerHome":
						return <div>{customerMenuBar}<Home /></div>;
						break;
			case "customerAbout": 
						return <div>{customerMenuBar}<About /></div>;
						break;
			case "customerMyTours": 
						return <div>{customerMenuBar}<MyTours user="UserName000"/></div>;
			case "customerNewTours":
						let cols=["Name", "Type", "Date"];
						return <div>{customerMenuBar}<Tours tours={TourList} renderedCols={cols} /></div>;
			
			default:	return <div>{customerMenuBar}<Home /></div>;
						break;
			
	
		
		}
    }    
	
}



export default CustomerApp;