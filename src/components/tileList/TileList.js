import React from "react";
import { Tile } from "../../components/tile/Tile"

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} name={item.name} description={item.description} />
      ))}
    </div>
  );
};
