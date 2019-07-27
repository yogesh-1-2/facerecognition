import React from 'react'
import './Image.css'
const Image=(props)=>{
	return(
		<div>
			<p className="center f3"> {'Type the URL in the magic box and it will detect your Face'}</p>
			<div className="center">
			<div className="form pa4 br3 shadow-3 center">
			<input type="tex" className="f4 pa2 w-70 center" onChange={props.handleclick}/>
			<button className=" w-25 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={props.onSubmit}>Detect</button>
			</div>
			</div>
		</div>
		);
}
export default Image