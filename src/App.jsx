// // import './App.css';
// // import HelloWorld from './HelloWorld';
// // import Container from './Container';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Container><HelloWorld></HelloWorld></Container>
// //       <HelloWorld></HelloWorld>
// //     </div>
// //   );
// // }
// // export default App;

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
function App() {
  const logWhenClicked = () => {
  console.log("Button was clicked!");
  };
  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}


export default App;
