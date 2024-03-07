import Person from "./components/Person"; 
import NoPerson from "./components/NoPerson";
import { useState } from "react"; 

const App = () => {

  const [person, setPerson] = useState({name: "John", age: 25, valid: false});
  const [counter, setCounter] = useState(0);

 const changeUI = () => {
   //ternary operator
    person.valid ? setPerson({name: "John", age: 25, valid: false}) : setPerson({name: "John", age: 25, valid: true})
  }

  /*if (person.valid === true) {
    return (
      <div>
        <Person />
      </div>
    )} else {
      return (
        <div>
          <NoPerson />
        </div>
      )
    }*/
  return (
    <div>
      {person.valid ? <Person /> : <NoPerson />}
      <button onClick={() => changeUI()}>Click me</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

    </div>
  )



};

export default App;
