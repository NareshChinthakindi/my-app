import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) =>{

    const assignedClasses = [];
    let btnClass = '';
    let change='';

    if(props.showPersons) {
        btnClass = classes.Red;
    }


    if (this.state.persons.length <=2) {
        assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <=1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi Iam react</h1>
            <p className={assignedClasses.join(' ')}>This is really working </p>
            <button onClick={this.toogleEventHandler} style={style}>Toogle Names</button>
    </div>
    );
}

export default cockpit;