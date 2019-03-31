import React, { Component } from "react";
import ParrotCard from "./components/ParrotCard/parrot";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import parrots from "./parrots.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    parrots,
    clickedParrotIDs: [],
    score: 0,
    topScore: 12,
    status: ""
  }



  shuffle = (id) => {
    console.log("CAW CAW")
    let clickedParrotIDs = this.state.clickedParrotIDs;

    if (clickedParrotIDs.includes(id)) {
      this.setState({
        clickedParrotIDs: [],
        score: 0,
        status: "You lost loser!!!! Click on an image to try again"
      })
      return
    } else {
      clickedParrotIDs.push(id)
    }

    if (clickedParrotIDs === 12) {
      this.setState({
        score: 12,
        status: "You won! Your memory is on fleek.",
        clickedParrotIDs: []
      });
      alert("Play again?");
      return
    }

    this.setState({ parrots, clickedParrotIDs, score: clickedParrotIDs.length, status: "" });

    //fisher-yates shuffle
    var i = 0, j = 0, temp = null

    for (i = parrots.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = parrots[i]
      parrots[i] = parrots[j]
      parrots[j] = temp
    }


  };



  //for (let i = parrots.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   [parrots[i], parrots[j]] = [parrots[j], parrots[i]];
  // };


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
        {/* <Header>
          <h1>P</h1>
        </Header> */}
        <Title>Clicky Parrot Shuffle</Title>
        {this.state.parrots.map(parrot => (
          <ParrotCard
            // removeFriend={this.removeParrot}
            shuffle={this.shuffle}
            id={parrot.id}
            key={parrot.id}
            // name={parrot.name}
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
