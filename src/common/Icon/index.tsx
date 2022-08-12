import { Skeleton } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  const [isImageLoaded, setsImageLoaded] = useState(false);
  console.log(isImageLoaded);
  const handleLoad = () => {
    setsImageLoaded(true);
  };

  return (
    <>
      {!isImageLoaded && <Skeleton variant="circular" width={16} height={16} />}
      <img
        src={`/icons/${name}.svg`}
        onLoad={handleLoad}
        alt={`${name} icon`}
      />
    </>
  );
};

export default Icon;
