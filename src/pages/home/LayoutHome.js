import React, { useState, useEffect } from 'react';
import { getAllLeagues } from 'endpoints/leagues';
import './home.scss';


function LayoutHome (props) {

	const [isFetched, fetchDone] = useState(false);
	const [leagues, setLeagues] = useState([]);
	useEffect(() => {
		getAllLeagues()
			.then((allLeagues) => {
				setLeagues(allLeagues);
			})
			.finally(() => {
				fetchDone(true);
			});
	}, []);


	return (
		<div>
			{isFetched ? (
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
			) : (
				<div>Loading</div>
			)}
		</div>
	);

};

export default LayoutHome;
