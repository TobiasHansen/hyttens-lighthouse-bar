import React, {useEffect, useState} from 'react';
import './App.css';
import {DrinkList} from "./components/drinks";
import {Divider} from "antd";
import Firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";
import Title from "antd/es/typography/Title";

if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
} else {
    Firebase.app(); // if already initialized, use that one
}

const beersRef = Firebase.firestore()
    .collection("/beers")
const drinksRef = Firebase.firestore()
    .collection("/drinks")
const shotsRef = Firebase.firestore()
    .collection("/shots")

export interface Drink {
    id: string;
    type: string;

    name: string;
    description?: string;
    image: string;
    inactive?: boolean;
    border?: boolean;
}

function App() {
    const [beers, setBeers] = useState<Drink[]>([])
    const [shots, setShots] = useState<Drink[]>([])
    const [drinks, setDrinks] = useState<Drink[]>([])

    useEffect(() => {
        shotsRef.get().then(result => {
            const tempShots: Drink[] = []
            result.forEach(shot => tempShots.push(shot.data() as Drink))
            setShots(tempShots)
        })
        beersRef.get().then(result => {
            const tempBeers: Drink[] = []
            result.forEach(beer => tempBeers.push(beer.data() as Drink))
            setBeers(tempBeers)
        })
        drinksRef.get().then(result => {
            const tempDrinks: Drink[] = []
            result.forEach(shot => tempDrinks.push(shot.data() as Drink))
            setDrinks(tempDrinks)
        })
    }, [])

    return (
        <div className="App">
            <Title underline style={{marginTop: "5px"}}>
                <img
                    src={process.env.PUBLIC_URL + '/images/lighthouse.jpeg'}
                    alt="Lighthouse"
                    height={40}
                    style={{marginBottom: "8px"}}
                />
                Lighthouse Bar
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
