import './App.css'
import Greeting from './components/Greeting';
import FavFood from './components/FavFood';
import Animals from './components/Animals';
import List from './components/List';
import TodoList from './components/TodoList';
import Button from './components/Button';
import ColorButtons from './components/ColorButtons';
import Person from './components/Person';
import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);
  const foodItems = ['biryani', 'bonda', 'baigan', 'aviyal', 'naan'];
  const handleClick = () => {
    window.location.href = "http://www.google.com";
  }
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount(count + 1);
  };
  return (
    <>
        <h1>Hello, World!</h1>
        <Greeting/>
        <FavFood/>
        <Animals/>
        <List foodItems={foodItems}/>
        <TodoList/>
        <Button handleClick={handleClick}/>
        <Button text="Don't Click!" color="red" />
        <ColorButtons backgroundColor={backgroundColor} COLORS={COLORS} count={count} onButtonClick={onButtonClick} />
        <Person/>
    </>
  )
}

export default App;
