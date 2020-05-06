
import React, {Component} from 'react';
import '../App.css';
import { todos } from '../todos.json';





class Vista1 extends Component {
  constructor(){
	super();
	this.state = {
	todos
	}
	

}


  render(){
	const todos = this.state.todos.map((todo, i) => {
		return(
	    <div className="col-md-4">
		  <div className="card mt-4">
			  <div className="card-header">
			  <h3> {todo.id}</h3> 
			  </div>
			  <div className="card-body">
			  {todo.first_name}
			  </div>
			  <p>
			  {todo.last_name}
			  </p>
			  
		 </div>
		</div>
		
		)
		
	})
	
	return(
	    <div className="row mt-4">
		{todos}
		</div>
		
		)
	 
}
		
		
	
}


export default Vista1;
