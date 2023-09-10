import React from "react";
import { Heading, Text, Title } from "..";
import "../../dist/theme.css";
export default {
  title: "atomic/Text",
};

//===========================================================
// Heading
//===========================================================

export const HeadingX = () => {
  return (
    <div>
      <Heading kind="h1Bold">h1Bold</Heading>
      <Heading kind="h1Normal">h1Normal</Heading>
      <Heading kind="h1Light">h1Light</Heading>
      <Heading kind="h2Bold">h2Bold</Heading>
      <Heading kind="h2Normal">h2Normal</Heading>
      <Heading kind="h2Light">h2Light</Heading>
      <Heading kind="h3Bold">h3Bold</Heading>
      <Heading kind="h3Normal">h3Normal</Heading>
      <Heading kind="h3Light">h3Light</Heading>

      <Text weight="bold" size="sm">
        bold--sm
      </Text>
      <Text weight="bold" size="md">
        bold-md
      </Text>
      <Text weight="normal" size="sm">
        normal-sm
      </Text>
      <Text weight="normal" size="md">
        nomal-md
      </Text>
    </div>
  );
};

export const UnderlineText = () => {
  return (
    <div>
      <Text underline>Underline</Text>
      <Text weight="bold">bold</Text>
      <Text italic>italic</Text>
      <Text delete>delete</Text>
      <p style={{ textDecoration: "line-through" }}>xxx</p>
    </div>
  );
};

export const TextAsTitle = () => {
  return (
    <Title css={{ lineHeight: 1 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
      ipsam id culpa facere ea repudiandae dicta qui? Asperiores dolores
      nihil provident magnam autem est ut quaerat eaque corporis odit.
    </Title>
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
