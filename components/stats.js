import styles from "../styles/Home.module.css";

function Stats({ players }) {
  console.log(players);
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

  console.log(totalWinRatio2v2);

  return (
    <div className={styles.card}>
      Active characters: {totalPlayers} <br />
      Total games won 2v2: {totalWins2v2} <br />
      Total games lost 2v2: {totalLoss2v2} <br />
      Overall win ratio 2v2: {totalWinRatio2v2.toFixed(0)}%
    </div>
  );
}

export default Stats;
