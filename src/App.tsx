import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { Forms } from './components/Forms';
import {CustomCards} from "./components/CustomCard";
import {IContentModel} from "./interfaces/interface";
import {LayoutCustom} from "./components/LayoutCustom";

function App() {
  return (
    <div className="App">
      <LayoutCustom></LayoutCustom>

    </div>
  );
}

export default App;
