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
    border?: boolean;
}

function App() {
    return (
        <div className="App">

            <Title underline style={{marginTop: "5px"}}>
                <img
                    src={process.env.PUBLIC_URL + '/images/lighthouse.jpeg'}
                    alt="Lighthouse"
                    height={40}
                    style={{marginBottom: "8px"}}
                />
                Hytten`s Lighthouse Bar
                <img
                    src={process.env.PUBLIC_URL + '/images/lighthouse.jpeg'}
                    alt="Lighthouse"
                    height={40}
                    style={{marginBottom: "8px"}}
                />
            </Title>
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
