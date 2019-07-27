import React from 'react'
const Rank=({name,count})=>{
	return(
		<div className="center">
			<div className="white f3">
				{`${name}, Your current entrycount is :`}
			</div>
			<div className="white f3">
				{count}
			</div>
		</div>);
}
export default Rank