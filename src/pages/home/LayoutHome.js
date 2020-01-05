import React from 'react';

import useFetchState from 'common/useFetchState'
import CompHomeLeagueBlock from './CompHomeLeagueBlock';
import { getAllLeagues } from 'endpoints/leagues';
import './home.scss';


function LayoutHome (props) {

	const { data: leagues, fetchState } = useFetchState({ endpoint: getAllLeagues });


	if (fetchState.isFetching) {
		return <div>Loading</div>;
	}
	else if (fetchState.error) {
		return <div>There was an error fetching the data</div>;
	}
	else if (!leagues.length) {
		return <div>No competitions available</div>;
	}
	else {
		return leagues.map((league) =>
			<CompHomeLeagueBlock league={league} key={league.id} />
		);
		/*
		leagues.map((league) =>
			<div className="home__leagues" key={league.id}>
				<div className="logo">
					{league.emblemUrl ? (
						<img src={league.emblemUrl} alt="logo"/>
					) : (
						<span>Logo Not Available</span>
					)}
				</div>
				<div className="title1 block-title">{league.name}</div>
				<div className="title2 block-subtitle">Current Matchday: {league.currentSeason.currentMatchday}</div>
				<div className="title3 block-subtitle">Last Updated: {league.lastUpdated.split('T')[0]}</div>
			</div>
		);
		*/
	}

	/*
	return (
		<div>
			{!fetchState.isFetching ? (
				fetchState.error ? (
					<div>There was an error fetching the data</div>
				) : (
					leagues.length ? (
						leagues.map((league) =>
							<div key={league.id}>
								<div>{league.name}</div>
								<div>Current Matchday: {league.currentSeason.currentMatchday}</div>
								<div>Last Updated: {league.lastUpdated.split('T')[0]}</div>
							</div>
						)
					) : (
						<div>No competitions available</div>
					)
				)
			) : (
				<div>Loading</div>
			)}
		</div>
	);
	*/

};

export default LayoutHome;
