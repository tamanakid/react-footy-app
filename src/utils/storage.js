const storage = window.localStorage;

const favorites = [78, 76];
const leagues = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
const token = '2e986fd544be4f28868d6e3befa4db2f';


export const mountStorage = () => {
	
	if (JSON.parse(storage.getItem('leagues')) === null) {
		storage.setItem("leagues", JSON.stringify(leagues));
	}

	if (JSON.parse(storage.getItem('token')) === null) {
		storage.setItem("token", JSON.stringify(token));
	}

	if (storage.getItem('favorites') === null) {
		storage.setItem('favorites', JSON.stringify(favorites));
	}
};


export const getFromStorage = (key) => {
	return JSON.parse(storage.getItem(key));
}

export const setToStorage = (key, value) => {
	storage.setItem(key, JSON.stringify(value));
}
