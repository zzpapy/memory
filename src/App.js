import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  handleCardClick(card){
    console.log(card, 'clicked')
  }

  render() {
      const won = new Date().getSeconds() % 2 === 0
     console.log(won)
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
        {won && <p>GAGNÉ !</p>}
      </div>
    )
  }
}
export default App