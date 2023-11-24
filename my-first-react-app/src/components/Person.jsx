import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ firstName: 'John', lastName: 'Web', age: 100 });
  
    const handleIncreaseAge = () =>{
      setPerson({ ...person, age: person.age + 1 });
    };
    
    const handleFirstName = (e) => {
        const firstName = {...person, firstName: e.target.value};
        setPerson(firstName);
    }

    const handleLastName = (e) => {
        const lastName = {...person, lastName: e.target.value};
        setPerson(lastName);
    }

    return (
      <>
        <label>
            First Name:{' '}
            <input value={person.firstName} onChange={handleFirstName}/>
        </label>
        <label>
            Last Name:{' '}
            <input value={person.lastName} onChange={handleLastName}/>
        </label>
        <h1>{person.firstName + ' ' + person.lastName}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  export default Person;