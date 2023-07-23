import React, { useEffect, useState } from "react";
import Card from "../../componenets/cards/card.js";
import Button from "../../components/button/button";

function home() {
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
  <div className="App">
      {character.map((character) => (
        <div key={character.id}>
          <Card props={character}></Card>
        </div>
      ))}
    </div>
  );
}
export default home