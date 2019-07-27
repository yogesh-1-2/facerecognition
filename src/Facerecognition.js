import React from 'react'
const Facerecognition=(props)=>{
	return(
		<div className="center ma">
		<div className="absolute mt2">
		<img id="inputsrc" src={props.photo.imageurl} alt="face" width="300px" height="auto"/>
		<div className="bounding-box" style={{top : props.box.upperrow , left : props.box.leftcol , right : props.box.rightcol , bottom : props.box.bottomrow}}>		
		</div>
		</div>
		</div>
		);
	
}
export default Facerecognition