import React from 'react';

import axios from 'axios';

export default class App extends React.Component {
  state = {
    persons: Object
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/test`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.title }
      </ul>
    )
  }
}