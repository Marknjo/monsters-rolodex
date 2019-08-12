import { Component } from "react";
import React from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";

import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err));
  }

  render() {
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        
      <h1>Mosters Rolodex</h1>

        <SearchBox 
          placeholder="Search Placeholder"
          handleChange = {e => this.setState({searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
