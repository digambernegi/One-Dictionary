import React from "react";
import Definition from "./components/Definition";
import Synonym from "./components/Synonym";
import Antonym from "./components/Antonym";
import Example from "./components/Example";
import { motion } from "framer-motion";


const Home = ({ audio, all, meaning }) => {
  return (
    <motion.div className="main"
    initial={{ opacity: 0, y: "100px" }}
    animate={{ opacity: 1, y: "0px" }}>
      <h1 className="word">'{all.word}'</h1>

      <div className="audio">
        {audio ? <audio src={audio} controls></audio> : "No audio found!"}
      </div>

      <div className="definition">
        <strong>Meaning & Definition</strong>
        <div className="definition__list">
          <ul>
            <Definition meaning={meaning} />
          </ul>
        </div>
      </div>

      <div className="example">
        <strong>Example : </strong>
        <Example meaning={meaning} />
      </div>

      <div className="synonym">
        <strong>Synonym</strong>
        <div className="synonym__list">
          <ul>
            <Synonym meaning={meaning} />
          </ul>
        </div>
      </div>

      <div className="antonym">
        <strong>Antonym</strong>
        <div className="antonym__list">
          <ul>
            <Antonym meaning={meaning} />
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
