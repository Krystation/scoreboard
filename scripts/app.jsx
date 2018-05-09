// > Variable
// >> Players array
var players = [
  {name: 'Krys Flores', score: 24, id: 0},
  {name: 'Oliver Munoz', score: 27, id: 1},
  {name: 'Clari Beceril', score: 27, id: 2}
];
// > Header
function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
// >> Header propTypes
Application.propTypes = {
  title: React.PropTypes.string.isRequired
};

// > Player Counter
var Counter = React.createClass({
  // >> Counter Prop Types
  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },
  getInitialState: function(){
    return{
      score: this.props.initialScore
    }
  },
  incrementScore: function(e){
    this.setState({
      score: this.state.score + 1
    });
  },
  decrementScore: function(e){
    if(!this.state.score == 0){
      this.setState({
        score: this.state.score - 1
      });
    }
  },
  render: function(){ //Returns the virtual DOM
    return(
      <div className="counter">
        <button className="counter_action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter_score"> {this.state.score} </div>
        <button className="counter_action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
});

// > Player
function Player(props){
  return(
    <div className="player">
      <span className="player_name">{props.name}</span>
      <div className="player_score">
        <Counter initialScore={props.score}/>
      </div>
    </div>
  );
}
// >> Player propTypes
Application.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

// > Application
function Application(props) {
  return (
    <div className="application">
      <Header title={props.title}/>
      <div className="players">
        {props.players.map(function(player){
          return <Player name={player.name} score={player.score} key={player.id}/>
        })}
      </div>
    </div>
  );
}
Application.propTypes = {
  title: React.PropTypes.string,
  player: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  }))
};
Application.defaultProps = {
  title: 'Scoreboard'
}
ReactDOM.render(<Application players={players}/>, document.getElementById('container'));
