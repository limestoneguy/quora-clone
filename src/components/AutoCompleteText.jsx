import React from "react";
import SugesstionItem from "./SugesstionItem";

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["rishabh", "kapil", "Modi"];
    this.placeholder = props.placeholder;
    this.state = {
      suggestions: []
    };
  }

  performSearch = q => {
    const query = q.target.value;
    let suggestions = [];

    /*if (query.length > 0) {
			const regex = new RegExp(`${query}`, 'i');
			suggestions = this.items.sort().filter((v) => regex.test(v));
			console.log(suggestions);
		}
		this.setState(() => ({
			suggestions
		}));*/

    if (query.length >= 5) {
      //TODO: send the value to server and recieve suggestions
      const recievedData = null;
      //TODO: save the data to suggestions array
      //suggestions = recieved data into array;
      this.setState(() => ({
        suggestions
      }));
    }
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    console.log(suggestions);
    return (
      <ul>
        {suggestions.map(item => (
          <SugesstionItem key={item} item={item} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="SearchBox">
        <input
          onChange={this.performSearch}
          type="text"
          placeholder={this.placeholder}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
