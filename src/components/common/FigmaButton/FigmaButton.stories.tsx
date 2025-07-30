import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FigmaButton from "./index";

export default {
  title: "Components/FigmaButton",
  component: FigmaButton,
  argTypes: {
    children: {
      control: "text",
      description: "Button text content"
    }
  },
  parameters: {
    docs: {
      description: {
        component: 
          "Button component following the exact Figma design: flex layout, 8px horizontal padding, Primary-500 background, center alignment."
      }
    }
  }
} as Meta<typeof FigmaButton>;

const Template: StoryFn<typeof FigmaButton> = (args) => <FigmaButton {...args} />;

// Default button as shown in Figma
export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

// Design specifications showcase
export const DesignSpecs = () => (
  <div className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg">
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Figma Button</h3>
      <FigmaButton>Button</FigmaButton>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Design Specifications</h3>
      <div className="bg-white p-4 rounded border text-sm text-gray-600">
        <ul className="space-y-1">
          <li>• <strong>Display:</strong> inline-flex</li>
          <li>• <strong>Height:</strong> 60px (más grande como en Figma)</li>
          <li>• <strong>Padding:</strong> 20px 32px (mucho más espacioso)</li>
          <li>• <strong>Min Width:</strong> 200px</li>
          <li>• <strong>Justify Content:</strong> center</li>
          <li>• <strong>Align Items:</strong> center</li>
          <li>• <strong>Border Radius:</strong> 16px (más redondeado)</li>
          <li>• <strong>Border:</strong> 2px solid #C6B6F1 (más grueso)</li>
          <li>• <strong>Background:</strong> #F9FAFB (Grey-50)</li>
          <li>• <strong>Box Sizing:</strong> border-box</li>
        </ul>
        <br />
        <h4 className="font-semibold text-gray-800 mb-2">Typography:</h4>
        <ul className="space-y-1">
          <li>• <strong>Color:</strong> #A80CE8 (Primary-500)</li>
          <li>• <strong>Text Align:</strong> center</li>
          <li>• <strong>Font Family:</strong> Roboto</li>
          <li>• <strong>Font Size:</strong> 16px (más grande)</li>
          <li>• <strong>Font Weight:</strong> 400 (normal)</li>
          <li>• <strong>Font Style:</strong> normal</li>
          <li>• <strong>Line Height:</strong> 20px</li>
        </ul>
        <br />
        <h4 className="font-semibold text-gray-800 mb-2">Selection:</h4>
        <ul className="space-y-1">
          <li>• <strong>Selection Color:</strong> Primary-500 (#A80CE8)</li>
        </ul>
      </div>
    </div>
  </div>
);

DesignSpecs.parameters = {
  docs: {
    description: {
      story: "Simple button following the exact Figma specifications with no additional variants."
    }
  }
}; 