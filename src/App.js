
import React, {Component} from 'react';
import './App.css';
import logo from './LaLiga.png';







class App extends Component {
  

  render(){
	 
	return(
	<div className="App">
		<div className="App-Nav">
			<nav>
			<div className="App-NavText d-inline">
			 <span> La Liga</span>
			</div>
			<div className="App-NavMenu d-inline">	
			 <span className="ml-5 d-inline"> Acceder Vista 1</span>
			 <span className="ml-3 d-inline"> Acceder Vista 2</span>
			</div>	
			</nav>	
		</div>
		
		<div className="container">	
			<div className="ImgLogo">	
			<img src={logo} className="App-logo" alt="logo" />
		
			</div>
		</div>
	
		
		
		
	</div>
  )}
		
		
	
}


export default App;
