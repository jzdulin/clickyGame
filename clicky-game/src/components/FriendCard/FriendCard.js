import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );


// handleIncrement = () => {
//   // We always use the setState method to update a component's state
//   this.setState({ count: this.state.count + 1 });
// };

const FriendCard = props => (
  <div className="img-container">
    <input className="image-input" data-type={props.id} type="image" src={props.image} alt={props.name} onClick={this.handleIncrement}>
    </input>
    {/* <a onClick={this.handleIncrement} className="image-input">
      <img alt={props.name} src={props.image} />
    </a> */}
  </div>

);

export default FriendCard;
