import Image from "next/image";
import React, { FC } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  return (
    <Image
      width={24}
      height={24}
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
    />
  );
};

export default Icon;
