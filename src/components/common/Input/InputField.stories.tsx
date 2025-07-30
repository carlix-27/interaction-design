import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import InputField, {InputFieldProps} from "./InputField";
import {iconArray, iconList} from "../../../assets/icons/icon_list";

export default {
    title: "Components/InputField",
    component: InputField,
    argTypes: {
        leftIcon: {control: "select", options: iconArray},
        rightIcon: {control: "select", options: iconArray},
        label: {control: "text"},
        placeholder: {control: "text"},
    },
} as Meta;

const Template: StoryFn<InputFieldProps> = args => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "",
    placeholder: "Placeholder text",
    leftIcon: iconList.plus_black,
    rightIcon: iconList.send,
};
