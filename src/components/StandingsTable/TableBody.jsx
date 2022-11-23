import React from 'react';
import Player from './Player';

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((p) => {
        <Player key={p.id} data={{ ...p }} />;
      })}
    </tbody>
  );
}

export default TableBody;
