import React from "react";
import {InlineInput, SelectInput} from '../../components/inputs'
import './style.css'
import {FacebookLogin, GoogleLogin, LinkedInLogin, GithubLogin} from '../../components/social-accounts-btn'


const SocialLoginView = props => {
  return <div className = 'row justify-content-center mt-3'>
    <div className = 'col-sm-10 col-md-8 col-lg-6'>
      <div className = 'row row-cols-auto  justify-content-center'>
        <FacebookLogin />
        <GoogleLogin />
        <GithubLogin />
        <LinkedInLogin />
      </div>
    </div>
  </div>
}

class SignUp extends React.Component {
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
        <form onSubmit={this.handleSubmit}>
          <h1 className = 'text-center fs-1 fw-bold mb-5'>Joining Form</h1>
          <div className = 'row row-cols-1 g-3 align-items-center'>
            <InlineInput
              type = 'text'
              label = "First Name"
              required = {true}
              name = 'firstName'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.firstName} />

            <InlineInput
              type = 'text'
              label = "Middle Name"
              name = 'middleName'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.middleName} />
            
            <InlineInput
              type = 'text'
              label = "Last Name"
              required = {true}
              name = 'lastName'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.lastName} />

            <InlineInput
              type = 'email'
              label = "Email"
              required = {true}
              name = 'email'
              placeholder = 'example@mail.com'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.email} />
              
            <InlineInput
              type = 'password'
              required={true}
              placeholder = "Enter your password here"
              name = 'password'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.password} /> 

            <InlineInput
              type = 'password'
              placeholder = "Re-enter your password"
              required = {true}
              label = "Confirm Password"
              name = 'confirmPassword'
              onChange = {(event) => this.handleInputChange(event)}
              value = {this.state.confirmPassword} /> 

            <SelectInput required = {true} name='userType'
              value = {this.state.userType} onChange = {(event) => this.handleInputChange(event)} />
          </div>

          {/* Submit button */}
          <div class="row justify-content-center">
            <input value = "Join" className = 'col-5 btn btn-primary mt-3 mb-2' type="submit" />
          </div>

          {/* sign up throw social accounts options */}
          <SocialLoginView />

          {/* terms and condition notice */}
          <hr/>
          <p className='text-center'>
            By creating this account you agree to our <a href="#">terms and conditions</a>
          </p>
        </form>
      </div>
    );
  }

}

export default SignUp;