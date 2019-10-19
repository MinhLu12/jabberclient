import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`http://localhost:5000/test`)
      .then(res => {
        const testText = res.data;
        this.setState({ testText });
      })
  }

  render() {
    return (
      <div>
        { this.state.testText }
      </div>
    )
  }
}