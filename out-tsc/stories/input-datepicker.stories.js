import { html } from 'lit';
import '../src/components/input-datepicker.js';
export default {
    title: 'Input-Datepicker',
    component: 'web-input-datepicker',
    argTypes: {
        label: { control: 'string' },
        placeholder: { control: 'string' },
    },
};
const Template = ({ label = "Input", placeholder = "Input" }) => html `
  <web-input-datepicker placeholder=${placeholder} label=${label}></web-input-datepicker>
`;
export const App = Template.bind({});
App.args = {
    label: 'Input',
    placeholder: 'Input',
};
//# sourceMappingURL=input-datepicker.stories.js.map