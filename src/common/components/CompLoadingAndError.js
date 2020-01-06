import React from 'react';

class CompLoadingAndError extends React.Component {

	state = { isFetching: false, error: null, data: null };

	componentDidMount() {
		this.setState({ isFetching: true });
		this.props.endpoint()
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
	return <React.Fragment>{this.props.children(this.state.data)}</React.Fragment>
	}

}


export default CompLoadingAndError;