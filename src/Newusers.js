import React from 'react';
  
class Newusers extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["phone"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        
        const data = new FormData();
    data.append('name', this.input.name);
    data.append('phoneNumber', this.input.phone);
    data.append('password', this.input.password);

    fetch('http://localhost:5000/', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({input:input});
      });
    });
  
        alert('Form is submited');
    }
  }
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }
  
      if (typeof input["phone"] !== "undefined") {
          
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(input["phone"].length != 10){
          isValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
    }
      
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
          <h1>Enter User Details Below</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Name:<tab></tab></label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
 
          <div class="form-group">
            <label for="Phone">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.phone}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default Newusers;