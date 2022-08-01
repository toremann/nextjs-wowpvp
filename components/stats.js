

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

  return (
    <>
      <b>Active characters:</b> {totalPlayers} <br />
      <b>Total games won 2v2:</b> {totalWins2v2} <br />
      <b>Total games lost 2v2:</b> {totalLoss2v2} <br />
      <b>Total games played 2v2:</b> {totalWins2v2 + totalLoss2v2} <br />
      <b>Overall win ratio 2v2:</b> {totalWinRatio2v2.toFixed(0)}% <br />
      <b>Updated:</b> {new Date(players[1].updatedAt).toLocaleString("en-GB")} <br />
      <b>Database:</b> {isConnected ? (<text>All good</text>) : (<text> Database error</text>)}
    </>
  );
}

export default Stats;
