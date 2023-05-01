import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotProfile from "./components/BotProfile";
import YourBotArmy from "./components/YourBotArmy";
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
    <div className="App">
      <h2>Bot Collection</h2>
      <BotCollection bots={enlistedBots} enlistBot={enlistBot} />
      {selectedBots.length > 0 && (
        <BotProfile
          bot={selectedBots[0]}
          enlistBot={enlistBot}
          dischargeBot={dischargeBot}
        />
      )}

      <YourBotArmy
        enlistedBots={selectedBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <div className="row">
        <div className="col-12">
          <h2>Enlisted Bots</h2>
          <ul>
            {selectedBots.map((bot) => (
              <li key={bot.id}>
                {bot.name}{" "}
                <button onClick={() => releaseBot(bot)}>Release</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
