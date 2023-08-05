import React, { useEffect, useState } from "react";
import Card from "../../componentes/cards/card.jsx";

// import './src/home/home.css';

function Home() {
  const [character, setcharacter] = useState([]);
async function fetchDatacharacter() {
  const response = await fetch("https://hp-api.onrender.com/api/characters", {
    method: "GET",
  });
  const data = await response.json();
  const dataResult = data;
  console.log(dataResult);
  setcharacter(dataResult);
}
useEffect(() => {
  fetchDatacharacter();
}, []);

return (
  <div className="Home">
   
      {character.map((character) => (
        <div key={character.id}>
          <Card id ={character.id} 
          name = {character.name} 
          image = {character.image}
          house = {character.house}
           ></Card>
            
        </div>
      ))}
    </div>
  );
}
export default Home;