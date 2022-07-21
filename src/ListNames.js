import React from "react";

const j = { a: "joao" };

const ListNames = () => {
  return (
    <div>
      <h1>ListNames</h1>
      <ul>
        {j.map((item, key) => {
          return <li key={key}>{item.a}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListNames;
