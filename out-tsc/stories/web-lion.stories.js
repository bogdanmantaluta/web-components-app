import { html } from 'lit';
import '../src/web-lion.js';
export default {
    title: 'WebLion',
    component: 'web-lion',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = ({ header, backgroundColor = 'white' }) => html `
  <web-lion style="--web-lion-background-color: ${backgroundColor}" .header=${header}></web-lion>
`;
export const App = Template.bind({});
App.args = {
    header: 'My app',
};
//# sourceMappingURL=web-lion.stories.js.map