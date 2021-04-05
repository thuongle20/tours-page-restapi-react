import React from "react";
import ReactDOM from "react-dom";
import ToursList from "./Tours.json"

class Tours extends React.Component {
		constructor(props) {
			super(props);
			this.state = {tours:[], hasErrors:false}; 
		}
		
componentDidMount() {
		fetch('tours').then(response=> response.json()).then(data=>this.setState({tours:data}))
		.catch(() => this.setState({ hasErrors: true }));
  }

	

render() {
	let tours;
	//let tbContent=<p>This is a test</p>;
	
	
	let cols=["Name", "Type", "Date"];
	let rows = this.state.tours.map(function(t){
									return <tr key={t.name}><td>{t.name}</td><td>{t.type}</td><td>{t.date}</td></tr>;});

	let tbContent = <table id="tours">
					<thead><tr><th>{cols[0]}</th><th>{cols[1]}</th><th>{cols[2]}</th></tr>
					</thead>
					<tbody>{rows}</tbody>
					</table>;
	return tbContent;

};
}
export default Tours;