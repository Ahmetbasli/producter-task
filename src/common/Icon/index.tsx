import React, { FC } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
      <img src={`/icons/${name}.svg`} alt="logo" />
    </div>
  );
};

export default Icon;
