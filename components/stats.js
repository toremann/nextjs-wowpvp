import styles from "../styles/Home.module.css";

function Stats({ players, isConnected }) {
  const totalPlayers = players.length;

  const totalWins2v2 = players.reduce(function (acc, obj) {
    return acc + obj.wins2v2;
  }, 0);

  const totalLoss2v2 = players.reduce(function (acc, obj) {
    return acc + obj.loss2v2;
  }, 0);

  const totalWinRatio2v2 =
    (Number(totalWins2v2) / (Number(totalWins2v2) + Number(totalLoss2v2))) *
    100;

  const totalWins3v3 = players.reduce(function (acc, obj) {
    return acc + obj.wins3v3;
  }, 0);

  const totalLoss3v3 = players.reduce(function (acc, obj) {
    return acc + obj.loss3v3;
  }, 0);

  const totalWinRatio3v3 =
    (Number(totalWins3v3) / (Number(totalWins3v3) + Number(totalLoss3v3))) *
    100;

  return (
    <>
      <h3>TOTALS</h3>
      <div className={styles.stats__total}>
        <b>TOTAL 2v2:</b>
        <br />
        <b>Wins:</b> {totalWins2v2} <br />
        <b>Loss:</b> {totalLoss2v2} <br />
        <b>Games:</b> {totalWins2v2 + totalLoss2v2} <br />
        <b>Ratio:</b> {totalWinRatio2v2.toFixed(0)}% <br />
        <br />
        <b>TOTAL 3v3:</b> <br />
        <b>Wins:</b> {totalWins3v3} <br />
        <b>Loss:</b> {totalLoss3v3} <br />
        <b>Games:</b> {totalWins3v3 + totalLoss3v3} <br />
        <b>Ratio:</b> {totalWinRatio3v3.toFixed(0)}% <br />
        <br />
        <b>Active characters:</b> {totalPlayers} <br />
        <b>Updated:</b> {new Date(players[1].updatedAt).toLocaleString("en-GB")}
        <br />
        <b>Database:</b>{" "}
        {isConnected ? (
          <text style={{ color: "green" }}>All good</text>
        ) : (
          <text style={{ color: "red" }}> Database error</text>
        )}
      </div>
    </>
  );
}

export default Stats;
