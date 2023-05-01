import React from "react";

const BotProfile = ({ bot }) => {
  // Check if bot prop is defined before accessing its properties
  if (!bot) {
    return <div>No bot selected.</div>;
  }

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={`${bot.name} avatar`} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotProfile;
