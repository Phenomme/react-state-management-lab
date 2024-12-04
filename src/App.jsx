import React, { useState } from 'react';
import './App.css';

const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }

    setTeam((prevTeam) => [...prevTeam, fighter]);
    setMoney((prevMoney) => prevMoney - fighter.price);
    setTotalStrength((prevStrength) => prevStrength + fighter.strength);
    setTotalAgility((prevAgility) => prevAgility + fighter.agility);
  };

  const handleRemoveFighter = (index) => {
    const fighterToRemove = team[index];
    setTeam((prevTeam) => prevTeam.filter((_, i) => i !== index));
    setMoney((prevMoney) => prevMoney + fighterToRemove.price);
    setTotalStrength((prevStrength) => prevStrength - fighterToRemove.strength);
    setTotalAgility((prevAgility) => prevAgility - fighterToRemove.agility);
  };

  return (
    <div className="App">
      <h1>Zombie Apocalypse Team</h1>
      <p>Money: ${money}</p>
      <div className="fighters">
        <h2>Available Fighters</h2>
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index} className="fighter">
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="team">
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index} className="team-member">
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total Team Strength: {totalStrength}</p>
        <p>Total Team Agility: {totalAgility}</p>
      </div>
    </div>
  );
}

export default App;


