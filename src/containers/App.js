import React, { Component } from 'react';
import Persons from '.././components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = ({
     persons:[{ id:'432432', name:'Naresh', age : 3},
     { id:'432df432', name:'Swapna', age : 5},   
               { id:'sfsdfs', name:'Raghu', age : 4}  
          ],
          showPersons:false
  });




  newChangeTextHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p=>{
      return p.id === id;
    })

     const person = {
     ...this.state.persons[personIndex]
    } 

    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons:persons
    })

  }

  toogleEventHandler = () =>{
     const doesShow = this.state.showPersons;
    this.setState({
        showPersons:!doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
           clicked={this.deletePersonHandler} 
           changed = {this.newChangeTextHandler}/>;
     }

  
    return (
      <div className={classes.App}>
      <Cockpit showPersons = {this.state.showPersons}
         persons = {this.state.persons} clicked={this.toogleEventHandler}/>
         {persons}
            </div>
    );
  }
}

export default App;
