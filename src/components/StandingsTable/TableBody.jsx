import React from 'react';
import Player from './Player';

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((p) => {
        // console.log(p);
        return <Player key={p.name} data={p} />;
      })}
    </tbody>
  );
}

export default TableBody;
