import React, { Component } from 'react'

class AddList extends Component {
  state = {
    list: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      let a = this.state.list.replace(new RegExp("[0-9]?[0-9].", "g"), "").trim().split('  ')
      this.props.updateListfromTextarea(a)
    })
  }

  render() {
    return (
      <>
        <textarea onChange={(e) => this.handleChange(e)} name="list" id="" cols="30" rows="10"></textarea>
      </>
    );
  }
}

export default AddList;