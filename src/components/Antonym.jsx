import React from "react";

const Antonym = ({ meaning }) => {
  return (
    <>
      {meaning.map((ant) =>
        ant.meanings.map((mean) =>
          mean.definitions.map((def) => def.antonyms.map((a) => <li>{a}</li>))
        )
      )}
    </>
  );
};

export default Antonym;
