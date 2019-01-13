import React, { Component } from 'react';
import Persons from '.././components/Persons/Persons';
import './App.css';

class App extends Component {

  state = ({
     persons:[{ id:'432432', name:'Naresh', age : 3},
     { id:'432df432', name:'Swapna', age : 5},   
               { id:'sfsdfs', name:'Raghu', age : 4}  
          ],
          showPersons:false
  });


//   newChangeButtonHandler = (newName) =>{
//     this.setState({
//       persons:[{ name:newName, age : 3},
//       { name:'Raghu', age : 4}  
//  ]
//     })
//   }

  newChangeTextHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p=>{
      return p.id === id;
    })

     const person = {
     ...this.state.persons[personIndex]
    } 

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons:persons
    })

//     this.setState({
//       persons:[{ name:event.target.value, age : 3},
//       { name:'Raghu', age : 4}  
//  ]
//     })
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

    const style = {
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'   


    }

    let personsHtml = null;

    if(this.state.showPersons) {
      personsHtml =(
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed = {this.newChangeTextHandler}/>
         </div>
      );

      style.backgroundColor = 'red';
     }

    //let classes = ['red', 'bold'].join(' ');
 const classes = [];

         if (this.state.persons.length <=2) {
           classes.push('red');
         }

         if (this.state.persons.length <=1) {
              classes.push('bold')
         }

    return (
      <div className="App">
      <h1>Hi Iam react</h1>
      <p className={classes.join(' ')}>This is really working </p>
      <button onClick={this.toogleEventHandler} style={style}>Toogle Names</button>
     
        {personsHtml}
     
            </div>
    );
  }
}

export default App;
