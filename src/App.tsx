import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string
  }[]
}

const App: React.FC = () => {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'LeBron James',
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      notes: "Allegeric to staying on the same team"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
