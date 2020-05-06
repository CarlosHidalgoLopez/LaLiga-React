
import React, {Component} from 'react';
import './App.css';
import logo from './LaLiga.png';
import TodoForm from './Component/TodoForm.js'
import Vista1 from './Component/Vista1.js'
import {BrowserRouter, Route, Link } from 'react-router-dom';




class App extends Component {


  render(){

	return(
	<BrowserRouter>
	<div className="App">
		<div className="App-Nav">
			<nav>
			<div className="App-NavText d-inline">
			 <span> La Liga</span>
			</div>
			<div className="App-NavMenu d-inline">
			<Link to="/Vista1"> <span className="ml-5 d-inline"> Acceder Vista 1</span></Link>
			<Link to="/TodoForm"> <span className="ml-3 d-inline"> Acceder Vista 2</span></Link>
			</div>
			</nav>
		</div>

		<div className="container">
			<div className="ImgLogo">
			<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Route path="/Vista1" exact component ={Vista1} />
			<Route path="/TodoForm" exact component ={TodoForm} />


		</div>

	</div>

	</BrowserRouter>
  )}



}


export default App;
