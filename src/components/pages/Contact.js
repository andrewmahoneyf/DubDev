import React from 'react';
import '../../styles/Contact.scss';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Handles the click of the sumbit button.
  handleClick() {
    var newItem = document.createElement("H4");
    var messageNode = document.createTextNode("MESSAGE SENT!");
    newItem.appendChild(messageNode);
    var spot = document.getElementById("message");
    spot.appendChild(newItem);
    document.getElementById("emailMessage").value = "";
  }
  render() {
    return (
      <section className="jumbotron">
        <h2>Contact Us</h2>
        <p>If you wish to contact us please leave us a message below and we will get back to you as soon as possible!</p>
        <input type="text" placeholder="Name..." id="emailInput" />  <input type="email" placeholder="Email..." id="emailInput" />
        <br /><input type="text" placeholder="Message..." id="emailMessage" />
        <br /><input type="submit" value="Send" id="sendEmail" onClick={this.handleClick} />
        <div id="message" />
      </section>
    );
  }
}