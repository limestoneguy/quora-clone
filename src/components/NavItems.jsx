import React from 'react';

function NavItems(props) {
	return (
		<div className="NavItems">
			<a href="#">{props.name}</a>
		</div>
	);
}

export default NavItems;
