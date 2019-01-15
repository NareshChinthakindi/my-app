import React from 'react';
import './Cockpit.css';


const cockpit = (props) =>{

    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = "Cockpit button.Red";
    }


    if (props.persons.length <=2) {
        assignedClasses.push("red");
    }

    if (props.persons.length <=1) {
        assignedClasses.push("bold");
    }

    return (
        <div className="Cockpit">
            <h1>Hi Iam react</h1>
            <p className={assignedClasses.join(' ')}>This is really working </p>
            <button className={btnClass} onClick={props.clicked}>Toogle Names</button>
    </div>
    );
}

export default cockpit;