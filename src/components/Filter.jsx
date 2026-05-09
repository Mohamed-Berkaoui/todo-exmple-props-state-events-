import React from "react";

function Filter({setFilter}) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("pending")}>pending</button>
      <button onClick={() => setFilter("done")}>done</button>
    </div>
  );
}

export default Filter;
