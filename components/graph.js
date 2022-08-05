import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import styles from "../styles/Home.module.css";

function Graph({ player, data }) {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <>
      <button
        className={styles.graph__button}
        onClick={() => setShowGraph((prev) => !prev)}
      >
        {!showGraph ? <MdExpandMore /> : <MdExpandLess />}
      </button>

      {showGraph && (
        <div className={styles.graph}>
          <div>
            2v2 <br />
            {player.rating2v2.map((r2v2, index) => (
              <div key={index}>
                Date: {new Date(r2v2.date).toDateString("en-GB")} Wins:{" "}
                {r2v2.wins} Loss: {r2v2.loss} Rating {r2v2.rating}
              </div>
            ))}
          </div>
          <div>
            3v3 <br />
            {player.rating3v3.map((r3v3, index) => (
              <div key={index}>
                Date: {new Date(r3v3.date).toDateString("en-GB")} Wins:{" "}
                {r3v3.wins} Loss: {r3v3.loss} Rating {r3v3.rating}
              </div>
            ))}
          </div>
          <div>
            RBG <br />
            {player.ratingrbg.map((rrbg, index) => (
              <div key={index}>
                Date: {new Date(rrbg.date).toDateString("en-GB")} Wins:{" "}
                {rrbg.wins} Loss: {rrbg.loss} Rating {rrbg.rating}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Graph;
