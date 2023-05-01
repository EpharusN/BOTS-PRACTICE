import React from "react";

const BotCard = ({ bot, enlistBot }) => {
  const handleClick = () => {
    enlistBot(bot);
  };

  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={`${bot.name} avatar`} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={handleClick}>Enlist</button>
    </div>
  );
};

export default BotCard;
