import React from "react";
import { Text } from "../Text/Text";
import "../collie-generated.css";

export default {
  title: "atomic/Text",
};

export const UnderlineText = () => {
  return (
    <div>
      <Text underline>Underline</Text>
      <Text italic>italic</Text>
      <Text delete>delete</Text>
      <p style={{ textDecoration: "line-through" }}>xxx</p>
    </div>
  );
};

export const TextAsTitle = () => {
  return (
    <Text css={{ lineHeight: 1 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
      ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores
      nihil provident magnam autem est ut quaerat eaque corporis odit.
    </Text>
  );
};
export const GradientText = () => {
  return (
    <Text
      gradient="linear-gradient(to right, red, yellow)"
      css={{
        w: 300,
        color: "green",
        typo: { fontSize: 20, fontWeight: 200 },
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
      ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores
      nihil provident magnam autem est ut quaerat eaque corporis odit
    </Text>
  );
};
export const OnelineText = () => (
  <Text
    rows={1}
    css={{
      w: 300,
    }}
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
    ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores
    nihil provident magnam autem est ut quaerat eaque corporis odit
  </Text>
);
type x = Parameters<typeof Text>[0]["rows"];
// tyep x2 = DEBUG<Parameters<typeof Text>>
// type x1=x['']
export const TwoLineText = () => {
  return (
    <Text
      rows={2}
      css={{
        w: 300,
        bc: "yellow",
        fontSize: "$9",
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
      ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores
      nihil provident magnam autem est ut quaerat eaque corporis odit
    </Text>
  );
};
export const Ttext22 = () => {
  return (
    <Text
      css={{
        typo: {
          fontSize: 24,
          lineHeight: 1,
          fontFamily: "Poppins",
        },
        _before: {
          w: 28,
          h: 28,
          borderRadius: "50%",
          typo: {
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "Poppins",
            lineHeight: 1,
          },
        },
      }}
    >
      1SSDDFFFFFFFFFFF
    </Text>
  );
};
