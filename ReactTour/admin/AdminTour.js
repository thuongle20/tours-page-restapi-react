import React from "react";
import ReactDOM from "react-dom";


class AdminTour extends React.Component {
		constructor(props) {
			super(props);
			this.state = {tourList:props.tourList, addDate:"2020/12/30", addName:"Explore The Moon", addType:"Week", hasErrors:false}; 
		}
		
	addNewTour(){
		let newType=this.state.addType;
		let newName=this.state.addName;
		let newDate=this.state.addDate;
		
		let tour={type:newType, name:newName, date:newDate};
		
		let options={method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(tour)
					};
		fetch('tours/newtour',options);//.then(response=> response.json()).then(tours=>{this.setState({tourList:tours});console.log(tours)})
																//.catch(() => this.setState({ hasErrors: true }));
																
		fetch('tours').then(response=> response.json()).then(tours=>{this.setState({tourList:tours});console.log(tours)}).catch(() => this.setState({ hasErrors: true }));
		
		
	}
	updateDate(event){
		this.setState({addDate: event.currentTarget.value});
	}
	updateName(event){
		this.setState({addName: event.currentTarget.value});
	}
	updateType(event){
		this.setState({addType: event.currentTarget.value});
	}
	deleteTour(tour){
		
		//let delTour={tourid:tour._id};
		
		let options={method: 'delete',
					headers: {'Content-Type': 'application/json'},
				//	body: JSON.stringify(delTour)
					};
		fetch(`tours/${tour._id}`,options);//en(response=> response.json()).then(tours=>{this.setState({tourList:tours});console.log(tours)})
																//.catch(() => this.setState({ hasErrors: true }));
																
		fetch('tours').then(response=> response.json()).then(tours=>{this.setState({tourList:tours});console.log(tours)}).catch(() => this.setState({ hasErrors: true }));
		//this.state.tourList.splice(i, 1);	
		
		//this.setState({tourList: this.state.tourList});
	}
	render (){
		let that=this;
		let rows = this.state.tourList.map(function(t,i){
											return <tr key={i}><td><button onClick={that.deleteTour.bind(that,t)}>Delete</button></td><td>{t.name}</td><td>{t.type}</td><td>{t.date}</td></tr>;
										});
		let tbContent = <table id="tours">
					<thead><tr><th></th><th>{this.props.renderedCols[0]}</th><th>{this.props.renderedCols[1]}</th><th>{this.props.renderedCols[2]}</th></tr>
					</thead>
					<tbody>{rows}</tbody>
					</table>;
					
		let addTourCP = <fieldset className="ControlPanel"><legend>Add Tour(s)</legend><label>Type</label><select name="type" value={this.state.addType} onChange={this.updateType.bind(this)}>
			<option value="Month">Month</option>
			<option value="Week">Week</option> </select><label>Name</label>
			<input type="text" name="name" value={this.state.addName} onChange={this.updateName.bind(this)}/><label>Date(s)</label>
			<input type="date" name="date" value={this.state.addDate} onChange={this.updateDate.bind(this)}/> <button onClick={this.addNewTour.bind(this)}>Add Tour</button ></fieldset>;
		
		return <div>{addTourCP}{tbContent}</div>;
		
	}
}
export default AdminTour;


