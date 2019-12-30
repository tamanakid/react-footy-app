import React from 'react';
import { fetchTeam } from 'api/team/apiTeam'
import './team.scss';

class LayoutTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }

  componentDidMount() {
    const teamId = Number(this.props.match.params.teamId);
    fetchTeam({ body: { teamId } })
      .then((response) => {
        this.setState({ team: response.team });
      });
  }

  render() {
    return (
      <div className={`team team-color1-${this.state.team.color1}`}>
        <div className="team--logo header">
          <div style={{ height: '60%' }}>
            <img alt="logo" src={this.state.team.logoUrl}></img>
          </div>
        </div>
        <div className="team--title header">
          {this.state.team.name}
        </div>
        <div className="header">
          &nbsp;
        </div>
        <div className="team--description">
          <div>{this.state.team.color1}</div>
          <div>{this.state.team.color2}</div>
        </div>
      </div>
    );
  }
}


export default LayoutTeam;
