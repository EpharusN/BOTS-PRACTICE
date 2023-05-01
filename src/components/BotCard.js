import React from "react";

const BotCard = ({ bot, enlistBot }) => {
  const handleClick = () => {
    enlistBot(bot);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt={`${bot.name} avatar`} />
        <p className="card-text">Health: {bot.health}</p>
        <p className="card-text">Damage: {bot.damage}</p>
        <p className="card-text">Armor: {bot.armor}</p>
        <p className="card-text">Class: {bot.bot_class}</p>
        <p className="card-text">Catchphrase: {bot.catchphrase}</p>
        <button className="card-button" onClick={handleClick}>
          Enlist
        </button>
      </div>
    </div>
  );
};

export default BotCard;
