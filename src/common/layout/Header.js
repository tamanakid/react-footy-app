import React from 'react';


const Header = ({ title, isLarge }) => {

	return (
		<div className={isLarge ? 'l-header large' : 'l-header'}>
			{title}
		</div>
	);

}


export default Header;
