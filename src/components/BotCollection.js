import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  const [filteredBots, setFilteredBots] = useState(bots);
  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = bots.filter((bot) => {
      return bot.name.toLowerCase().includes(query);
    });
    setFilteredBots(filtered);
  };
  return (
    <div>
      <h2>Bot Collection</h2>
      <input
        type="text"
        id="search"
        placeholder="Search bots"
        onChange={handleSearch}
      />
      <button onClick={() => console.log("Button clicked!")}>search</button>
      {filteredBots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );
}

export default BotCollection;
