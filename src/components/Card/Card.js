import React from "react";

const Card = ({ start, end, saveStartTimestamp, saveEndTimestamp }) => {
  return (
    <div className="card">
      Start: {start}
      <br />
      End: {end}
      <br />
      Start Save: {saveStartTimestamp}
      <br />
      End Save: {saveEndTimestamp}
      <br />
    </div>
  );
};

export default Card;
