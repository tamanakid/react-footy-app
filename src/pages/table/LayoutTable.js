import React from 'react';
import Header from 'common/layout/Header'
import ViewTeamRow from './ViewTeamRow';
import { fetchTable } from 'api/table/apiTable';


class LayoutTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    fetchTable().then((response) => {
      this.setState({
        teams: response.teams
      });
    })
  }

  // { pos: 1, name: 'Liverpool', points: 9, played: 4, wins: 3, draws: 0, loses: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4 },

  render() {
    return (
      <div className="table">
        <Header title={'League Table'} isLarge={true} />
        <div className="table--contents">
          <div className="table--contents--row is-bold">
            <div className="row-data">&nbsp;</div>
            <div className="row-name">Team</div>
            <div className="row-data">Pts</div>
            <div className="row-data">Games</div>
            <div className="row-data">W</div>
            <div className="row-data">D</div>
            <div className="row-data">L</div>
            <div className="row-data">GF</div>
            <div className="row-data">GA</div>
            <div className="row-data">GD</div>
          </div>
          {this.state.teams.map((team, index) =>
            <ViewTeamRow team={team} key={index} />
          )}
        </div>
      </div>
    );
  }
}


export default LayoutTable;
