import React from "react";

const j = {};

const ListNames = () => {
  j.map((item) => {
    console.log(item.a);
  });
  return (
    <div>
      <h1>ListNames</h1>
    </div>
  );
};

export default ListNames;
