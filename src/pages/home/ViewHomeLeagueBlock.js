import React from 'react';

function ViewHomeLeagueBlock ({ league }) {

	return (
		<div className="competition">
			<div className="logo">
				{league.emblemUrl ? (
					<img src={league.emblemUrl} alt="logo"/>
				) : (
					<span>Logo Not Available</span>
				)}
			</div>
			<div className="title1 block-title">{league.name}</div>
			<div className="title2">Current Matchday: {league.currentSeason.currentMatchday}</div>
			<div className="title3">Last Updated: {league.lastUpdated.split('T')[0]}</div>
		</div>
	);
}


export default ViewHomeLeagueBlock;