import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Interface} from "readline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ursatii Vladimir Cr-193
        </p>
          <InterfaceFive></InterfaceFive>
          <InterfaceSeven></InterfaceSeven>
      </header>
    </div>
  );
}

export default App;

function InputField() {
    const [input, setInput] = useState('');
    console.log(InterfaceFive.label + input);

    return (

        <div style={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <input value={input} onInput={e => setInput((e.target as HTMLTextAreaElement).value)}/>
            <span>{input}</span>
        </div>
    );
}

export interface InterfaceUser{
    name: string;
    age: number;
}
const Vladimir: User = {
    name: 'Vladimir'
}
function InterfaceInputNumber() extends InterfaceInput{

}