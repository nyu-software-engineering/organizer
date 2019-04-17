import React, { Component } from 'react';
import Setting from './Setting';
import { Redirect } from 'react-router';
// import SidebarLink from './Sidebar'


const UNAME = '123';
const PWD = '123';

class Settingpage extends Component {
  constructor(props){
    super(props);
    this.state=({
      NickName: "",
      userName:'123',
      pwd:'123',
      redirect: false

    })

  }
    handleNickNameChange = (e) =>{
      this.setState({
        NickName:e.target.value
      })
    }
  

    handleUserNameChange = (e) =>{
      this.setState({
        userName:e.target.value
      })
    }

    handlePwdChange = (e) =>{
      this.setState({
        pwd:e.target.value
      })
    }

    handleNickNameChange = (e) =>{
      this.setState({
        NickName:e.target.value
      })
    }

    handleLogin = () =>{
      if(this.state.userName===UNAME&&this.state.pwd===PWD){
        alert("Login successfully!"); 
        // var userName = this.state.userName;
        // var pwd = this.state.pwd;

        this.setState({redirect: true})

        if (this.state.redirect) {
          return <Redirect to='/schedules' />
      
  
      };
           
          
           
      }
      else if(this.state.userName!==UNAME){
        alert("Fail to log in: Username is wrong!");
      }
      else if(this.state.pwd!==PWD){
        alert("Fail to log in: Passwoed is wrong! ");
      }
      else{
        alert("Fail to log!");
      }
    }
    
    //handle logout
    handleSign = () =>{
      alert("Logout successfully!");
    }

    
  render() {
    if (this.state.redirect) {
      return <Redirect to="/schedules" />
    }
    
    return (
      

      <div className="Settingpage">   
        <Setting         
          handleUserNameChange={this.handleUserNameChange}
          handlePwdChange={this.handlePwdChange}
          handleSign={this.handleSign} //handle logout
          handleLogin={this.handleLogin}   
          handleNickNameChange={this.handleNickNameChange} 
          
        />
       
      
        
      </div>
      
      
    );
    
  }
}

export default Settingpage;
