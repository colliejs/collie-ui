import React from "react";
import { Text, Title } from "../src";

export default {
  title: "atomic/Text",
};

//============================================================================
// forward round attributes to Atomic
//============================================================================
export const RoundText = () => {
  return (
    <Text round css={{ border: "1px solid red" }}>
      RoundText
    </Text>
  );
};
export const UnderlineFOO = () => {
  return (
    <div>
      <Text underline>Underline</Text>
      <Text bold>bold</Text>
      <Text italic>italic</Text>
      <p style={{ textDecoration: "line-through" }}>xxx</p>
    </div>
  );
};

export const TextAsTitle = () => {
  return (
    <Title css={{ lineHeight: 1 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit.
    </Title>
  );
};
export const gradientText = () => {
  return (
    <Text
      gradient="to right, red, #3f3"
      css={{
        w: 300,
        color: "green",
        typo: { fontSize: 20, fontWeight: 200 },
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit
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
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam id
    culpa facere ea repudiandae dicta qui? Asperiores dolores nihil provident
    magnam autem est ut quaerat eaque corporis odit
  </Text>
);
export const TwoLineText = () => {
  return (
    <Text
      rows={2}
      css={{
        w: 300,
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et ipsam
      id culpa facere ea repudiandae dicta qui? Asperiores dolores nihil
      provident magnam autem est ut quaerat eaque corporis odit
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
