import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function Graph({ player }) {
  const [showGraph, setShowGraph] = useState(false);
  return (
    <>
      <button onClick={() => setShowGraph((prev) => !prev)}>
        {!showGraph ? <MdExpandMore /> : <MdExpandLess />}
      </button>

      {showGraph && (
        <div>
          <div className="card__graph">Arena history: {player.player}</div>
          <div>Game 1: </div>
          <div>Game 1: </div>
          <div>Game 1: </div>
          <div>Game 1: </div>
        </div>
      )}
    </>
  );
}

export default Graph;
