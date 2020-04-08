import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const PrimaryButton = () => <Button variant="primary" onClick={action("clicked")}>Hello Button</Button>;

export const SecondaryButton = () => (
  <Button variant="secondary" onClick={action("clicked")}>
    Secondary Button
  </Button>
);

export const FullWidthButton = () => (
  <Button fullWidth onClick={action("clicked")}>
    FullWidth Button
  </Button>
);
