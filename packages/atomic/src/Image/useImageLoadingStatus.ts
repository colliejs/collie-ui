import { URL } from "@c3/types";
import React from "react";

export const useImageLoadingStatus = (src: URL) => {
  const [status, setStatus] = React.useState<"loading" | "error" | "loaded">(
    "loading"
  );
  const handleLoad = () => {
    setStatus("loaded");
  };
  const handleError = () => {
    setStatus("error");
  };

  React.useEffect(() => {
    const ele = new Image();
    ele.onload = handleLoad;
    ele.onerror = handleError;
    ele.src = src;
    return () => {
      ele.removeEventListener("load", handleLoad);
      ele.removeEventListener("error", handleError);
    };
  }, [src]);

  return status;
};
