import React, { useEffect } from "react";

const BotProfile = ({ bot }) => {
  // Check if bot prop is defined before accessing its properties
  if (!bot) {
    return <div>No bot selected.</div>;
  }

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>{bot.name}</h2>
      </div>
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
