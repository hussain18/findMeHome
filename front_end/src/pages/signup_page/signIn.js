import React from "react";
import {InlineInput, SelectInput} from '../../components/inputs'
import './style.css'
import {OrView, SocialLoginView} from './signUp'

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value,
      });
    }
  
    handleSubmit(event) {
      //TEST...
      console.log(this.state)
      alert('submitted successfully')
      event.preventDefault()
    }
  
    render() {
      return (
        <div className='container form-container'>
          <div className = 'row row-cols-1 justify-content-center'>
            <form onSubmit={this.handleSubmit}>
                <h1 className = 'text-center fs-1 fw-bold mb-5'>Sign in Form</h1>
                <div className = 'row row-cols-1 g-3 align-items-center'>
                
                    <InlineInput
                    type = 'email'
                    label = "Email"
                    name = 'email'
                    placeholder = 'example@mail.com'
                    onChange = {(event) => this.handleInputChange(event)}
                    value = {this.state.email} />
                    
                <InlineInput
                    type = 'password'
                    placeholder = "Enter your password here"
                    name = 'password'
                    onChange = {(event) => this.handleInputChange(event)}
                    value = {this.state.password} /> 
                </div>
    
                {/* Submit button */}
                <div class="row justify-content-center mt-3">
                <input value = "Sign in" className = 'col-5 btn btn-primary mt-3 mb-3' type="submit" />
                </div>
    
                <OrView />
    
                {/* sign in through social accounts options */}
                <SocialLoginView />
            </form>
          </div>
        </div>
      );
    }
  
}

export default SignIn