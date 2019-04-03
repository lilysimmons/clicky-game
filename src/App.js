import React, { Component } from "react";
import ParrotCard from "./components/ParrotCard/parrot";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import parrots from "./parrots.json";

class App extends Component {
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
        status: "You lost loser!!!! Click on an image to try again."
      })
      return
    } else {
      clickedParrotIDs.push(id);
    }
   

    if (clickedParrotIDs.length === this.state.parrots.length) {
      this.setState({
        score: 0,
        // status: "You won! Your memory is on fleek.",
        clickedParrotIDs: []
      }); 
        alert("You won! Your memory is on fleek. Play again?");
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

  render() {
    return (
      <Wrapper>
        <Header>
        <p style={{textAlign: "center"}}>Test your memory! You can only click an image once. It's harder than you think. Score of 12 wins the game.</p>
          <h2 style={{textAlign: "center"}}>Score: {this.state.score} | Score to meet: {this.state.topScore}</h2>
          <h3 style={{textAlign: "center", color: "red"}}>{this.state.status}</h3>
        </Header>
        <Title>Clicky Parrot Shuffle</Title>
        {this.state.parrots.map(parrot => (
          <ParrotCard
            shuffle={this.shuffle}
            id={parrot.id}
            key={parrot.id}
            // name={parrot.name}
            image={parrot.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;










