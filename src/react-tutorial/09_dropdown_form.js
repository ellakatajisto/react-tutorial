import React from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'GroceryShopping'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite category is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please let us know what your favorite category is:
          <select value={this.state.value} onChange={this.handleChange}>

            <option value="GroceryShopping">Grocery Shopping</option>
            <option value="Babysitting">Babysitting</option>
            <option value="DogWalking">Dog walking</option>
            <option value="RunErrands">Run Errands</option>
            <option value="FriendlyChat">Friendly Chat</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

    );
    
  }
}



ReactDOM.render(
  <FlavorForm />,
  document.getElementById('09_dropdown_form')
);
