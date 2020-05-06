
import React, { Component } from 'react';
import { todosVista2 } from '../todosVista2.json';

class TodoForm extends Component {

 constructor(){
	super();
	this.state = {
	todosVista2
	}
	
	}
  
  RemoveTodo(index){
	this.setState({
		todosVista2: this.state.todosVista2.filter((todosVista2, i)=> {
			return i !== index
		})
	})
	
}

  
  
 render(){

	const todosVista2 = this.state.todosVista2.map((todo, i) => {
		return(
	    <div className="col-md-4">
		
		  <div className="card mt-4 mb-2">
			  <div className="card-header">
			  <h3> {todo.id}</h3> 
			  </div>
			  <div className="card-body">
			  {todo.email}
			  </div>
			  <div className="card-body">
			  {todo.first_name}
			  </div>
			  <p>
			  {todo.last_name}
			  </p>
			  <div className="card-footer">
			  <button 
			   className="btn btn-danger"
			   onClick={this.RemoveTodo.bind(this, i)}>
			   Eliminar
			  </button>
			  </div>
		
			  
		 </div>
		</div>
		
		)
		
	})
		return(
	    <div className="row mt-4">
		{todosVista2}
		</div>
		
		)
		
	
	}

}

export default TodoForm;

