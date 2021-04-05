import React from "react";
import ReactDOM from "react-dom";
import Tours from "../Tours.js"
import TourList from "../Tours.json"



class LoginForm extends React.Component {
		constructor(props) {
        super(props);
        this.state = {updateUser:props.updateUser, email: "ballsy1959@live.com", txtpassword:"33IDmdCo", role:"guest",hasErrors:false}; 
    }
	componentDidUpdate() {
		
  }

	updateEmail(event)
	{
		this.setState({email: event.currentTarget.value});
	}
	updatePassword(event)
	{
		this.setState({txtpassword: event.currentTarget.value});
	}
	updateUser(){
		let loginUser={email:this.state.email,password:this.state.txtpassword};
		console.log(loginUser);
		let options={method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(loginUser)
					};
		fetch('login',options).then(response=> response.json()).then(resUser=>{this.setState({role:resUser.role});let newDisplay="guestHome";
		
																				switch (this.state.role) {
																					case "guest": 
																						newDisplay="guestHome";
																						break;
																					case "customer":
																						newDisplay="customerHome";
																						break;
																					case "admin":
																						newDisplay="adminHome";
																						break;
																					default: 
																						newDisplay="guestHome";
																				}
																				
																				let newUserData={role: this.state.role, display: newDisplay, user:resUser};
																				this.props.updateUser(newUserData);
																				console.log(newUserData);console.log(resUser)})
																.catch(() => this.setState({ hasErrors: true }));
	
		
	}
	render(){
		return <div className="LoginForm"><label >Email</label><input type="text" name="Email" value={this.state.email} onChange={this.updateEmail.bind(this)} /><label>Password</label>
		<input type="password" name="Password" value={this.state.txtpassword} onChange={this.updatePassword.bind(this)} />
		<button onClick={this.updateUser.bind(this)}>Login</button></div>;
		}
					 
        
	
}

export default LoginForm;