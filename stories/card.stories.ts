import {html, TemplateResult} from 'lit';

import '../src/components/card.js';

export default {
  title: 'Card',
  component: 'web-card',
  argTypes: {
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {

}

const Template: Story<ArgTypes> = () => html`
  <web-card></web-card>
`;

export const App = Template.bind({});
App.args = {
};
