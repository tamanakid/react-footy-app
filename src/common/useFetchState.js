import { useState, useEffect } from 'react';


const useFetchState = ({ endpoint }) => {

	const [fetchState, toggleFetch] = useState({ isFetching: false, error: null });
	const [data, setData] = useState([]);

	useEffect(() => {
		toggleFetch({ isFetching: true, error: null });
		endpoint()
			.then((response) => {
				setData(response);
				toggleFetch({ isFetching: false, error: null });
			})
			.catch((err) => {
				toggleFetch({ isFetching: false, error: err });
			});
	}, [endpoint]);

	return { data, fetchState };
}

export default useFetchState;