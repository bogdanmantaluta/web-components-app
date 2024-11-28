import { html } from 'lit';
import '../src/components/button.js';
export default {
    title: 'Button',
    component: 'web-button',
    argTypes: {
        text: { control: 'string' },
    },
};
const Template = ({ text = "Button" }) => html `
  <web-button>${text}</web-button>
`;
export const App = Template.bind({});
App.args = {
    text: 'Button',
};
//# sourceMappingURL=button.stories.js.map