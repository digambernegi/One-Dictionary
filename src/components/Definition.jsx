import React, { useEffect, useState } from "react";

const Definition = ({ meaning }) => {
  return (
    <div className="definiton">
      {meaning.map((mean) =>
        mean.meanings.map((item) =>
          item.definitions.map((def) => (
            <li>
              {def.definition}
            </li>
          ))
        )
      )}
    </div>
  );
};

export default Definition;
