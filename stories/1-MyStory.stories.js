import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// export default {
//   title: 'Button',
//   component: Button,
// };
//

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );


// knob
export default {
  title: "MyStory",
  decorators: [withKnobs],
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </Button>
);

// Knobs as dynamic variables.
export const dynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};


export const inGroups = () => {
  const personalGroupId = 'personal info';
  const generalGroupId = 'general info';

  const name = text("Name", "Mike", personalGroupId);
  const age = number("Age", 27, personalGroupId);
  const message = text("Hello!", 45, generalGroupId);
  const content = `
    I am ${name} and I'm ${age} years old.
    ${message}
  `;

  return <div>{content}</div>;
};
