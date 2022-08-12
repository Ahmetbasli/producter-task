import React, { FC, useEffect, useRef, useState } from "react";
import { Skeleton } from "@mui/material";

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
    <div>
      <img
        style={{ display: `${!isImageLoaded ? "none" : "block"}` }}
        ref={image}
        src={`/icons/${name}.svg`}
        onLoad={handleLoad}
        alt={`${name} icon`}
      />
      {!isImageLoaded && <Skeleton variant="circular" width={22} height={22} />}
    </div>
  );
};

export default Icon;
