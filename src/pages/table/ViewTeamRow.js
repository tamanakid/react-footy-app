import React from 'react';
import { withRouter } from 'react-router';

class ViewTeamRow extends React.Component {

  constructor(props) {
    super(props);
    this.checkQualification = this.checkQualification.bind(this);
    this.goToTeam = this.goToTeam.bind(this);
  }

  checkQualification() {
    if ([1, 2, 3, 4].includes(this.props.team.pos)) {
      return 'champions';
    }
    else if ([5, 6, 7].includes(this.props.team.pos)) {
      return 'europa';
    }
    else if ([18, 19, 20].includes(this.props.team.pos)) {
      return 'relegation';
    }
    return '';
  }

  goToTeam() {
    this.props.history.push(`team/${this.props.team.teamId}`);
  }

  render() {
    return (
      <div className={`table--contents--row table--contents--row-team ${this.checkQualification()}`} onClick={this.goToTeam}>
        <div className="row-data">{this.props.team.pos}</div>
        <div className="row-name">{this.props.team.name}</div>
        <div className="row-data is-bold">{this.props.team.points}</div>
        <div className="row-data">{this.props.team.played}</div>
        <div className="row-data">{this.props.team.wins}</div>
        <div className="row-data">{this.props.team.draws}</div>
        <div className="row-data">{this.props.team.loses}</div>
        <div className="row-data">{this.props.team.goalsFor}</div>
        <div className="row-data">{this.props.team.goalsAgainst}</div>
        <div className="row-data">{this.props.team.goalDifference}</div>
      </div>
    );
  }

}


export default withRouter(ViewTeamRow);
