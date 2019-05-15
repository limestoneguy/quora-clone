import React from 'react';
import NavItems from './NavItems';
import AutoCompleteText from './AutoCompleteText';
import CircleAvatar from './CircleAvatar';
import NavButton from './NavButton';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="logo">
					<img src="https://qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg" />
				</div>
				<div className="navLinks">
					<NavItems name="Home" />
					<NavItems name="Answers" />
					<NavItems name="Spaces" />
					<NavItems name="Notifications" />
				</div>
				<AutoCompleteText placeholder="Search Quora" />
				<CircleAvatar url={'photoURL'} />
				<NavButton text={'Add Question or Link'} />
			</nav>
		);
	}
}

export default Navbar;
