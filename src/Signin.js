import React,{Component} from 'react'

class Signin extends Component{
  constructor(){
    super();
    this.state={
      signinEmail :"",
      signinPassword : ""
    }
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.onSigninsubmit=this.onSigninsubmit.bind(this);
  }
  onEmailChange(event){
    this.setState({
      signinEmail: event.target.value
    })
  }
   onPasswordChange(event){
    this.setState({
      signinPassword: event.target.value
    })
  }
  onSigninsubmit(){
    console.log(this.state);
    window.fetch('http://localhost:3000/signin',{
      method : 'post',

      headers: {'Content-Type': ' application/json'},
      body : JSON.stringify({
        email : this.state.signinEmail,
        password :this.state.signinPassword
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data==="success")
      {
        this.props.onChangeStage("home");
      }   
    })
    
  }
 
  render(){
  return(
    <article className="back br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
    <main className="pa4 black-80">
      <form className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 pointer">
          <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
          <div className="mt3 pointer">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onEmailChange}
              />
          </div>
          <div className="mv3 pointer">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onPasswordChange}/>
          </div>
        </fieldset>
        <div className="center">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="sign in" onClick={this.onSigninsubmit}/>
        </div>
     
        <div className="lh-copy mt3 center">
          <a href="#0" onClick={()=>this.props.onChangeStage("register")} className="f6 link dim black db">Register</a>
        </div>
      </form>
    </main>
</article>
)
}
}
export default Signin 
