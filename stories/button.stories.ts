import {html, TemplateResult} from 'lit';

import '../src/components/button.js';

export default {
  title: 'Button',
  component: 'web-button',
  argTypes: {
    text: { control: 'string' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  text?: string;
}

const Template: Story<ArgTypes> = ({ text="Button"}: ArgTypes) => html`
  <web-button>${text}</web-button>
`;

export const App = Template.bind({});
App.args = {
  text: 'Button',
};
