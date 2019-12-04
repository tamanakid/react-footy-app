import React from 'react';

export default class CompTeamRow extends React.Component {

  constructor(props) {
    super(props);
    this.checkQualification.bind(this);
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

  render() {
    return (
      <div className={`table--contents--row table--contents--row-team ${this.checkQualification()}`}>
        <div className="row-data">{this.props.team.pos}</div>
        <div className="row-name">{this.props.team.name}</div>
        <div className="row-data bold">{this.props.team.points}</div>
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
