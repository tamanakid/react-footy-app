import React from 'react';
import { fetchTeam } from 'api/team/apiTeam'
import './team.css';

class LayoutTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }

  componentDidMount() {
    console.log(this);
    fetchTeam({ body: { teamId: this.props.id } }).then((response) => {
      this.setState({
        team: response.team,
      });
    });
  }

  render() {
    return (
      <div className={`team team-color1-${this.state.team.color1}`}>
        <div className="team--title">{this.state.team.name}</div>
        <img alt="logo" src={this.state.team.logoUrl}></img>
        <div className="team--description">
          <div>{this.state.team.color1}</div>
          <div>{this.state.team.color2}</div>
        </div>
      </div>
    );
  }
}


export default LayoutTeam;
