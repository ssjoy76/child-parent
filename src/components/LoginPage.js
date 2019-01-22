import React from 'react';

import GetUsername from './GetUsername'
import GetPassword from './GetPassword'

class LoginPage extends React.Component{
    constructor(props)  {
      super(props);
      this.state = {
        submit:'',
        password: '',
        userName: ''
  
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onUserNameChange = this.onUserNameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
    }
  
    onUserNameChange(userName) {  
      this.setState({
        userName: userName
      })
    }
  
    onPasswordChange(password) {
      this.setState({
        password: password
      })
    }
  
    handleSubmit(e) {
      alert('username and password were submitted: ' + this.state.userName + ' and ' + this.state.password);
      e.prevenDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <GetUsername onChange={'onUserNameChange'}/>
          <GetPassword onChange={'onPasswordChange'}/>
          <button type="submit">Login</button>
         </form>
      )
    }
  }

    export default LoginPage ;