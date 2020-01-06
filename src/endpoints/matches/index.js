import dispatcher from 'endpoints/dispatcher';
import { getFromStorage } from 'utils/storage';


export const getFavoritesMatches = () => {
	const idsFavorites = getFromStorage('favorites');

	return idsFavorites.map((idTeam) => {
		const url = `teams/${idTeam}/matches`;

		return new Promise((resolve, reject) => {
			dispatcher.send({ url })
				.then((res) => {
					const allMatches = res.data.matches;
					const filteredMatches = allMatches
						.filter(match => match.status === 'FINISHED')
						.sort((a, b) => (a.utcDate > b.utcDate) ? -1 : 1 );
					resolve(filteredMatches.splice(0, 3));
				})
				.catch((err) => {
					reject(err);
				});
		});
	});

};
