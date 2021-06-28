import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

import './Log.css'
import {Login} from './Login';
import {Register} from './Register';
/*const name = 'HAkimuddin';
const currdate = new Date();*/
 
class App extends React.Component{
	constructor(props){
		super(props);
		this.state={isLoginOpen:false,isRegisterOpen:true};
	}

	showLogin(){
		this.setState({isLoginOpen:true,isRegisterOpen:false});
	}

	showRegister(){
		this.setState({isLoginOpen:false,isRegisterOpen:true});
	}
	render(){
		return(
		<>
	<div className="start">
	<div className="form">
		<div className="box">
			<div id="btn"></div>
			<button type="button" className="toggle" onclick={this.showLogin.bind(this)}>Login</button>
			<button type="button" className="toggle" onclick={this.showRegister.bind(this)}>Register</button>

		</div>
		<div className="social">
			<a href="https://www.instagram.com/nobroker/">
		<img src="https://i.pinimg.com/originals/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg" className=""/></a>
			<a href="https://m.facebook.com/nobrokercom/">
		<img src="https://image.flaticon.com/icons/png/512/124/124010.png"/></a>
		<img src="https://www.clipartkey.com/mpngs/m/42-421095_twitter-social-media-logo.png"/>
	</div>
   <>
{this.state.isLoginOpen && <Login/>}
</>


{this.state.isRegisterOpen && <Register/>}
	</div>

</div>


  
</>

		);

	}
}

ReactDOM.render(
<App/>, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

