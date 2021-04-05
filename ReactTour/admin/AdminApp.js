import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home.js"
import About from "../About.js"
import GuestApp from "../guest/GuestApp.js"
import AdminTour from "./AdminTour.js"
import TourList from "../Tours.json"



class AdminApp extends React.Component {
		constructor(props) {
        super(props);
        this.state = {updateUser: props.updateUser, display:props.display,tourList:[], hasErrors:false}; 
		
    }
//admin menu bar event handling
	componentDidMount(){
		fetch('tours').then(response=> response.json()).then(tours=>{this.setState({tourList:tours});console.log(tours)}).catch(() => this.setState({ hasErrors: true }));
		
	}
		
	adminInfoHandler(event){
		this.setState({display:"adminAccountInfo"});
	}
	manageTourHandler(event){
		this.setState({display:"adminManageTours"});
	}
	adminAboutHandler(event){
		this.setState({display:"adminAbout"});
	}
	logoutHandler(event){
		fetch('logout').then(response=>{ let newData={role: "guest", display: "guestHome", user:{}};
										 this.props.updateUser(newData);})
						.catch(() => this.setState({ hasErrors: true }));
		
	}
		
	render(){
			let adminMenuBar=<nav> <ul className="Menu" ><li>
					<a className="nav-link" onClick={this.manageTourHandler.bind(this)}>Manage Tours</a></li><li>
					<a className="nav-link" onClick={this.adminInfoHandler.bind(this)}>Admin Account</a></li><li>
					<a className="nav-link" onClick={this.logoutHandler.bind(this)}>Log out</a></li><li >
					<a className="nav-link" onClick={this.adminAboutHandler.bind(this)}>About Us</a></li></ul></nav>;
					
			switch(this.state.display){
				case "adminAccountInfo":
							return <div>{adminMenuBar}<Home /></div>;
							break;
				case "adminHome":
							return <div>{adminMenuBar}<Home /></div>;
							break;
				case "adminAbout": 
							return <div>{adminMenuBar}<About /></div>;
							break;
				case "adminManageTours": 
							let cols=["Name", "Type", "Date"];
							let addD="00/00/2020";
							let addN="New Tour";
							let addT="Week";
							
				return <div>{adminMenuBar}<AdminTour tourList={this.state.tourList} renderedCols={cols} addDate={addD} addName={addN} addType={addT} /></div>;
							break;
						
				default:	return <div>{adminMenuBar}<Home /></div>;
							break;
						
		}		
						
					
	}
}

export default AdminApp;