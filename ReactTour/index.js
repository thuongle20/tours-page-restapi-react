import React from "react";
import ReactDOM from "react-dom";
import GuestApp from "./guest/GuestApp.js"
import CustomerApp from "./cust/CustomerApp.js"
import AdminApp from "./admin/AdminApp.js"
import Tours from "./Tours.js"
import TourList from "./Tours.json"




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", display:"guestHome",user:{}}; 
    }
	//update user role
	updateUser(data){
		let newData={role: data.role, display: data.display, user:data.user};
		this.setState(newData);
	}
	 // Renders component based on current state and props
    render() {
		let flyDiv=<div className="marquee"> <p> Fly The Moon,  the world leading space-tour company</p></div>;
		
		switch(this.state.role){
			//guest screens
			case "guest":
					
						return <GuestApp updateUser={this.updateUser.bind(this)} display={this.state.display} />;
						break;
			
			//customer screens	
			case "customer":
						
						return <CustomerApp updateUser={this.updateUser.bind(this)} display={this.state.display} />;
						break;
						
			//admin screens
			case "admin":
						 
						return <AdminApp updateUser={this.updateUser.bind(this)} display={this.state.display}/>;
						break;
						
			
		   default: 
						return <div><p> Something went wrong</p></div>;
		}
	   
    }
	
}


	
ReactDOM.render(<App />, document.getElementById("root"));






