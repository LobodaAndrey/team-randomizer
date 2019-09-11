import React, { Component } from 'react';
import AddPlayer from './addPlayer';
import PlayerList from './playerList';
import Team from './teams'
import { Button, Row, Col } from 'antd'
import AddList from './addList/AddList'

class Container extends Component {
  state = {
    list: [],
    disabled: true,
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
          disabled: false
        })
      } else {
        this.setState({
          disabled: true
        })
      }
    } else {
      alert("Нельзя вводить пустое значение")
    }
  }

  updateListfromTextarea = (value) => {
    this.setState({
      list: value
    })
  }

  randomize = () => {
    // if (this.getCookie('usedToday')) {
    //   return alert('Ты уже поделил людей, давай играть честно)')
    // }
    const { list } = this.state;
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
        } else if (j < 10) {
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
    }, () => {
      if (this.state.team1.length > 2) {
        //cookies
        document.cookie = "usedToday=true; max-age=3600";
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }
    })
  }

  getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


  clearList = () => {
    document.cookie = "usedToday=true; max-age=0";
    this.setState({
      list: []
    })
  }

  render() {
    const { list, shareButtonType, team1, team2, team3 } = this.state
    return (
      <>
        <div className="container">
          <Row>
            <Col xs={24} sm={{span: 6, offset: 3}}>
              <h3>Вставить список</h3>
              <AddList randomize={this.randomize} updateListfromTextarea={this.updateListfromTextarea} />
            </Col>
            <Col xs={24} sm={6}>
              <Button className="btn" onClick={this.clearList} type='danger'>Очистить список</Button>
              <Button className="btn" onClick={this.randomize} type={shareButtonType}>Поделить</Button>
              <PlayerList list={list} />
            </Col>
            <Col xs={24} sm={{span: 6}}>
              <h3>Или добавить игроков вручную</h3>
              <AddPlayer updateData={this.updateData} updateList={this.updateList} />
            </Col>
          </Row>
          {this.state.team1.length > 1 && <Team team1={team1} team2={team2} team3={team3} />}
        </div>
      </>
    );
  }
}

export default Container;