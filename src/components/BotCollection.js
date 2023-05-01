import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import BotProfile from "./BotProfile";

function BotCollection({ bots, enlistBot }) {
  const [filteredBots, setFilteredBots] = useState(bots);
  const [selectedBot, setSelectedBot] = useState(null);

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

  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
  };

  return (
    <div className="box">
      <h1>BOT ARMY BUILDER</h1>
      <input
        type="text"
        id="search"
        placeholder="Search bots"
        onChange={handleSearch}
      />
      <button onClick={handleSearch}>search</button>
      {selectedBot && <BotProfile bot={selectedBot} />}
      {filteredBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          enlistBot={enlistBot}
          onSelect={handleBotSelect}
        />
      ))}
    </div>
  );
}

export default BotCollection;
