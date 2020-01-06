import React from 'react';

import CompLoadingAndError from 'common/components/CompLoadingAndError';
import ViewHomeLeagueBlock from './ViewHomeLeagueBlock';
import ViewHomeFavoritesMatches from './ViewHomeFavoritesMatches';
import { getAllLeagues } from 'endpoints/leagues';
import './home.scss';


function LayoutHome (props) {

	return (
		<div className="home">
			<div className="home__leagues">
				<CompLoadingAndError endpoint={getAllLeagues}>
					{(leagues) => {
						if (!leagues || !leagues.length) {
							return <div>No competitions available</div>;
						}
						return leagues.map((league) =>
							<ViewHomeLeagueBlock league={league} key={league.id} />
						)
					}}
				</CompLoadingAndError>
			</div>
			<div className="home__matches">
				<ViewHomeFavoritesMatches />
			</div>
		</div>
	);

};

export default LayoutHome;
