import { html } from 'lit';
import '../src/web-lion.js';
import '../src/components/navbar.js';
export default {
    title: 'NavBar',
    component: 'web-navbar',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = ({ header, backgroundColor = 'white' }) => html `
  <web-navbar style="--web-lion-background-color: ${backgroundColor}" .header=${header}></web-navbar>
`;
export const App = Template.bind({});
App.args = {
    header: 'Navbar',
};
//# sourceMappingURL=navbar.stories.js.map