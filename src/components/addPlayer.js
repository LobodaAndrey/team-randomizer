import React, { Component } from 'react';
import './addPlayer.scss';
import {Button} from 'antd'
import { Input } from 'antd';

class AddPlayer extends Component {
  
  state = {
    inputSurname: '',
  }

  handeInputChange = ({ target: {value}}) => {
    this.setState({
      inputSurname: value
    })
  }

  updateValue = () => {
    this.props.updateList(this.state.inputSurname)
    this.setState({
      inputSurname: ''
    })
    
  }
  
  render() {
    const {inputSurname} = this.state
    return (
      <React.Fragment>
        <div className="container">
          <Input className="add-player-input" size="large" onChange={this.handeInputChange} id="addPlayer" placeholder="Добавь игрока" value={inputSurname} onKeyPress={
            (e) => { if (e.key === 'Enter') {
              this.updateValue()
            }
            }
          }/>
          <Button className="add-button" onClick={this.updateValue} >Добавить</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPlayer;