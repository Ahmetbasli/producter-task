import { Skeleton } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  const [isImageLoaded, setsImageLoaded] = useState(false);
  const image = useRef<HTMLImageElement | null>(null);
  console.log(isImageLoaded);
  const handleLoad = () => {
    setsImageLoaded(true);
  };
  useEffect(() => {
    if (image.current!.complete) setsImageLoaded(true);
  }, []);
  return (
    <>
      <img
        ref={image}
        src={`/icons/${name}.svg`}
        onLoad={handleLoad}
        alt={`${name} icon`}
      />
      {!isImageLoaded && <Skeleton variant="circular" width={16} height={16} />}
    </>
  );
};

export default Icon;
