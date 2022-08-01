import { connectToDatabase } from "../util/mongodb";
import styles from "../styles/Home.module.css";
import Player from "../components/player";
import Stats from "../components/stats";
import Head from "next/head";
import { useState } from "react";

export default function Players({ isConnected, players }) {
  const [filter, setFilter] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>PVP ratings</h1>
        <div className={styles.main__split}>
          <div className={styles.left__split}>
            <div className={styles.card}>
              <Stats players={players} isConnected={isConnected} />
            </div>
          </div>

          {isConnected ? (
            <div className={styles.right__split}>
              <div className={styles.grid}>
                {players
                  .filter((players) => players.rating2v2 > 0)
                  .sort((a, b) => (a.rating2v2 < b.rating2v2 ? 1 : -1))
                  .map((player) => (
                    <div className={styles.card} key={player.player}>
                      <Player player={player} />
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <h2 className={styles.subtitle}>Database error.</h2>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { db } = await connectToDatabase();

    const players = await db.collection("players").find({}).toArray();
    return {
      props: {
        isConnected: true,
        players: JSON.parse(JSON.stringify(players)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
