import { useState } from "react";

function Player({ player, symbol, isActive, onChangeName }) {
  const [isPlayer, setPlayer] = useState(player);

  // this is used to upated the edit button state and to provide input field.
  const [edit, setEdit] = useState(false);

  function handleClick() {
    //   direct method (This method directly updates the state using the value of prev at the time when setEdit is called. This can lead to unexpected results if the state update is part of multiple rapid or asynchronous updates because prev might not be the most up-to-date state.)
    // return setEdit(!edit);
    // react recommand to use below function approach for updated state.
    setEdit((edit) => !edit);
    if(edit){
      onChangeName(symbol, isPlayer);
    }
  }

  const handleChange = (e) => {
    return setPlayer(e.target.value);
  };

  let players = <span className="player-name">{isPlayer}</span>;

  if (edit) {
    players = (
      <input
        className="player"
        type="text"
        required
        value={isPlayer}
        onChange={handleChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {players}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{edit == true ? "save" : "edit"}</button>
    </li>
  );
}

export default Player;
