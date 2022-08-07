import styles from "../styles/Home.module.css";
import Image from "next/image";

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

  const classIcons = {
    1: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-warrior-vector.f346a16523efa8fc66ba0c72b3d8d9b5.png", // Warrior
    2: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-paladin-vector.9665329a4454328f61097d121f0939df.png", // Paladin
    3: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-hunter-vector.095639e31b058f024eaf9fa96758cfdb.png", // Hunter
    4: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-rogue-vector.cc2ea8017b7df7c6d19f37640f627485.png", // Rogue
    5: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-priest-vector.d7f94632cf32cb6d4e332549f7c8347a.png", // Priest
    6: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-shaman-vector.d07d941c902b378020a1aa9b857dd5f8.png",
    7: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-shaman-vector.d07d941c902b378020a1aa9b857dd5f8.png", // Shaman
    8: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-shaman-vector.d07d941c902b378020a1aa9b857dd5f8.png",
    9: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-warlock-vector.26da6762460b000b91d4d748d8274e35.png", // Warlock
    10: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-shaman-vector.d07d941c902b378020a1aa9b857dd5f8.png",
    11: "https://assets.worldofwarcraft.com/static/components/GameIcon/GameIcon-class-druid-vector.43960391b0b03a656707fe7b9873a526.png", // Druid
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

  const playedrbg = player.winsrbg + player.lossrbg;
  const winraterbg =
    (Number(player.winsrbg) /
      (Number(player.winsrbg) + Number(player.lossrbg))) *
    100;

  const checkNan2v2 = isNaN(winrate2v2);

  const checkNan3v3 = isNaN(winrate3v3);

  const checkNanRBG = isNaN(winraterbg);

  let [secondLast, last] = player.rating2v2.slice(-2);

  var ratingChange2v2 = last.rating - secondLast.rating;

  return (
    <>
      <div className={styles.card__top}>
        <div className={styles.card__playername}>
          <h3>
            {player.player} - {player.realm} <br /> {classes[player.class]} -{" "}
            <b>ilvl:</b> {player.ilvl}
          </h3>
          <br />
        </div>
        <div className={styles.card__icon}>
          <Image src={classIcons[player.class]} width={40} height={40} />
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stats__divs}>
          <p>
            <b>2v2:</b>
          </p>
          <p>
            <b>Rating:</b> {player.currentrating2v2} {ratingChange2v2}
          </p>
          <p>
            <b>Wins</b> {player.wins2v2}
          </p>
          <p>
            <b>Loss:</b> {player.loss2v2}
          </p>
          <p>
            <b>Games:</b> {played2v2}
          </p>
          <p>
            <b>Ratio:</b>{" "}
            {checkNan2v2 ? (
              <text>0</text>
            ) : (
              <text>{winrate2v2.toFixed(0)}%</text>
            )}
          </p>
        </div>
        <div className={styles.stats__divs}>
          <p>
            <b>3v3:</b>
          </p>
          <p>
            <b>Rating:</b> {player.currentrating3v3}
          </p>
          <p>
            <b>Wins</b> {player.wins3v3}
          </p>
          <p>
            <b>Loss:</b> {player.loss3v3}
          </p>
          <p>
            <b>Games:</b> {played3v3}
          </p>
          <p>
            <b>Ratio:</b>{" "}
            {checkNan3v3 ? (
              <text>0</text>
            ) : (
              <text>{winrate3v3.toFixed(0)}%</text>
            )}
          </p>
        </div>
        <div className={styles.stats__divs}>
          <p>
            <b>RBG:</b>
          </p>
          <p>
            <b>Rating:</b> {player.currentratingrbg}
          </p>
          <p>
            <b>Wins</b> {player.winsrbg}
          </p>
          <p>
            <b>Loss:</b> {player.lossrbg}
          </p>
          <p>
            <b>Games:</b> {playedrbg}
          </p>
          <p>
            <b>Ratio:</b>{" "}
            {checkNanRBG ? (
              <text>0</text>
            ) : (
              <text>{winraterbg.toFixed(0)}%</text>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Player;
