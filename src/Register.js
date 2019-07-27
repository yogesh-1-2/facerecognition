import React from 'react'

class Register extends React.Component {

  constructor(){
     super();
     this.state={
      name : '',
      email : '',
      password : ''
     }
     this.onemailChange=this.onemailChange.bind(this);
     this.onpasswordChange=this.onpasswordChange.bind(this);
     this.onSubmitregister=this.onSubmitregister.bind(this);
     this.onnameChange=this.onnameChange.bind(this); 
    }
    onemailChange(event){
    this.setState({
      email: event.target.value
    })
  }
   onpasswordChange(event){
    this.setState({
      password: event.target.value
    })
  }
  onnameChange(event){
    this.setState({
      name: event.target.value
    })
  }

    onSubmitregister(){
    console.log(this.state);
    window.fetch('http://localhost:3000/register',{
      method : 'post',

      headers: {'Content-Type': ' application/json'},
      body : JSON.stringify({
        email : this.state.email,
        password :this.state.password
      })
    })
    .then(response=>response.json())
    .then(user=>{
        this.props.loaduser(user);
        this.props.onChangeStage("signin");   
    })
    
  }

  render(){
       return(
        <article className="back br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 pointer">
              <legend className="f4 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3 pointer">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="name" 
                  name="name"  
                  id="name"
                  onChange={this.onnameChange}/>
              </div>
              <div className="mt3 pointer">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={this.onemailChange}
                  />
              </div>
              <div className="mv3 pointer">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onpasswordChange}
                  />
              </div>
            </fieldset>
            <div className="center">
              <input  
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  
                type="submit" 
                value="Register" 
                onClick={this.onSubmitregister}
                />
            </div>
         
            <div className="lh-copy mt3 center">
              <a href="#0" className="f6 link dim black db" onClick={()=>this.props.onChangeStage("signin")}>Sign in</a>
            </div>
          </form>
        </main>
    </article>
    )
  }
}
export default Register 
