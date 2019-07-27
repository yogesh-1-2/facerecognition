import React from 'react'
const Navigation=({onChangeStage,Stage})=>{
	if(Stage==="home")
	{
	return(
		<nav style={{display :"flex" , justifyContent :"flex-end"}}>
		 <p className="f3 link underline dim black pa3 pointer" onClick={()=>onChangeStage("signin")}>Sign Out</p>
		</nav>
		)
	}
	else if(Stage==="register")
	{
	return(
		<nav style={{display :"flex" , justifyContent :"flex-end"}}>
		 <p className="f3 link underline dim black pa3 pointer" onClick={()=>onChangeStage("signin")}>Sign in</p>
		</nav>
		)
	}
	else{
		return(
		<nav style={{display :"flex" , justifyContent :"flex-end"}}>
		 <p className="f3 link underline dim black pa3 pointer" onClick={()=>onChangeStage("register")}>Register</p>
		</nav>
		)
	}
}
export default Navigation