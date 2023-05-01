import React from "react";

function YourBotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  const handleDischargeBot = (bot) => {
    // Call the dischargeBot function to remove the bot from the backend
    dischargeBot(bot);
    // Remove the bot from the enlistedBots state in the frontend
    releaseBot(bot);
  };

  let botCards = null;
  if (enlistedBots) {
    botCards = enlistedBots.map((bot) => (
      <div key={bot.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{bot.botName}</h5>
          <p className="card-text">{bot.catchphrase}</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDischargeBot(bot)}
          >
            <i className="fa fa-trash"></i>
            Discharge
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <h3>Your Bot Army</h3>
      <div className="card-deck">{botCards}</div>
    </div>
  );
}

export default YourBotArmy;
