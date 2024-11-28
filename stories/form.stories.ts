import {html, TemplateResult} from 'lit';

import '../src/components/form.js';
import '../src/components/input.js';
import '../src/components/input-datepicker.js';

export default {
  title: 'Form',
  component: 'web-form',
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
  <<web-form>
    <form>
      <h2>Register</h2>
      <web-input type="text" name="username" placeholder="Your Username" label="Username"></web-input>
      <web-input type="password" name="password" placeholder="Your Password" label="Password"></web-input>
      <web-input type="email" name="email" placeholder="Your Email" label="Email"></web-input>
      <web-input-datepicker label="Birth date" name="birthdate"></web-input-datepicker>
  </web-form>
`;

export const App = Template.bind({});
App.args = {
};
