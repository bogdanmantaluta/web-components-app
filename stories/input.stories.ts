import {html, TemplateResult} from 'lit';

import '../src/components/input.js';

export default {
  title: 'Input',
  component: 'web-input',
  argTypes: {
    label: {control: 'string'},
    placeholder: {control: 'string'},
  },
};

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  placeholder?: string;
}

const Template: Story<ArgTypes> = ({label = "Input", placeholder = "Input"}: ArgTypes) => html`
  <web-input placeholder=${placeholder} label=${label}></web-input>
`;

export const App = Template.bind({});
App.args = {
  label: 'Input',
  placeholder: 'Input',
};
