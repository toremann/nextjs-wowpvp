import styles from "../styles/Home.module.css";

function Player({ player }) {
  const classes = {
    1: <text style={{ color: "brown" }}>Warrior</text>,
    2: <text style={{ color: "pink" }}>Paladin</text>,
    3: <text style={{ color: "green" }}>Hunter</text>,
    4: <text style={{ color: "yellow" }}>Rogue</text>,
    5: <text style={{ color: "white" }}>Priest</text>,
    6: "Unknown class",
    7: <text style={{ color: "blue" }}>Shaman</text>,
    8: "Unknown class",
    9: "Warlock",
    10: "Unknown class",
    11: <text style={{ color: "orange" }}>Druid</text>,
  };

  const played2v2 = player.wins2v2 + player.loss2v2;
  const winrate2v2 =
    (Number(player.wins2v2) /
      (Number(player.wins2v2) + Number(player.loss2v2))) *
    100;

  const played3v3 = player.wins3v3 + player.loss3v3;
  const winrate3v3 =
    (Number(player.wins3v3) /
      (Number(player.wins3v3) + Number(player.loss3v3))) *
    100;

  const checkNan = isNaN(winrate3v3);

  return (
    <>
      <h3>
        {player.player} - {player.realm} <br /> {classes[player.class]} -{" "}
        <b>ilvl:</b> {player.ilvl}
      </h3>
      <div className={styles.stats}>
        <div>
          <p>
            <b>2v2:</b>
          </p>
          <p>
            <b>rating:</b> {player.rating2v2}
          </p>
          <p>
            <b>wins</b> {player.wins2v2}
          </p>
          <p>
            <b>loss:</b> {player.loss2v2}
          </p>
          <p>
            <b>games played:</b> {played2v2}
          </p>
          <p>
            <b>ratio:</b> {winrate2v2.toFixed(0)}%
          </p>
        </div>
        <div>
          <p>
            <b>3v3:</b>
          </p>
          <p>
            <b>rating:</b> {player.rating3v3}
          </p>
          <p>
            <b>wins</b> {player.wins3v3}
          </p>
          <p>
            <b>loss:</b> {player.loss3v3}
          </p>
          <p>
            <b>games played:</b> {played3v3}
          </p>
          <p>
            <b>ratio:</b>{" "}
            {checkNan ? <text>0</text> : <text>{winrate3v3.toFixed(0)}%</text>}
          </p>
        </div>
      </div>
    </>
  );
}

export default Player;
