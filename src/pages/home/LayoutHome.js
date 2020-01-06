import React from 'react';

import Header from 'common/layout/Header';
import CompLoadingAndError from 'common/components/CompLoadingAndError';
import ViewHomeLeagueBlock from './ViewHomeLeagueBlock';
import ViewHomeFavoritesMatches from './ViewHomeFavoritesMatches';
import { getAllLeagues } from 'endpoints/leagues';


function LayoutHome (props) {

	const title = 'React Footy App';

	return (
		<React.Fragment>
			<Header title={title} isLarge={true} />
			<div className="l-home">
				<div className="l-home__leagues">
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
				<div className="l-home__matches">
					<ViewHomeFavoritesMatches />
				</div>
			</div>
		</React.Fragment>
	);

};

export default LayoutHome;
