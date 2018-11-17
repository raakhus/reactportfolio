import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import API from "../utils/API";



class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      phone:'',
      message:'',
      formErrors: {email: '', password: ''},
      emailValid: false,
      formValid: false,
      phoneValid: false
    }
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
     console.log(this.state)
      API.saveContact({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
        .then(res => console.log(res), this.setState({
          name:'',
          email:'',
          phone:'',
          message:''
        }))
        .catch(err => console.log(err)
        );
    
  };
  handleUserInput = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) }
                  );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        phoneValid = value.length === 10;
        fieldValidationErrors.phone = phoneValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                   phoneValid: phoneValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-sm-2"/>
        <div className="col-sm-8 text-center contact">
        
          <Form  className="text-white">
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="Email" placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput} />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="nameInput" placeholder="Name" 
              onChange={this.handleUserInput} 
              value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input type="text" name="phone" id="phoneInput" placeholder="Phone Number" 
              value={this.state.phone}
              onChange={this.handleUserInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Questions/Concerns/How to get in touch</Label>
              <Input type="textarea" name="message" id="message" 
              value={this.state.message}
              onChange={this.handleUserInput}
              />
            </FormGroup>
           
            <Button
                onClick={this.handleFormSubmit}>Submit</Button>
            
          </Form>
          </div>
          <div className="col-sm-2"/>
          </div>
      </div>

    );
  }
}
export default Contact








