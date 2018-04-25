import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import images from "./images.json";
import "./App.css";

let testArray = []
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
  };

  //shuffles the images in an array so they all switch places
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //when an image is clicked this happens
  handleIncrement = id => {
    //grab the images
    const images = this.state.images;
    //grab the clicked image
    const clickedImage = images.filter(image => image.id === id)


    for (let i = 0; i < testArray.length; i++) {
      //if a number in the array is equal to the id of the clicked image
      if (testArray[i] === clickedImage[0].id) {
        //if the current score is greater than top score set top score to = the current score
        if (this.state.curScore > this.state.topScore) {
          this.setState({ topScore: this.state.curScore });
        }
        //change the message
        this.setState({ message: "Oops! Try again!" });
        //reset current score
        this.setState({ curScore: 0 });
        //empty the array
        testArray = []
        return
      }
    }
    //If they get all 12
    if (1 + this.state.curScore === 12) {
      this.setState({ message: "Winner! Click an image to play again" })
      this.setState({ curScore: 0 });
      this.setState({ topScore: this.state.curScore +1 });
      return
    }
    //else push the id into the array
    testArray.push(clickedImage[0].id)

    //increase current score and give a nice message
    this.setState({ message: "Well Done! Click another!" })
    this.setState({ curScore: this.state.curScore + 1 });

    // shuffle those images
    this.shuffleArray(images)


  };

  //render it all together
  render() {
    return (
      <Wrapper>
        <Title>
        <Navbar
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
          Click on an image to start. But don't click the same image twice!
        </Title>
        {this.state.images.map(image => (
          <FriendCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            // count={this.state.count}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
