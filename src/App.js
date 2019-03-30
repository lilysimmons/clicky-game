import React, { Component } from "react";
import ParrotCard from "./components/ParrotCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import parrots from "./parrots.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    parrots
  };

  Score = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const parrots = this.state.parrots.filter(parrot => parrot.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ parrots });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Parrot List</Title>
        {this.state.parrots.map(parrot => (
          <ParrotCard
            // removeFriend={this.removeParrot}
            id={parrot.id}
            key={parrot.id}
            name={parrot.name}
            image={parrot.image}
            // occupation={parrot.occupation}
            // location={parrot.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;










// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
