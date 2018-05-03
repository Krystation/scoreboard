function Application() {
  return (
    <div className="application">
      <div className="header">
        <h1>SCOREBOARD</h1>
      </div>
      <div className="players">
        <div className="player">
          <span className="player_name">Krys</span>
          <div className="player_score">
            <div className="counter">
              <button className="counter_action decrement"> - </button>
              <div className="counter_score"> 31 </div>
              <button className="counter_action increment"> + </button>
            </div>
          </div>
        </div>
        {/*Second Player*/}
        <div className="player">
          <span className="player_name">John Wick</span>
          <div className="player_score">
            <div className="counter">
              <button className="counter_action decrement"> - </button>
              <div className="counter_score"> 13 </div>
              <button className="counter_action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
