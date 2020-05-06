
import React, {Component} from 'react';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './Component/TodoForm.js';




class App extends Component {
  constructor(){
	super();
	this.state = {
	todos
	}
	
	this.handleAddTodo = this.handleAddTodo.bind(this);

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
	 
}
		
		
	
}


export default App;
