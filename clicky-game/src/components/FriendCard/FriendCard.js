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
      {/* <button type= "button className="image-input" data-type={props.id}< img src={props.image}> onClick={this.handleIncrement}>
    </button> */}
    <input className="image-input" value={props.id} type="image" src={props.image} alt={props.name} onClick={() => props.handleIncrement(props.id)}>
    </input>
    {/* <a onClick={this.handleIncrement} className="image-input">
      <img alt={props.name} src={props.image} />
    </a> */}
  </div>

);

export default FriendCard;
