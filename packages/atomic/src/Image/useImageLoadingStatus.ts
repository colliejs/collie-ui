import { URL } from "@c3/types";
import React, { useEffect, useState, useRef } from "react";

export const useImageLoadingStatus = (src: URL) => {
  const [status, setStatus] = useState<"loading" | "error" | "loaded">("loading");

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);


  const onLoad = () => {
    if (isMounted.current) {
      setStatus("loaded");
    }
  };

  const onError = () => {
    if (isMounted.current) {
      setStatus("error");
    }
  };

  useEffect(() => {
    const img = new Image();
    img.onload = onLoad;
    img.onerror = onError;
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return status;
};

