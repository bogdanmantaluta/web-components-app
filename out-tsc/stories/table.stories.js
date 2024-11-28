import { html } from 'lit';
import '../src/components/table.js';
export default {
    title: 'Table',
    component: 'web-table',
    argTypes: {},
};
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
];
const Template = () => html `
  <web-table .items="${items}"></web-table>
`;
export const App = Template.bind({});
App.args = {};
//# sourceMappingURL=table.stories.js.map