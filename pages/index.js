import { connectToDatabase } from "../util/mongodb";
import styles from "../styles/Home.module.css";
import Player from "../components/player";
import Stats from "../components/stats";
import Head from "next/head";

export default function Players({ isConnected, players }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>PVP ratings</h1>
        {isConnected ? (
          <h2 className={styles.subtitle}>You are connected to MongoDB</h2>
        ) : (
          <h2 className={styles.subtitle}>
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}

        <div className={styles.grid}>
          <Stats players={players} />
          {players
            .filter((players) => players.rating2v2 > 0)
            .sort((a, b) => (a.rating2v2 < b.rating2v2 ? 1 : -1))
            .map((player) => (
              <div className={styles.card} key={player.player}>
                <Player player={player} />
              </div>
            ))}
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