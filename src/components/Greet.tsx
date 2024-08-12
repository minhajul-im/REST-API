import React from "react";

const Greet = ({ name }: { name: string }) => {
  return (
    <React.Fragment>
      <h1>Hello {name} </h1>
    </React.Fragment>
  );
};

export default Greet;
