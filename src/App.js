import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotProfile from "./components/BotProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/bots`)
      .then((res) => res.json())
      .then((data) => setEnlistedBots(data))
      .catch((error) => console.log(error));
  }, []);

  const enlistBot = (bot) => {
    // Check if a bot is already enlisted
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:4000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setSelectedBots(
          selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <BotCollection bots={enlistedBots} enlistBot={enlistBot} />
      <BotProfile bot={selectedBots[0]} />
      <YourBotArmy
        enlistedBots={selectedBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
