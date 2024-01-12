BUG:mask()类型有问题
..._mask() ,


2.
export const StyledMask = styled(
  Fixed,
  {
    contentVisibility: "auto",
    zIndex: 100,
    background: "rgba(0 ,0, 0, 0.2)",
    "&[data-state='visible']": { pointerEvents: "auto" },
    "&[data-state='hidden']": { pointerEvents: "none" },
    ..._mask(),
    variants: {
      defaultHidden: {
        true: {
          opacity: 0,
          // pointerEvents: "none",
        },
      },
    },
  },
  { as: "co-mask" },
) as any;

//as any 没有css编译出来
