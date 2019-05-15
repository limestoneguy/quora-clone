import React from 'react';

function NavButton(props) {
	return (
		<div className="NavButton">
			<button type="button">{props.text}</button>
		</div>
	);
}

export default NavButton;
