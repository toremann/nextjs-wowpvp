import { connectToDatabase } from "../util/mongodb";
import styles from "../styles/Home.module.css";
import Player from "../components/player";
import Stats from "../components/stats";
import Graph from "../components/graph";
import Head from "next/head";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Players({ isConnected, players }) {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("currentrating2v2");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        currentrating2v2: "currentrating2v2",
        currentrating3v3: "currentrating3v3",
        currentratingrbg: "currentratingrbg",
      };
      const sortProperty = types[type];
      const sorted = [...players].sort((a, b) =>
        a[sortProperty] < b[sortProperty] ? 1 : -1
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>PVP ratings</h1>
        <div className={styles.sort__buttons}>
          <button
            value="currentrating2v2"
            onClick={(e) => setSortType(e.target.value)}
          >
            Sort by 2v2
          </button>
          <button
            value="currentrating3v3"
            onClick={(e) => setSortType(e.target.value)}
          >
            Sort by 3v3
          </button>
          <button
            value="currentratingrbg"
            onClick={(e) => setSortType(e.target.value)}
          >
            Sort by RBG
          </button>
        </div>
        <div className={styles.main__split}>
          <div className={styles.left__split}>
            <div className={styles.card__totals}>
              <Stats players={players} isConnected={isConnected} />
            </div>
          </div>

          {isConnected ? (
            <div className={styles.right__split}>
              <div className={styles.grid}>
                {data.map((player, index) => (
                  <div className={styles.card} key={index}>
                    <Player player={player} />

                    <Graph player={player} index={index} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h2 className={styles.subtitle}>Database error.</h2>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <AiFillGithub size={40} />
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { db } = await connectToDatabase();

    const players = await db.collection("player2").find({}).toArray();
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
