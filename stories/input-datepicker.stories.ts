import {html, TemplateResult} from 'lit';

import '../src/components/input-datepicker.js';

export default {
  title: 'Input-Datepicker',
  component: 'web-input-datepicker',
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
  <web-input-datepicker placeholder=${placeholder} label=${label}></web-input-datepicker>
`;

export const App = Template.bind({});
App.args = {
  label: 'Input',
  placeholder: 'Input',
};
