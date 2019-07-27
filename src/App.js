import React from 'react';
import Particles from 'react-particles-js';
import Logo from './Logo'
import Clarifai from 'clarifai'
import Navigation from './Navigation';
import Image from './Image';
import Rank from './Rank';
import './App.css' 
import Facerecognition from'./Facerecognition'
import './Facerecognition.css';
import Signin from './Signin';
import Register from './Register'

const particleoption={
                    particles: {
                    	number : {
                        value : 400,
                        density :{
                        	enable : true,
                        	value_area :500
                        }
                        }
                    }
                }	
 const app = new Clarifai.App({
 apiKey: '35e353b4b1cb4e4b830f742fba465eb9'
	});
		
class App extends React.Component {
	constructor(){
		super();
		this.state={
			image : "",
			imageurl : "",
			box: {},
			stage : "signin",
			user :{
				name : '',
				email : '',
				id : '',
				password : '',
				count : ''
			}
		}
		this.handleclick=this.handleclick.bind(this)
		this.onSubmit=this.onSubmit.bind(this)
		this.calculatefacelocation=this.calculatefacelocation.bind(this)
		this.displayfacebox=this.displayfacebox.bind(this)
		this.onChangeStage=this.onChangeStage.bind(this)
	}
	loaduser(data){
		this.setState(
			{user :{ 
			name : data.name,
			id : data.id,
			password : data.password,
			email : data.email,
			count : data.count

			}
		}
		)
	}
	calculatefacelocation(data){
		const Clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
		const imag=document.getElementById("inputsrc");
		const width=Number(imag.width);
		const height=Number(imag.width);
		return {
			leftcol:Clarifaiface.left_col * width,
			rightcol:width-(Clarifaiface.right_col *width),
			bottomrow:height-(Clarifaiface.bottom_row*height),
			upperrow:Clarifaiface.top_row*height
			}
	}
	onChangeStage(data){
		this.setState({
			stage : data
		})
	}

	handleclick(event){
		this.setState({
			image : event.target.value
			});
		console.log(this.state.image)
	}
	displayfacebox(box){
		console.log(box);
		this.setState({
			box:box
			})
	}
	onSubmit(){
		this.setState(
		{
			imageurl : this.state.image 
		})
			app.models.predict(
				Clarifai.FACE_DETECT_MODEL, 
				this.state.image 
				)
			.then(response=>{ 
				if(response){
					fetch('http://localhost:3000/image',{
						 method : 'post',
						 headers: {'Content-Type': ' application/json'},
					      body : JSON.stringify({
					        id : this.state.user.id
					      })
					  })
					 .then(response=>response.json())
					 .then(entries=>{this.setState({
					 	users :{
					 		count :entries
					 	}})
					 	
				})
			}
				this.displayfacebox(this.calculatefacelocation(response))
			})

			  .catch(err=>{console.log(err)} )

	}
	render(){
	  return (
	    <div>
	    <Particles className="particles" params={particleoption} />
	    <Navigation onChangeStage={this.onChangeStage} Stage={this.state.stage}/>
	    {(this.state.stage==="signin")
	    ?<Signin onChangeStage={this.onChangeStage}/>	
	    			:(this.state.stage==="register"
	    				?<Register 
	    					loaduser ={this.loaduser}
	    					onChangeStage={this.onChangeStage}/>
	    				:<div>
							 <Logo />
							<Rank name={this.state.user.email} count={this.state.user.count}/>
							<Image handleclick={this.handleclick} onSubmit={this.onSubmit }/>
							<Facerecognition box={this.state.box} photo={this.state}/>
						</div>)
		}
	    </div>
  );
}
}

export default App;
