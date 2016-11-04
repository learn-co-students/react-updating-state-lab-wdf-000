const React = require('react');

class Lucille extends React.Component {
  constructor(){
    super();

    this.countWithLucille = this.countWithLucille.bind(this);

    this.state = {
      i: 0,
      verse: "Count with Lucille"
    }
  }

  countWithLucille(){
    const taunt = [
        "Eeny", "meeny", "miny", "moe.",
        "Catch", "a tiger", "by his", "toe.",
        "If he", "hollers", "let him", "go.",
        "My mother", "told", "me", "to pick", "the very", "best", "and", "you…", "are…", "…", "it",
        "We are all Negan"];
    let goOn = this.state.i;
    if (this.state.i < taunt.length){
      goOn = this.state.i + 1;
    }
    let nextVerse = taunt[goOn-1];
    this.setState({
      i: goOn, verse: nextVerse
    });
  }

  render(){
    return (
      <div>
      <button onClick = {this.countWithLucille}>Count with Lucille</button>
      <h2 className = "center">{this.state.verse}</h2>
      </div>
    )
  }
}

module.exports = Lucille;
