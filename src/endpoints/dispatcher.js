import axios from 'axios';
import { getFromStorage } from 'utils/storage';


const token = getFromStorage('token');

const dispatcher = axios.create({
  baseURL: 'http://api.football-data.org/v2/',
  headers: { 'X-Auth-Token': token },
});


const send = (params = {}) => {
	return dispatcher.get(params.url);
};


export default { send };
