import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [word, setWord] = useState();
  const [audio, setAudio] = useState();
  const [meaning, setMeaning] = useState([]);
  const [all, setAll] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeaning(data.data);
      setAll(data.data[0]);
      const url = meaning[0].phonetics[0].audio;
      setAudio(url);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, [word]);

  console.log(word)
  const Search = () => {
    getData();
    setWord("");
  };

  return (
    <>
      <div className="home">
        <div className="title">Dictionary</div>
        <div className="input">
          <input
            type="text"
            value={word}
            onKeyPress={(e) => e.key === 'Enter' && Search()}
            onChange={(e) => setWord(e.target.value)}
          />
          <button className="searchbtn" onClick={Search}>
            Search
          </button>
        </div>
      </div>
      <div>
        {word === "" ? (
          <Home audio={audio} all={all} meaning={meaning} />
        ) : (
          <strong
            style={{
              textAlign: "center",
              display: "block",
              lineHeight: "40px",
            }}
          >
            Facts are not science - as dictionary is not literature.
          </strong>
        )}
      </div>
    </>
  );
}

export default App;
