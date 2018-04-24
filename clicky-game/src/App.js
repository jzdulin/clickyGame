import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    count:0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    console.log("I CLICK")
    // this.setState({ count: this.state.count + 1 });
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Counter></Counter>
        <Title>Clicky Game</Title>
        {this.state.images.map(image => (
          <FriendCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
