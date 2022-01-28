import React from "react";

const Synonym = ({ meaning }) => {
  return (
    <>
      {meaning.map((syn) =>
        syn.meanings.map((mean) =>
          mean.definitions.map((def) =>
            def.synonyms.map((synonym) => <li>{synonym}</li>)
          )
        )
      )}
    </>
  );
};

export default Synonym;
