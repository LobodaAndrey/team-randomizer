import React from 'react'

const PlayerList = (props) => {
  const players = props.list
  const listItems = players.map((player) =>
    <li key={Math.random()}>{player}</li>
  );
  
  return (
    <ol>{listItems}</ol>
  );
}
 

export default PlayerList;
