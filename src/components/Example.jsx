import React from "react";

const Example = ({ meaning }) => {
  return (
    <>
      {meaning.map((ex) =>
        ex.meanings.map((mean) =>
          mean.definitions.map((def) => <span>{def.example}</span>)
        )
      )}
    </>
  );
};

export default Example;
