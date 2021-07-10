import React from 'react';
import './App.css';
import {drinks} from "./data/drinks";
import Title from "antd/es/typography/Title";
import {DrinkList} from "./components/drinks";
import {shots} from "./data/shots";
import {beers} from "./data/beers";
import {Divider} from "antd";

export interface Drink {
    name: string;
    description?: string;
    image: string;
    inactive?: boolean;
}

function App() {
    return (
        <div className="App">
            <Title underline>Hytten`s Lighthouse Bar</Title>
            <div style={{maxWidth: "800px"}}>
                <DrinkList title="Drinks" data={drinks}/>
                <Divider/>
                <DrinkList title="Shots" data={shots}/>
                <Divider/>
                <DrinkList title="Øl" data={beers}/>
            </div>
        </div>
    );
}

export default App;
