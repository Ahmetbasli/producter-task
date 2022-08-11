import React, { FC } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  return <img src={`/icons/${name}.svg`} alt={`${name} icon`} />;
};

export default Icon;
