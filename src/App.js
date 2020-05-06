
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

handleAddTodo(todo){
	this.setState({
		todos: [...this.state.todos, todo]
	})
		
}

RemoveTodo(index){
	this.setState({
		todos: this.state.todos.filter((todos, i)=> {
			return i !== index
		})
	})
	
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
	<div className="App">
		<div className="App-Nav">
			<nav>
			La Liga
			
			</nav>	
		</div>
		
		<div className="container">	
		  	  <h3 className="mt-3"> Vista 1</h3>
		  <div className="row mt-4">
			{todos} 
		  </div>
		</div>
		
		<div className="container">	
		   <h3 className="mt-5"> Vista 2</h3>
		<TodoForm/>
			
		</div>
		
		
		
	</div>
  )}
		
		
	
}


export default App;
