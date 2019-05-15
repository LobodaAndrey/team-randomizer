import React, { Component } from 'react';
import AddPlayer from './addPlayer';
import PlayerList from './playerList';
import Team from './teams'
import { Button } from 'antd'


class Container extends Component {
  state = {
    list: [],
    shareButtonType: 'disabled',
    team1: [],
    team2: [],
    team3: []
  }

  updateList = (name) => {
    const { list } = this.state;
    const arr = list;
    if (name.length > 0) {
      arr.push(name)
      this.setState({
        list: arr
      })
      if (list.length === 10 || list.length === 15) {
        this.setState({
          shareButtonType: 'primary'
        })
      } else {
        this.setState({
          shareButtonType: 'disabled'
        })
      }
    } else {
      alert("Нельзя вводить пустое значение")
    }
  }

  randomize = () => {
    const { list} = this.state;
    let team1 = [];
    let team2 = [];
    let team3 = []
    let teams = list;

    if (list.length === 10) {
      for (let i = 0; i < 10; i++) {
        let currentPlayer = Math.floor(Math.random() * teams.length);
        if (i < 5) {
          team1.push(teams[currentPlayer])
          teams.splice(currentPlayer, 1)
        } else {
          team2.push(teams[currentPlayer])
          teams.splice(currentPlayer, 1)
        }
      }
    }

    if (list.length === 15) {
      for (let j = 0; j < 15; j++) {
        let currentPlayer = Math.floor(Math.random() * teams.length);
        if (j < 5) {
          team1.push(teams[currentPlayer])
          teams.splice(currentPlayer, 1)
        } else if ( j < 10) {
          team2.push(teams[currentPlayer])
          teams.splice(currentPlayer, 1)
        } else {
          team3.push(teams[currentPlayer])
          teams.splice(currentPlayer, 1)
        }
      }
    }

    this.setState({
      team1: team1,
      team2: team2,
      team3: team3
    })
  }

  clearList = () => {
    this.setState({
      list: []
    })
  }
  
  render() {
    const { list, shareButtonType, team1, team2, team3 } = this.state
    return (
      <React.Fragment>
        <div className="container">
          <AddPlayer updateData={this.updateData} updateList={this.updateList} />
          <Button onClick={this.clearList} type='danger'>Очистить список</Button>
          <Button onClick={this.randomize} type={shareButtonType}>Поделить</Button>
          <PlayerList list={list} />
        </div>
        { this.state.team1.length > 1 && <Team team1={team1} team2={team2} team3={team3} />}
      </React.Fragment>

    );
  }
}

export default Container;