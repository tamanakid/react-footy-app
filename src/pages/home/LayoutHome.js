import React from 'react';

import withFetchState from 'common/hoc/withFetchState'
import CompHomeLeagueBlock from './CompHomeLeagueBlock';
import { getAllLeagues } from 'endpoints/leagues';
import './home.scss';


function LayoutHome (props) {
	const leagues = props.data;

	if (!leagues || !leagues.length) {
		return <div>No competitions available</div>;
	}
	else {
		return leagues.map((league) =>
			<CompHomeLeagueBlock league={league} key={league.id} />
		);
	}

};

export default withFetchState(LayoutHome, getAllLeagues);
