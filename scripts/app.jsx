// > Variable
// >> Players array
var players = [
  {name: 'Krys Flores', score: 24, id: 0},
  {name: 'Oliver Munoz', score: 27, id: 1},
  {name: 'Clari Beceril', score: 30, id: 2}
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
Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

// > Player Counter
function Counter(props){
  return(
    <div className="counter">
      <button className="counter_action decrement"> - </button>
      <div className="counter_score"> {props.score} </div>
      <button className="counter_action increment"> + </button>
    </div>
  );
}
// >> Counter Prop Types
Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  decrementScore: React.PropTypes.func.isRequired,
  incrementScore: React.PropTypes.func.isRequired
};


// > Player
function Player(props){
  return(
    <div className="player">
      <span className="player_name">{props.name}</span>
      <div className="player_score">
        <Counter score={props.score}/>
      </div>
    </div>
  );
}
// >> Player propTypes
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

// > Application
var Application = React.createClass({
  // >> Application PropTypes
  propTypes:{
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    }))
  },
  getDefaultProps: function(){
    return{
      title: 'Scoreboard'
    };
  },
  getInitialState: function(){
    return {
      players: this.props.initialPlayers
    };
  },
  render: function(){
    return(
      <div className="application">
        <Header title={this.props.title}/>
        <div className="players">
          {this.state.players.map(function(player){
            return <Player name={player.name} score={player.score} key={player.id}/>
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={players}/>, document.getElementById('container'));
