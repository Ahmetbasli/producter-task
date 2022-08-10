import React, { FC } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  return <img src={`/icons/${name}.svg`} alt="logo" />;
};

export default Icon;
