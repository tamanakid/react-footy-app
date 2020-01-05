import React from 'react';
// import useFetchState from 'common/hooks/useFetchState';

const withFetchState = (Component, endpoint) => {
	
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isFetching: false,
				error: null,
				data: null,
			}
		}

		componentDidMount() {
			this.setState({ isFetching: true });
			endpoint()
				.then((response) => {
					this.setState({ data: response, isFetching: false });
				})
				.catch((err) => {
					this.setState({ isFetching: false, error: err });
				});
		}

		render() {
			if (this.state.isFetching) {
				return <div>Loading</div>;
			}
			else if (this.state.error) {
				return <div>There was an error fetching the data</div>;
			}
			return <Component data={this.state.data} { ...this.props } />
		}

	}
}

export default withFetchState;
