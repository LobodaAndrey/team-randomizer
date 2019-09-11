import React from 'react'
import './teams.scss';


const Team = (props) => {
  const team1 = props.team1;
  const team2 = props.team2;
  const team3 = props.team3;

  const team1Devided = team1.map((player) =>
    <li key={Math.random()}>{player}</li>
  );

  const team2Devided = team2.map((player) =>
    <li key={Math.random()}>{player}</li>
  );

  const team3Devided = team3.map((player) =>
    <li key={Math.random()}>{player}</li>
  );

  return (
    <React.Fragment>
      <div className="teams-group">
        <div className="team team1" >
          <h2>Команда 1</h2>
          <ol>{team1Devided}</ol>
        </div>
        <div className="team team2">
          <h2>Команда 2</h2>
          <ol>{team2Devided}</ol>
        </div>
        {props.team3.length > 2 &&
          <div className="team team3">
            <h2>Команда 3</h2>
            <ol>{team3Devided}</ol>
          </div>
        }
      </div>
    </React.Fragment>
  );
}


export default Team;
