import React from "react";
import {action} from "@storybook/addon-actions";
import {Button} from "@storybook/react/demo";
// import markdown from "./some.md";
import styled from 'styled-components';
import anyNote from "./any.md";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  button
} from "@storybook/addon-knobs";

const label = "Do Something";
const handler = () => action("clicked");
const groupId = "GROUP-ID1";
button(label, handler, groupId);

export const Text = () => (<Button onClick={action("clicked")}>Hello Button</Button>);

export const Emoji = () => (<Button onClick={action("clicked")}>
  <span role="img" aria-label="so cool">
    😀 😎 👍 💯
  </span>
</Button>);

// knob
export default {
  title: "MyStory",
  decorators: [withKnobs],
  parameters: {
    // notes: markdown
    notes: {
      // markdown: markdown,
      anyNote: anyNote
    }
  }
};
// Knobs for React props
export const withAButton = () => (<Button disabled={boolean("Disabled", false)}>
  {text("Label", "Hello Storybook")}
</Button>);

// Knobs as dynamic variables.
export const dynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
};

export const inGroups = () => {
  const personalGroupId = "personal info";
  const generalGroupId = "general info";
  const name = text("Name", "Mike", personalGroupId);
  const age = number("Age", 27, personalGroupId);
  const message = text("Hello!", 45, generalGroupId);
  const label = "Temperature";
  const defaultValue = 73;
  const options = {
    range: true,
    min: 60,
    max: 90,
    step: 1
  };
  const groupId = "GROUP-ID1";

  const value = number(label, defaultValue, options, groupId);

  const content = ` ${value}
    I am ${name} and I'm ${age} years old.
    ${message}
  `;
  return <div>{content}</div>;
};

const ButtonStyle = styled.button `
  // color: palevioletred;
  // color: ${props => props.children === 'blue' ? 'blue' : 'palevioletred'};
  color: ${props => props.children};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  // border: 2px solid ${props => props.children === 'red' ? 'red' :  props.children};
  border: 2px solid ${props => props.children};
  border-radius: 3px;
`;

export const inSelector = () => {
  const label = "Colors";
  const options = {
    red: "red",
    blue: "blue",
    yellow: "yellow",
    rainbow: [
      "red", "orange", "etc"
    ],
    None: null
  };
  const defaultValue = "blue";
  const groupId = "GROUP-ID1";
  const value = select(label, options, defaultValue, groupId);
  const content = `${value}`;
  return <div>
    <ButtonStyle>{content}</ButtonStyle>
  </div>;
};
