import {configure} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs/react";
import {addDecorator} from "@storybook/react";

addDecorator(withKnobs);

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
