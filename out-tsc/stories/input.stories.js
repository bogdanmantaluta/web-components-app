import { html } from 'lit';
import '../src/components/input.js';
export default {
    title: 'Input',
    component: 'web-input',
    argTypes: {
        label: { control: 'string' },
        placeholder: { control: 'string' },
    },
};
const Template = ({ label = "Input", placeholder = "Input" }) => html `
  <web-input placeholder=${placeholder} label=${label}></web-input>
`;
export const App = Template.bind({});
App.args = {
    label: 'Input',
    placeholder: 'Input',
};
//# sourceMappingURL=input.stories.js.map