import React from 'react';

import CompoLoadingAndError from 'common/components/CompLoadingAndError';
import CompHomeLeagueBlock from './CompHomeLeagueBlock';
import { getAllLeagues } from 'endpoints/leagues';
import './home.scss';


function LayoutHome (props) {

	return (
		<CompoLoadingAndError endpoint={getAllLeagues}>
			{(leagues) => {
				if (!leagues || !leagues.length) {
					return <div>No competitions available</div>;
				}
				return leagues.map((league) =>
					<CompHomeLeagueBlock league={league} key={league.id} />
				)
			}}
		</CompoLoadingAndError>
	);

};

export default LayoutHome;
