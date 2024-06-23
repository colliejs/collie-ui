import { URL } from "@collie-ui/common";
import React, { useEffect, useState } from "react";

export const useImageLoadingStatus = (src: URL) => {
  const [status, setStatus] = useState<"loading" | "error" | "loaded">("loading");
  const onLoad = () => {
    setStatus("loaded");
  };
  const onError = () => {
    setStatus("error");
  };

  useEffect(() => {
    const img = new Image();
    img.onload = onLoad;
    img.onerror = onError;
    img.src = src;
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src]);

  return status;
};
