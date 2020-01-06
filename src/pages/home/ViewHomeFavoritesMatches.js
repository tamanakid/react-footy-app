import React from 'react';
import { getFavoritesMatches } from 'endpoints/matches';


class ViewHomeFavoritesMatches extends React.Component {

	constructor(props) {
		super(props);
		this.state = { matches: [] };
	}

	componentDidMount() {
		getFavoritesMatches().forEach((promise) => {
			promise.then((favorite) => {
				let updatedMatches = [...this.state.matches];
				updatedMatches.push(...favorite);
				updatedMatches.sort((a, b) => (a.utcDate > b.utcDate) ? -1 : 1 );
				this.setState({ matches: updatedMatches });
			})
		})
	}

	render() {
		return (
			<div>
				{this.state.matches.length ? (
					this.state.matches.map((match) => {
						return (
							<div className="match" key={match.id}>
								<span>{match.homeTeam.name} </span>
								<span>{match.score.fullTime.homeTeam}</span>
								<span> - </span>
								<span>{match.score.fullTime.awayTeam}</span>
								<span> {match.awayTeam.name}</span>
							</div>
						);
					})
				) : (
					<span>No matches to display</span>
				)}
			</div>
		);
	}



}


export default ViewHomeFavoritesMatches;
