export const alpha = (alpha: number, isWhite = true) =>
  isWhite ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;

export const colors = {
  grey: {
    100: "hsla(0,0%,100%,1)",
    90: "hsla(0,0%,90%,1)",
    80: "hsla(0,0%,80%,1)",
    70: "hsla(0,0%,70%,1)",
    60: "hsla(0,0%,60%,1)",
    50: "hsla(0,0%,50%,1)",
    40: "hsla(0,0%,40%,1)",
    30: "hsla(0,0%,30%,1)",
    20: "hsla(0,0%,20%,1)",
    10: "hsla(0,0%,10%,1)",
    0: "hsla(0,0%,0%,1)",
  },
} as const;
