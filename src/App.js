
import "./App.css";
import { Component } from "react";
import CardList  from './components/card-list/card-list.component'
import SearchBox  from './components/search-box/search-box.component'
import  './App.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  callback = (lang) => {
    const searchField = lang.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  };

  render() {


    const filteredMonster = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className="App">
         <h1 className="app-title">monster roledex</h1>
        <SearchBox placeholder={'this is plaseholder'} onChangeHanler={this.callback}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

//export default App;
