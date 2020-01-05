import dispatcher from 'endpoints/dispatcher';
import { getFromStorage } from 'utils/storage';


export const getAllLeagues = () => {
	const url = 'competitions/';

	return new Promise((resolve, reject) => {
		dispatcher.send({ url })
			.then((res) => {
				const leaguesStorage = getFromStorage('leagues');
				const competitions = res.data.competitions.filter(competition => {
					return (leaguesStorage.indexOf(competition.id) !== -1);
				});
				resolve(competitions);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
