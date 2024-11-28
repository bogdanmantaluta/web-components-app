import {html, TemplateResult} from 'lit';

import '../src/components/table.js';

export default {
  title: 'Table',
  component: 'web-table',
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
const items = [
  {
    "username": "test1",
    "password": "test2",
    "email": "bogdan.mantaluta@gmail.com",
    "birthdate": "Monday, December 11, 2024 at 12:00 AM GMT+2"
  },
  {
    "username": "test4",
    "password": "test5",
    "email": "bogdan.mantaluta@gmail.com",
    "birthdate": "Monday, November 1, 2024 at 12:00 AM GMT+2"
  },
  {
    "username": "test6",
    "password": "test7",
    "email": "bogdan.mantaluta@gmail.com",
    "birthdate": "Monday, February 11, 2024 at 12:00 AM GMT+2"
  },

]
const Template: Story<ArgTypes> = () => html`
  <web-table .items="${items}"></web-table>
`;

export const App = Template.bind({});
App.args = {
};
