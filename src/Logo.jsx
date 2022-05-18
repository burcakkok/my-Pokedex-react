import React from "react";

const Logo = (props) => {
  const logWhenClicked = () => {
  console.log("Button was clicked!");
  }
  return (
  <div>
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  </div>
  );
};

export default Logo;
